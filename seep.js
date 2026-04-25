// ══════════════════════════════════════════════════════
//  FIREBASE CONFIG  (paste your project values here)
// ══════════════════════════════════════════════════════
const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyDzJsJYfTcWaeC5f43EXG-brzAaY7_BBk8",
  authDomain:        "seep-7fe1d.firebaseapp.com",
  databaseURL:       "https://seep-7fe1d-default-rtdb.firebaseio.com",
  projectId:         "seep-7fe1d",
  storageBucket:     "seep-7fe1d.firebasestorage.app",
  messagingSenderId: "681624379623",
  appId:             "1:681624379623:web:d9e10ac7318f96e98d0242",
};
firebase.initializeApp(FIREBASE_CONFIG);
const DB = firebase.database();

// ── Multiplayer globals ──
let localUid      = null;   // this browser's anonymous Firebase UID
let localName     = '';     // display name chosen at login
let currentGameId = null;   // 6-digit game-room ID
let localSeat     = null;   // 0-3 assigned seat
let _roomRef      = null;   // Firebase ref for room listener cleanup
let _stateRef     = null;   // Firebase ref for gameState listener cleanup

// ══════════════════════════════════════════════════════
//  CONSTANTS & HELPERS
// ══════════════════════════════════════════════════════
const SUITS     = ['S','H','D','C'];
const SUIT_SYM  = {S:'♠',H:'♥',D:'♦',C:'♣'};
const SUIT_ORD  = {S:0,H:1,D:2,C:3};
const RANK_NAME = {1:'A',11:'J',12:'Q',13:'K'};
const WIN_SCORE = 100;

const rn  = r => RANK_NAME[r] || String(r);
const sym = s => SUIT_SYM[s];
const red = s => s==='H'||s==='D';

function cardPts(c) {
  if (c.suit==='S')                      return c.rank;   // every spade = face value
  if (c.suit==='D' && c.rank===10)       return 6;        // 10♦ = 6
  if (c.rank===1)                        return 1;        // other aces
  return 0;
}

function fiv(item) {  // floor-item value
  return item.type==='house' ? item.value : item.card.rank;
}

// A house is "doubled" when the sum of all its card ranks ≥ 2 × declared value
function isDoubled(house) {
  return house.cards.reduce((s,c) => s + c.rank, 0) >= 2 * house.value;
}

// ── Auto-merge: find a subset of vals that sums to target; return their indices or null ──
function findSubsetIndices(vals, target) {
  function bt(i, rem, path) {
    if (rem === 0) return path;
    if (i >= vals.length || rem < 0) return null;
    const withI = bt(i+1, rem - vals[i], [...path, i]);
    if (withI !== null) return withI;
    return bt(i+1, rem, path);
  }
  return bt(0, target, []);
}

// After building/cementing a house, absorb any loose floor cards that sum to house.value.
// Runs in a loop until no more groups can be found.
function mergeLooseIntoHouse(house) {
  let merged = true;
  while (merged) {
    merged = false;
    const loose = G.floor
      .map((it, i) => ({it, i}))
      .filter(x => x.it.type === 'card');
    if (!loose.length) break;
    const sub = findSubsetIndices(loose.map(x => x.it.card.rank), house.value);
    if (sub !== null) {
      const floorIdxs = sub.map(si => loose[si].i);
      house.cards.push(...floorIdxs.map(i => G.floor[i].card));
      floorIdxs.sort((a,b) => b-a).forEach(i => G.floor.splice(i, 1));
      merged = true;
    }
  }
}

function sortHand(hand) {
  hand.sort((a,b) => a.rank - b.rank || SUIT_ORD[a.suit] - SUIT_ORD[b.suit]);
}

function initDeck() {
  const d = [];
  for (const s of SUITS) for (let r=1;r<=13;r++) d.push({suit:s,rank:r});
  return d;
}

function shuffle(a) {
  for (let i=a.length-1;i>0;i--) {
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

// Subset-sum check: does any subset of `vals` sum to `target`?
function hasSubsetSum(vals, target) {
  const dp = new Set([0]);
  for (const v of vals) {
    for (const s of [...dp]) dp.add(s+v);
    if (dp.has(target)) return true;
  }
  return dp.has(target);
}

// Flatten a floor item to its component cards
function itemCards(item) {
  return item.type==='house' ? item.cards : [item.card];
}

// ══════════════════════════════════════════════════════
//  GAME STATE
// ══════════════════════════════════════════════════════
let G = {};

function freshState() {
  return {
    deck: shuffle(initDeck()),
    hands: [[],[],[],[]],
    floor: [],
    captured: [[],[]],
    scores: [0,0],
    seepBonus: [0,0],
    currentPlayer: 0,
    bidder: 0,
    bidValue: null,
    phase: 'bid',
    roundNum: 1,
    isFirstTurn: true,
    handsDealt: false,
    lastCaptureTeam: null,
    selHandIdx: null,
    selFloorIdxs: [],
  };
}

// ══════════════════════════════════════════════════════
//  SCREEN HELPERS
// ══════════════════════════════════════════════════════
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  // Show global menu on all screens except home
  const menuBtn = document.getElementById('global-menu-btn');
  if (id === 'home-screen') {
    menuBtn.classList.remove('visible');
    closeMenu();
  } else {
    menuBtn.classList.add('visible');
    updateMenuInfo();
  }
}

// ══════════════════════════════════════════════════════
//  START / BID
// ══════════════════════════════════════════════════════
function startGame() {
  G = freshState();
  G.hands[G.bidder] = G.deck.splice(0,4);
  sortHand(G.hands[G.bidder]);
  showBidScreen();
}

function showBidScreen() {
  showScreen('bid-screen');
  renderBidScreen();
}

function renderBidScreen() {
  const isBidder = (localSeat === null || localSeat === G.bidder);
  const hand   = G.hands[G.bidder];
  const maxRnk = Math.max(...hand.map(c=>c.rank));
  const canBid = maxRnk >= 9;

  // Non-bidder: show waiting message, hide buttons
  if (!isBidder) {
    document.getElementById('bid-instr').textContent = `Waiting for ${playerName(G.bidder)} to bid…`;
    document.getElementById('bid-hand-area').innerHTML = '';
    document.getElementById('bid-btn-area').innerHTML = '';
    document.getElementById('bid-hint').textContent = '';
    return;
  }

  // Can pass if highest is exactly a non-spade 9
  const has9Spade = hand.some(c=>c.rank===9&&c.suit==='S');
  const canPass   = !canBid || (maxRnk===9 && !has9Spade);

  document.getElementById('bid-instr').textContent = canBid
    ? `${playerName(G.bidder)} – choose your bid (≥ 9). You need a matching key card in your hand.`
    : 'No card ≥ 9 — redealing…';

  // Hand display
  const ha = document.getElementById('bid-hand-area');
  ha.innerHTML = '';
  hand.forEach(c => ha.appendChild(makeCard(c,false,false)));

  // Bid buttons
  const ba = document.getElementById('bid-btn-area');
  ba.innerHTML = '';

  if (canBid) {
    const validBids = [...new Set(hand.filter(c=>c.rank>=9).map(c=>c.rank))].sort((a,b)=>a-b);
    validBids.forEach(v => {
      const b = document.createElement('button');
      b.className = 'bid-btn';
      b.textContent = `Bid ${rn(v)} (${v})`;
      b.onclick = () => confirmBid(v);
      ba.appendChild(b);
    });
  }

  const hint = document.getElementById('bid-hint');
  if (canPass) {
    hint.textContent = canBid ? 'You may pass (highest card is a non-♠ 9).' : '';
    const pb = document.createElement('button');
    pb.className = 'bid-btn pass';
    pb.textContent = 'Pass (Redeal)';
    pb.onclick = reDealBid;
    ba.appendChild(pb);
  } else { hint.textContent = ''; }

  if (!canBid) setTimeout(reDealBid, 1200);
}

function reDealBid() {
  G.deck = shuffle(initDeck());
  G.hands[G.bidder] = G.deck.splice(0,4);
  sortHand(G.hands[G.bidder]);
  if (currentGameId) {
    pushGameState();
  } else {
    renderBidScreen();
  }
}

function dealRemainingCards() {
  // Bidder already has 4 from bidding — give them 8 more to reach 12
  G.hands[G.bidder].push(...G.deck.splice(0,8));
  sortHand(G.hands[G.bidder]);
  // Deal 12 to each other player
  for (let p=0; p<4; p++) {
    if (p === G.bidder) continue;
    G.hands[p] = G.deck.splice(0,12);
    sortHand(G.hands[p]);
  }
  G.handsDealt = true;
}

function confirmBid(value) {
  G.bidValue = value;
  // Deal only the 4 floor cards; remaining hands dealt after bidder's first move
  G.floor = G.deck.splice(0,4).map(c=>({type:'card',card:c}));
  G.phase = 'play';
  if (currentGameId) {
    pushGameState();  // all clients transition via listener
  } else {
    showScreen('game-screen');
    renderGame();
  }
}

// Returns the display name for a seat (falls back to "Player N" for offline play)
function playerName(seat) {
  return (G.playerNames && G.playerNames[seat]) || `Player ${seat+1}`;
}

// ══════════════════════════════════════════════════════
//  RENDER GAME
// ══════════════════════════════════════════════════════
const PLAYER_LABELS = [
  ['Player 1','T1','t0'],
  ['Player 2','T2','t1'],
  ['Player 3','T1','t0'],
  ['Player 4','T2','t1'],
];
// Layout positions: index in display grid
// zone-0 = bottom (P mapped by currentPlayer), zone-1 = left, zone-2 = top, zone-3 = right
// We keep positions fixed: zone-X always shows player X (0-indexed)
// active player has gold border

function renderGame() {
  const cp = G.currentPlayer;
  const t0 = G.scores[0], t1 = G.scores[1];

  // Header
  document.getElementById('sv0').textContent = G.scores[0];
  document.getElementById('sv1').textContent = G.scores[1];
  document.getElementById('g-sc0').className = 'g-score' + (t0>t1?' winning':'');
  document.getElementById('g-sc1').className = 'g-score' + (t1>t0?' winning':'');
  document.getElementById('g-round').textContent = `Round ${G.roundNum}`;

  // Player labels & active highlight
  [0,1,2,3].forEach(p => {
    const [,,cls] = PLAYER_LABELS[p];
    const pName = playerName(p);
    const lbl = document.getElementById(`lbl-${p}`);
    lbl.textContent = (p===0||p===2) ? `${pName} · Team ${p%2===0?1:2}` : `${pName}·T${p%2===0?1:2}`;
    lbl.className = `p-label ${cls}${p===cp?' ':''}`;
    document.getElementById(`zone-${p}`).classList.toggle('active', p===cp);
  });

  // Turn label
  document.getElementById('turn-lbl').textContent = `${playerName(cp)}'s Turn (Team ${cp%2+1})`;
  document.getElementById('bid-disp').textContent = G.bidValue ? `Bid: ${rn(G.bidValue)} (${G.bidValue})` : '';

  // Captured pts
  document.getElementById('cap0').textContent = calcCapPts(0);
  document.getElementById('cap1').textContent = calcCapPts(1);

  renderFloor();
  renderAllHands();
  updateActions();
}

function calcCapPts(team) {
  return G.captured[team].reduce((s,c)=>s+cardPts(c),0) + G.seepBonus[team];
}

// ── Floor ──
function renderFloor() {
  const area = document.getElementById('floor-area');
  area.innerHTML = '';
  if (!G.floor.length) {
    area.innerHTML = '<span class="floor-empty">Empty floor</span>';
    return;
  }
  G.floor.forEach((item,idx) => {
    const el = item.type==='house' ? makeHouseEl(item,idx) : makeFloorCardEl(item.card,idx);
    area.appendChild(el);
  });
}

// ── Hands ──
function renderAllHands() {
  [0,1,2,3].forEach(p => renderPlayerHand(p));
  renderActiveHand();
}

// All 4 seat zones always show a hidden pile (count badge) — even the active player.
// The active player's face-up cards are rendered separately in active-hand-zone.
function renderPlayerHand(p) {
  const container = document.getElementById(`hand-${p}`);
  container.innerHTML = '';
  const count = G.hands[p].length;
  if (count > 0) container.appendChild(makeHiddenPile(count));
}

// Full-width row below the table: shows the local player's cards face-up (multiplayer)
// or the current player's cards (single-device mode).
function renderActiveHand() {
  const viewSeat = (localSeat !== null) ? localSeat : G.currentPlayer;
  const isMyTurn = (localSeat === null) || (localSeat === G.currentPlayer);
  const zone = document.getElementById('active-hand-zone');
  zone.innerHTML = '';
  G.hands[viewSeat].forEach((card, idx) => {
    const sel = G.selHandIdx === idx;
    const el  = makeCard(card, isMyTurn, sel);
    if (isMyTurn) el.onclick = () => selectHandCard(idx);
    else el.style.cursor = 'default';
    zone.appendChild(el);
  });
}

function makeHiddenPile(count) {
  const wrapper = document.createElement('div');
  wrapper.className = 'hidden-pile';
  const stack = document.createElement('div');
  stack.className = 'pile-stack';
  // Draw up to 3 staggered face-down cards
  const show = Math.min(3, count);
  for (let i = 0; i < show; i++) {
    const c = document.createElement('div');
    c.className = 'card face-down';
    c.style.cssText = `position:absolute; top:${i*4}px; left:${i*4}px; width:54px; height:76px;`;
    stack.appendChild(c);
  }
  const lbl = document.createElement('div');
  lbl.className = 'pile-label';
  lbl.textContent = `${count} cards`;
  wrapper.appendChild(stack);
  wrapper.appendChild(lbl);
  return wrapper;
}

// ── Card element ──
function makeCard(card, clickable, selected) {
  const el = document.createElement('div');
  el.className = 'card'+(red(card.suit)?' red':'')+(selected?' selected':'');
  if (!clickable) el.style.cursor='default';
  const s=sym(card.suit), r=rn(card.rank);
  el.innerHTML = `<div class="c-tl">${r}<br>${s}</div><div class="rank">${r}</div><div class="suit">${s}</div><div class="c-br">${r}<br>${s}</div>`;
  return el;
}

// ── Floor card element ──
function makeFloorCardEl(card, idx) {
  const sel = G.selFloorIdxs.includes(idx);
  const el  = makeCard(card, true, sel);
  el.classList.add('floor-card');
  el.onclick = () => toggleFloor(idx);
  return el;
}

// ── House element ──
function makeHouseEl(house, idx) {
  if (!isDoubled(house)) return makeUndoubledHouseEl(house, idx);

  const sel = G.selFloorIdxs.includes(idx);
  // Priority: shared > pucca > doubled
  const state = house.shared ? ' shared' : house.pucca ? ' pucca' : ' doubled';
  const el  = document.createElement('div');
  el.className = 'house' + state + (sel ? ' selected' : '');

  // Badge: shared shows "T1+T2", otherwise shows owning team
  const badgeCls  = house.shared ? 'shared' : `t${house.team}`;
  const badgeTxt  = house.shared ? 'T1+T2' : `T${house.team+1} P${house.owner+1}`;

  el.innerHTML = `
    <div class="h-val">${rn(house.value)}</div>
    <div class="h-badge ${badgeCls}">${badgeTxt}</div>
    <div class="h-count">${house.cards.length}c</div>
    <button class="house-peek-btn" title="Peek cards">👁</button>`;
  el.querySelector('.house-peek-btn').onclick = e => { e.stopPropagation(); showHousePeek(house); };
  el.onclick = () => toggleFloor(idx);
  return el;
}

// Undoubled house: show as a fanned pile of mini-cards
function makeUndoubledHouseEl(house, idx) {
  const sel = G.selFloorIdxs.includes(idx);
  const el  = document.createElement('div');
  el.className = 'house-pile' + (sel ? ' selected' : '');
  el.title = `Building house of ${rn(house.value)} — not yet doubled`;

  // Show up to 3 cards fanned (latest card on top)
  const display = house.cards.slice(-3).reverse();
  display.forEach((c, i) => {
    const mc = document.createElement('div');
    mc.className = 'pile-mini-card' + (red(c.suit) ? ' red' : '');
    mc.style.cssText = `top:${i*18}px; left:${i*4}px; z-index:${10-i};`;
    mc.innerHTML = `<span class="pmc-rank">${rn(c.rank)}</span><span class="pmc-suit">${sym(c.suit)}</span>`;
    el.appendChild(mc);
  });

  // Badge: team color + declared value
  const badge = document.createElement('div');
  badge.className = `h-pile-badge t${house.team}`;
  badge.textContent = `${rn(house.value)} ▸ T${house.team+1}`;
  el.appendChild(badge);

  // Peek button
  const pb = document.createElement('button');
  pb.className = 'house-peek-btn';
  pb.title = 'Peek all cards';
  pb.textContent = '👁';
  pb.onclick = e => { e.stopPropagation(); showHousePeek(house); };
  el.appendChild(pb);

  el.onclick = () => toggleFloor(idx);
  return el;
}

// ── House peek modal ──
function showHousePeek(house) {
  const state = house.shared ? ' ⚑ Shared (both teams)' : house.pucca ? ' ★ Pucca' : isDoubled(house) ? ' ◆ Doubled' : ' (building)';
  document.getElementById('peek-title').textContent =
    `House of ${rn(house.value)}${state} — ${house.cards.length} cards`;
  const area = document.getElementById('peek-cards');
  area.innerHTML = '';
  house.cards.forEach(c => area.appendChild(makeCard(c, false, false)));
  document.getElementById('house-peek').classList.add('show');
}

function closePeek() {
  document.getElementById('house-peek').classList.remove('show');
}

// ══════════════════════════════════════════════════════
//  SELECTION
// ══════════════════════════════════════════════════════
function selectHandCard(idx) {
  if (localSeat !== null && localSeat !== G.currentPlayer) return;
  G.selHandIdx = (G.selHandIdx===idx) ? null : idx;
  G.selFloorIdxs = [];
  renderActiveHand(); // only the active hand highlight changes
  renderFloor();
  updateActions();
}

function toggleFloor(idx) {
  if (localSeat !== null && localSeat !== G.currentPlayer) return;
  const i = G.selFloorIdxs.indexOf(idx);
  if (i===-1) G.selFloorIdxs.push(idx);
  else        G.selFloorIdxs.splice(i,1);
  renderFloor();
  updateActions();
}

// ══════════════════════════════════════════════════════
//  RULE ENGINE  –  Chain of Responsibility
// ══════════════════════════════════════════════════════

// ── Move Context (pure data, built once per UI event) ──
function buildMoveCtx() {
  if (G.selHandIdx === null) return null;
  const cp  = G.currentPlayer;
  const hand = G.hands[cp];
  const hc   = hand[G.selHandIdx];
  const sel  = G.selFloorIdxs.map(i => G.floor[i]);
  return {
    floor:     G.floor,
    floorVals: G.floor.map(fiv),
    floorSum:  G.floor.reduce((s,it) => s + fiv(it), 0),
    hand,
    handCard:  hc,
    handIdx:   G.selHandIdx,
    selItems:  sel,
    selSum:    sel.reduce((s,it) => s + fiv(it), 0),
    selLoose:  sel.filter(it => it.type==='card').map(it => it.card),
    selHouses: sel.filter(it => it.type==='house'),
    remainder: hand.filter((_,i) => i !== G.selHandIdx),
    team:      cp % 2,
    player:    cp,
  };
}

// ── Rule: SEEP (highest priority – overrides all) ──
// A seep requires the hand card to sweep the ENTIRE floor in one move:
//   • Every house on the floor must have value === hand card rank.
//   • All loose floor cards must sum to exactly hand card rank (if any exist).
// Both conditions must hold simultaneously for all items present.
function ruleSeep(ctx) {
  if (ctx.floor.length === 0)
    return {valid:false, reason:'Floor is empty'};

  const r          = ctx.handCard.rank;
  const looseItems = ctx.floor.filter(it => it.type === 'card');
  const houses     = ctx.floor.filter(it => it.type === 'house');

  // Every house must match the hand card rank exactly
  for (const h of houses) {
    if (h.value !== r)
      return {valid:false,
        reason:`House of ${rn(h.value)} (${h.value}) cannot be swept by ${rn(r)} — values must match`};
  }

  // All loose cards must sum to exactly the hand card rank
  if (looseItems.length > 0) {
    const looseSum = looseItems.reduce((s,it) => s + it.card.rank, 0);
    if (looseSum !== r)
      return {valid:false,
        reason:`Loose cards sum to ${looseSum}, not ${r} — cannot seep`};
  }

  return {valid:true, reason:'Seep! Sweep the entire floor', meta:{}};
}

// ── Rule: PICK ──
function rulePick(ctx) {
  if (ctx.selItems.length === 0)
    return {valid:false, reason:'No floor items selected'};
  // First turn: bidder may only pick with the bid card
  if (G.isFirstTurn && ctx.player === G.bidder && ctx.handCard.rank !== G.bidValue)
    return {valid:false, reason:`First turn: can only pick with the bid card (${rn(G.bidValue)})`};
  if (ctx.handCard.rank !== ctx.selSum)
    return {valid:false, reason:`Selected sum ${ctx.selSum} ≠ ${rn(ctx.handCard.rank)} (${ctx.handCard.rank})`};
  return {valid:true, reason:`Pick ${ctx.selItems.length} floor item(s)`, meta:{}};
}

// ── Key-card check: can player claim a house of value hv? ──
// Either they hold a duplicate in hand, OR a same-team house of same value is on the floor.
function hasKey(ctx, hv) {
  return ctx.remainder.some(c => c.rank === hv)
    || ctx.floor.some(it => it.type==='house' && it.team===ctx.team && it.value===hv);
}

// ── Rule: BUILD HOUSE (fresh – no existing house in selection) ──
// Three modes:
//   Contribute: a house of the computed value already exists on the floor.
//               No key card required — player is merging their cards into it (makes it shared).
//   Overlay   : hand.rank === Σloose → house value = hand.rank (immediately doubled).
//               Requires a duplicate hand card OR same-team house of same value on floor.
//   Addition  : house value = hand.rank + Σloose ≤ 13.
//               Requires a key card of that value in remainder or on floor (team house).
function ruleBuildHouse(ctx) {
  const looseSum  = ctx.selLoose.reduce((s,c) => s + c.rank, 0);
  const houseSum  = ctx.selHouses.reduce((s,h) => s + h.value, 0);

  // ── Merge mode: one or more floor houses in selection ──
  // The selected houses + hand card (+ any loose cards) are merged into an existing
  // target house whose value equals the combined total.
  if (ctx.selHouses.length > 0) {
    const hv = ctx.handCard.rank + looseSum + houseSum;
    if (hv > 13)
      return {valid:false, reason:`Sum ${hv} exceeds King (13)`};
    // Target must be a house on the floor with this value that is NOT one of the contributed houses
    const target = ctx.floor.find(it =>
      it.type==='house' && it.value===hv && !ctx.selHouses.includes(it));
    if (!target)
      return {valid:false, reason:`No house of ${rn(hv)} on the floor to merge into`};
    // Apply key-card ownership rules (same logic as ruleAddToHouse)
    let needsKey;
    if (ctx.team === target.team) {
      needsKey = (ctx.player === target.owner);
    } else {
      needsKey = (target.sharedBy === undefined || ctx.player === target.sharedBy);
    }
    if (needsKey && ctx.handCard.rank === target.value &&
        !ctx.remainder.some(c => c.rank === target.value))
      return {valid:false,
        reason:`Must keep a ${rn(target.value)} in hand to capture this house`};
    return {valid:true, reason:`Merge into house of ${rn(hv)}`, meta:{houseVal:hv, merge:true}};
  }

  // ── Normal mode: no floor houses in selection ──
  if (ctx.selLoose.length === 0)
    return {valid:false, reason:'Select floor card(s) to combine with your hand card'};

  // Determine candidate house value (overlay takes priority)
  const isOverlay = (ctx.handCard.rank === looseSum);
  const hv = isOverlay ? ctx.handCard.rank : ctx.handCard.rank + looseSum;

  if (hv < 9)
    return {valid:false, reason:`House value ${hv} is below 9 — minimum house value is 9`};
  if (!isOverlay && hv > 13)
    return {valid:false, reason:`Sum ${hv} exceeds King (13) — too high for a house`};
  // First turn: bid card can only be used to build if a spare bid card stays in hand
  if (G.isFirstTurn && ctx.player === G.bidder && ctx.handCard.rank === G.bidValue) {
    if (!ctx.remainder.some(c => c.rank === G.bidValue))
      return {valid:false,
        reason:`First turn: need a second ${rn(G.bidValue)} in hand to build with the bid card`};
  }

  // ── Contribute mode: house of this value already on floor ──
  // Any player can add to it — their cards get merged and it becomes shared between teams.
  const existingHouse = ctx.floor.find(it => it.type==='house' && it.value===hv);
  if (existingHouse) {
    if (existingHouse.shared)
      return {valid:false, reason:`House of ${rn(hv)} is already shared and locked`};
    return {valid:true,
      reason:`Contribute to house of ${rn(hv)} (will become shared)`, meta:{houseVal:hv}};
  }

  // ── New house: max 2 houses allowed on the floor at once ──
  const houseCount = ctx.floor.filter(it => it.type === 'house').length;
  if (houseCount >= 2)
    return {valid:false, reason:'Maximum of 2 houses are already on the floor'};

  // ── New house: need a key card ──
  if (!hasKey(ctx, hv))
    return {valid:false,
      reason: isOverlay
        ? `Need another ${rn(hv)} in hand, or a partner's house of ${rn(hv)}, to claim this`
        : `You need a key card (${rn(hv)}) in hand to pick up this house later`};
  return {valid:true, reason:`Build house of ${rn(hv)}`, meta:{houseVal:hv}};
}

// ── Rule: UPGRADE HOUSE (any undoubled house → new higher value) ──
// ANY player may add a card to an undoubled house to change its value,
// provided the new value ≤ 13 and the player holds the key card for it.
// Once a house is doubled, its value is locked; only cementing (ruleAddToHouse) applies.
// Doubling (same-value contribution) is restricted to the owning team via ruleAddToHouse.
function ruleBreakHouse(ctx) {
  if (ctx.selHouses.length !== 1)
    return {valid:false, reason:'Select exactly one house to upgrade'};
  const h = ctx.selHouses[0];
  if (h.shared)
    return {valid:false, reason:'Cannot upgrade a shared house — both teams have contributed'};
  if (h.pucca)
    return {valid:false, reason:'Cannot upgrade a Pucca (cemented) house'};
  if (isDoubled(h))
    return {valid:false, reason:'House is already doubled — value is locked; you can only cement it'};
  // The player who last built/modified this house cannot upgrade it again;
  // another player must modify it first.
  if (h.owner === ctx.player)
    return {valid:false, reason:'You built this house — another player must modify it before you can upgrade it'};
  const nv = h.value + ctx.handCard.rank + ctx.selLoose.reduce((s,c) => s + c.rank, 0);
  if (nv <= h.value)
    return {valid:false, reason:'New house value must be higher than current value'};
  if (nv > 13)
    return {valid:false, reason:`New value ${nv} exceeds King (13)`};
  if (!ctx.remainder.some(c => c.rank === nv))
    return {valid:false,
      reason:`Need key card (${rn(nv)}) in hand to claim the upgraded house`};
  return {valid:true, reason:`Upgrade house to ${rn(nv)}`, meta:{houseVal:nv}};
}

// ── Rule: ADD TO HOUSE (reinforce / contribute to a house) ──
// Any player may reinforce a house by contributing cards summing to house value.
// Key-card rule: you must keep ≥1 card of house value in hand if you are (or will
// become) the key holder for your team's side of this house.
//
// Key holders per house:
//   Team A side (builders): h.owner
//   Team B side (first opponent to contribute): h.sharedBy (set on first B add)
//
// If your partner is already your team's key holder, you can add all cards freely.
// Hand card + selected loose floor cards must sum to house value.
function ruleAddToHouse(ctx) {
  if (ctx.selHouses.length !== 1)
    return {valid:false, reason:'Select a house to reinforce'};
  const h = ctx.selHouses[0];

  const contrib = ctx.handCard.rank + ctx.selLoose.reduce((s,c) => s + c.rank, 0);
  if (contrib !== h.value)
    return {valid:false,
      reason:`Cards must total ${rn(h.value)} (${h.value}) to reinforce — yours total ${contrib}`};

  // Determine whether this player must keep a key card.
  // Key holder for same-team side = h.owner; for opponent side = h.sharedBy.
  const partner = (ctx.player + 2) % 4;
  let needsKey;
  if (ctx.team === h.team) {
    // Own team: h.owner is the key holder
    needsKey = (ctx.player === h.owner);   // partner of builder adds freely
  } else {
    // Opponent team
    if (h.sharedBy === undefined) {
      needsKey = true;                     // first from this team → becomes key holder
    } else if (ctx.player === h.sharedBy) {
      needsKey = true;                     // already the key holder
    } else {
      needsKey = false;                    // partner is the key holder → add freely
    }
  }

  // Only guard the key card when the hand card itself IS the key card (rank === house value).
  // Contributing other cards that happen to sum to house value doesn't consume a key card.
  if (needsKey && ctx.handCard.rank === h.value && !ctx.remainder.some(c => c.rank === h.value))
    return {valid:false,
      reason:`Must keep a ${rn(h.value)} in hand — you need it to capture this house`};

  const label = (!h.shared && h.team !== ctx.team)
    ? `Share house of ${rn(h.value)}`
    : `Reinforce house of ${rn(h.value)}`;
  return {valid:true, reason:label, meta:{houseVal:h.value}};
}

// ── Rule: THROW (only when no capture is possible) ──
// All floor items (houses by value, loose cards by rank) participate in the
// mandatory-capture check. If any item or combination sums to the hand card rank,
// the player must capture — throwing is not allowed.
function ruleThrow(ctx) {
  // First turn: bidder may only throw the bid card
  if (G.isFirstTurn && ctx.player === G.bidder && ctx.handCard.rank !== G.bidValue)
    return {valid:false, reason:`First turn: can only throw the bid card (${rn(G.bidValue)})`};
  const allVals = ctx.floor.map(fiv); // houses count as their declared value
  if (hasSubsetSum(allVals, ctx.handCard.rank))
    return {valid:false,
      reason:`${rn(ctx.handCard.rank)} can capture a floor item — must capture first`};
  return {valid:true, reason:'Throw card to floor', meta:{}};
}

// ── Chain Evaluator ──────────────────────────────────
function evaluateRules(ctx) {
  // Level 0: SEEP is forced if possible — blocks all other moves
  const seep = ruleSeep(ctx);
  if (seep.valid) {
    // NOTE: do NOT mutate G.selFloorIdxs here — that would hijack manual floor selection.
    // The floor auto-selection for seep happens only when the Seep button is clicked (doAction).
    return {
      seep,
      pick:  {valid:false, reason:'Seep is mandatory'},
      build: {valid:false, reason:'Seep is mandatory'},
      break: {valid:false, reason:'Seep is mandatory'},
      add:   {valid:false, reason:'Seep is mandatory'},
      throw: {valid:false, reason:'Seep is mandatory'},
    };
  }
  // Level 1: evaluate all capture/build/throw rules independently
  return {
    seep:  {valid:false},
    pick:  rulePick(ctx),
    build: ruleBuildHouse(ctx),
    break: ruleBreakHouse(ctx),
    add:   ruleAddToHouse(ctx),
    throw: ruleThrow(ctx),
  };
}

// ── Smart status / hint generator ────────────────────
function buildStatusMsg(rules, ctx) {
  if (rules.seep.valid) {
    const total = ctx.floor.length;
    return `⚡ Seep — sweep entire floor (${total} item${total!==1?'s':''})!`;
  }
  if (rules.pick.valid)  return `Pick: take ${ctx.selItems.length} floor item(s)`;
  if (rules.build.valid) {
    const hv = rules.build.meta.houseVal;
    if (rules.build.meta.merge) return `Merge selected house(s) into House of ${rn(hv)} (${hv})`;
    return `Build House of ${rn(hv)} (${hv})`;
  }
  if (rules.break.valid) return `Upgrade House → ${rn(rules.break.meta.houseVal)} (${rules.break.meta.houseVal})`;
  if (rules.add.valid)   return `Reinforce house of ${rn(rules.add.meta.houseVal)} → Pucca ★`;

  // No valid action yet — generate helpful hint
  const hc = ctx.handCard;
  const hints = [];

  // Hint A: single floor item matchable (pick)
  ctx.floor.forEach((it, i) => {
    if (fiv(it) === hc.rank && !G.selFloorIdxs.includes(i))
      hints.push(`Click ${rn(fiv(it))} on the floor to Pick it up`);
  });

  // Hint B: pair of floor items summing to hand rank (pick combo)
  if (!hints.length) {
    const loose = ctx.floor.map((it,i) => ({v:fiv(it),i})).filter(x => x.v < hc.rank);
    for (let a = 0; a < loose.length && !hints.length; a++)
      for (let b = a+1; b < loose.length; b++)
        if (loose[a].v + loose[b].v === hc.rank) {
          hints.push(`Select ${rn(loose[a].v)} + ${rn(loose[b].v)} on floor to Pick`);
          break;
        }
  }

  // Hint C: overlay build — floor cards summing to hand rank (need duplicate or team house)
  if (!hints.length) {
    // Find all loose floor cards and check if any subset sums to hc.rank
    const looseFloor = ctx.floor
      .map((it,i) => ({it, i}))
      .filter(x => x.it.type === 'card');
    // Simple 2-card combo check for the hint
    outer:
    for (let a = 0; a < looseFloor.length; a++) {
      for (let b = a+1; b < looseFloor.length; b++) {
        const s = looseFloor[a].it.card.rank + looseFloor[b].it.card.rank;
        if (s === hc.rank && hasKey(ctx, hc.rank)) {
          const ra = rn(looseFloor[a].it.card.rank), rb = rn(looseFloor[b].it.card.rank);
          hints.push(`Select floor ${ra}+${rb} + your ${rn(hc.rank)} → Overlay House of ${rn(hc.rank)}`);
          break outer;
        }
      }
      // Single floor card equal to hand rank (overlay with just one floor card)
      if (looseFloor[a].it.card.rank === hc.rank && hasKey(ctx, hc.rank)) {
        hints.push(`Select floor ${rn(hc.rank)} + your ${rn(hc.rank)} → Overlay House of ${rn(hc.rank)}`);
        break;
      }
    }
  }

  // Hint D: addition build — single floor card + hand card = valid house value
  if (!hints.length) {
    for (const {it} of ctx.floor.map((it,i)=>({it,i}))) {
      if (it.type !== 'card') continue;
      const hv = hc.rank + it.card.rank;
      if (hv <= 13 && hasKey(ctx, hv)) {
        hints.push(`Select floor ${rn(it.card.rank)} + your ${rn(hc.rank)} → Build House of ${rn(hv)}`);
        break;
      }
    }
  }

  if (!rules.throw.valid) {
    return hints.length
      ? hints[0]
      : `${rn(hc.rank)} must capture — select matching floor cards`;
  }
  return hints.length ? hints[0] : `Select floor cards to act, or Throw`;
}

// ── computeActions: thin wrapper used by updateActions & doAction ──
function computeActions() {
  const ctx = buildMoveCtx();
  if (!ctx) {
    return {pick:false, seep:false, build:false, buildVal:null, add:false, throw:false,
            msg:'Select a card from your hand.'};
  }
  const rules = evaluateRules(ctx);
  // Cache rules on G so doAction can decide build vs break without re-evaluating
  G._rules = rules;
  const buildActive = rules.build.valid || rules.break.valid;
  const buildMeta   = buildActive ? (rules.build.valid ? rules.build.meta : rules.break.meta) : null;
  const buildVal    = buildMeta ? buildMeta.houseVal : null;
  const buildMerge  = !!(buildMeta && buildMeta.merge);
  return {
    pick:      rules.pick.valid,
    seep:      rules.seep.valid,
    build:     buildActive,
    buildVal,
    buildMerge,
    add:       rules.add.valid,
    throw:     rules.throw.valid,
    msg:       buildStatusMsg(rules, ctx),
  };
}

function updateActions() {
  const a = computeActions();
  document.getElementById('btn-pick').disabled  = !a.pick;
  document.getElementById('btn-seep').disabled  = !a.seep;
  document.getElementById('btn-build').disabled = !a.build;
  document.getElementById('btn-add').disabled   = !a.add;
  document.getElementById('btn-throw').disabled = !a.throw;
  document.getElementById('btn-build').textContent = a.build
    ? (a.buildMerge ? `Merge → ${rn(a.buildVal)}` : `Build House (${rn(a.buildVal)})`)
    : 'Build House';
  document.getElementById('status-msg').textContent = a.msg;
  renderFloor(); // re-render so seep auto-selection is reflected
}

// ══════════════════════════════════════════════════════
//  ACTIONS
// ══════════════════════════════════════════════════════
function doAction(type) {
  if (localSeat !== null && localSeat !== G.currentPlayer) return;
  const a = computeActions();
  if (type==='pick'  && !a.pick)  return;
  if (type==='seep'  && !a.seep)  return;
  if (type==='build' && !a.build) return;
  if (type==='add'   && !a.add)   return;
  if (type==='throw' && !a.throw) return;

  switch(type) {
    case 'pick':   execPickup(false); break;
    case 'seep':
      // Auto-select ALL floor items (houses + loose cards) for the sweep
      G.selFloorIdxs = G.floor.map((_,i) => i);
      execPickup(true);
      break;
    case 'build':  execBuild(a.buildVal); break;  // execBuild handles both fresh house & break
    case 'add':    execAdd(); break;
    case 'throw':  execThrow(); break;
  }
}

// ── Pick / Seep ──
// isSeep=true  → explicit Seep action (loose cards swept; bonus always fires)
// isSeep=false → regular Pick (bonus fires only if floor becomes fully empty)
function execPickup(isSeep) {
  const cp   = G.currentPlayer;
  const team = cp%2;
  const hc   = G.hands[cp][G.selHandIdx];
  const captured = [...G.selFloorIdxs.map(i=>G.floor[i]).flatMap(itemCards), hc];

  G.hands[cp].splice(G.selHandIdx,1);
  [...G.selFloorIdxs].sort((a,b)=>b-a).forEach(i=>G.floor.splice(i,1));
  G.captured[team].push(...captured);
  G.lastCaptureTeam = team;

  const wasFirst = G.isFirstTurn;
  G.isFirstTurn  = false;
  clearSel();

  // Award seep bonus if: explicit seep action, OR floor completely cleared by a pick
  const seepBonus = isSeep || (G.floor.length === 0);
  if (seepBonus && !allHandsEmpty()) {
    const pts = wasFirst ? 25 : 50;
    G.seepBonus[team] += pts;
    showSeepOverlay(team, pts, advanceTurn);
    return;
  }
  advanceTurn();
}

// ── Build House / Break House ──
function execBuild(val) {
  const cp      = G.currentPlayer;
  const team    = cp%2;
  const hc      = G.hands[cp][G.selHandIdx];
  const selItems = G.selFloorIdxs.map(i=>G.floor[i]);
  const allCards = [...selItems.flatMap(itemCards), hc];

  G.hands[cp].splice(G.selHandIdx,1);
  [...G.selFloorIdxs].sort((a,b)=>b-a).forEach(i=>G.floor.splice(i,1));

  // Only ONE house per value is allowed on the floor at any time.
  // If one already exists, merge the player's cards into it (making it shared).
  const existing = G.floor.find(it => it.type==='house' && it.value===val);
  if (existing) {
    existing.cards.push(...allCards);
    if (existing.team !== team) {
      if (!existing.shared) { existing.shared = true; existing.sharedBy = cp; }
      existing.pucca  = true;
    }
    mergeLooseIntoHouse(existing);
  } else {
    const newHouse = {type:'house', cards:allCards, value:val, pucca:false, owner:cp, team, shared:false, sharedBy:undefined};
    G.floor.push(newHouse);
    mergeLooseIntoHouse(newHouse);
  }

  G.isFirstTurn = false;
  clearSel();
  advanceTurn();
}

// ── Add to House (reinforce — cement to Pucca) ──
function execAdd() {
  const cp   = G.currentPlayer;
  const hc   = G.hands[cp][G.selHandIdx];

  // Find the house among selected floor items
  const houseSelIdx = G.selFloorIdxs.find(i => G.floor[i].type === 'house');
  const house       = G.floor[houseSelIdx];
  // Loose floor cards also selected as part of the contribution
  const looseIdxs   = G.selFloorIdxs.filter(i => G.floor[i].type === 'card');

  // Move hand card + loose floor cards into the house
  house.cards.push(hc, ...looseIdxs.map(i => G.floor[i].card));
  const team = cp%2;
  if (house.team !== team) {
    if (!house.shared) { house.shared = true; house.sharedBy = cp; } // record first opponent contributor
  }
  house.pucca = true;
  G.hands[cp].splice(G.selHandIdx, 1);
  // Remove loose floor cards (descending so indices stay valid)
  looseIdxs.sort((a,b) => b-a).forEach(i => G.floor.splice(i, 1));
  // Auto-absorb any further loose floor cards summing to house value
  mergeLooseIntoHouse(house);
  G.isFirstTurn = false;
  clearSel();
  advanceTurn();
}

// ── Throw ──
function execThrow() {
  const cp = G.currentPlayer;
  const hc = G.hands[cp][G.selHandIdx];
  G.floor.push({type:'card', card:hc});
  G.hands[cp].splice(G.selHandIdx,1);
  G.isFirstTurn = false;
  clearSel();
  advanceTurn();
}

function clearSel() { G.selHandIdx=null; G.selFloorIdxs=[]; }

// ══════════════════════════════════════════════════════
//  TURN / ROUND MANAGEMENT
// ══════════════════════════════════════════════════════
function allHandsEmpty() { return G.hands.every(h=>h.length===0); }

function advanceTurn() {
  // Deal remaining cards after bidder's first move
  if (!G.handsDealt) dealRemainingCards();
  if (allHandsEmpty()) { endRound(); return; }
  G.currentPlayer = (G.currentPlayer+1)%4;
  let t=0;
  while(G.hands[G.currentPlayer].length===0 && t++<4)
    G.currentPlayer=(G.currentPlayer+1)%4;
  if (currentGameId) {
    pushGameState();  // broadcast to all clients; they each call renderGame() via listener
  } else {
    renderGame();
  }
}

function showSeepOverlay(team, pts, cb) {
  const ov = document.getElementById('seep-overlay');
  document.getElementById('seep-msg').textContent = `+${pts} points for Team ${team+1}!`;
  ov.classList.add('show');
  setTimeout(()=>{ ov.classList.remove('show'); cb(); }, 1800);
}

// ══════════════════════════════════════════════════════
//  ROUND END / SCORING
// ══════════════════════════════════════════════════════
function endRound() {
  // Remaining floor cards → last capture team
  if (G.floor.length>0 && G.lastCaptureTeam!==null) {
    G.captured[G.lastCaptureTeam].push(...G.floor.flatMap(itemCards));
    G.floor=[];
  }

  const s0 = G.captured[0].reduce((s,c)=>s+cardPts(c),0) + G.seepBonus[0];
  const s1 = G.captured[1].reduce((s,c)=>s+cardPts(c),0) + G.seepBonus[1];
  G.scores[0]+=s0; G.scores[1]+=s1;

  G.phase = (G.scores[0]>=WIN_SCORE||G.scores[1]>=WIN_SCORE) ? 'gameover' : 'roundend';
  G._roundS0 = s0; G._roundS1 = s1;

  if (currentGameId) {
    pushGameState();
  } else {
    showRoundEnd(s0, s1);
  }
}

function showRoundEnd(s0, s1) {
  showScreen('roundend-screen');
  document.getElementById('re-title').textContent = `Round ${G.roundNum} Complete`;

  const rows = [
    ['Spades (face value)',  ptsFilter(0,c=>c.suit==='S'), ptsFilter(1,c=>c.suit==='S')],
    ['10♦',                 ptsFilter(0,c=>c.suit==='D'&&c.rank===10), ptsFilter(1,c=>c.suit==='D'&&c.rank===10)],
    ['Other Aces',          ptsFilter(0,c=>c.rank===1&&c.suit!=='S'), ptsFilter(1,c=>c.rank===1&&c.suit!=='S')],
    ['Seep Bonus',          G.seepBonus[0], G.seepBonus[1]],
  ];
  const tbody = document.getElementById('re-body');
  tbody.innerHTML = '';
  rows.forEach(([lbl,v0,v1])=>{
    const tr=document.createElement('tr');
    tr.innerHTML=`<td>${lbl}</td><td>${v0}</td><td>${v1}</td>`;
    tbody.appendChild(tr);
  });
  const tot=document.createElement('tr'); tot.className='score-total';
  tot.innerHTML=`<td>Round Total</td><td>${s0}</td><td>${s1}</td>`;
  tbody.appendChild(tot);

  document.getElementById('cum0').textContent=G.scores[0];
  document.getElementById('cum1').textContent=G.scores[1];

  const btn=document.getElementById('re-btn');
  if (G.scores[0]>=WIN_SCORE||G.scores[1]>=WIN_SCORE) {
    btn.textContent='See Results'; btn.onclick=showGameOver;
  } else {
    btn.textContent='Next Round ▶'; btn.onclick=nextRound;
  }
}

function ptsFilter(team, pred) {
  return G.captured[team].filter(pred).reduce((s,c)=>s+cardPts(c),0);
}

function nextRound() {
  // In multiplayer only the current bidder (who just finished the round) drives next round
  if (currentGameId && localSeat !== G.bidder) return;
  G.roundNum++;
  G.deck       = shuffle(initDeck());
  G.hands      = [[],[],[],[]];
  G.floor      = [];
  G.captured   = [[],[]];
  G.seepBonus  = [0,0];
  G.bidder     = (G.bidder+1)%4;
  G.bidValue   = null;
  G.phase      = 'bid';
  G.isFirstTurn= true;
  G.handsDealt = false;
  G.lastCaptureTeam = null;
  G.selHandIdx = null; G.selFloorIdxs=[];
  G.hands[G.bidder] = G.deck.splice(0,4);
  sortHand(G.hands[G.bidder]);
  if (currentGameId) {
    pushGameState();
  } else {
    showBidScreen();
  }
}

function showGameOver() {
  showScreen('gameover-screen');
  const w = G.scores[0]>G.scores[1] ? 'Team 1 (P1 & P3)' : G.scores[1]>G.scores[0] ? 'Team 2 (P2 & P4)' : 'Both Teams (Tie!)';
  document.getElementById('go-title').textContent  = `🏆 ${w} Wins!`;
  document.getElementById('go-scores').textContent = `Team 1: ${G.scores[0]} pts  |  Team 2: ${G.scores[1]} pts`;
  // In multiplayer, "New Game" goes back to lobby
  const btn = document.querySelector('#gameover-screen .btn');
  if (currentGameId && btn) {
    btn.textContent = 'Back to Home';
    btn.onclick = () => {
      localStorage.removeItem('seep_gameId');
      localStorage.removeItem('seep_seat');
      currentGameId = null; localSeat = null;
      unsubscribeAll();
      showScreen('home-screen');
    };
  } else if (btn) {
    btn.textContent = 'New Game';
    btn.onclick = startGame;
  }
}

// ══════════════════════════════════════════════════════
//  HOME SCREEN
// ══════════════════════════════════════════════════════
let _joinExpanded = false;

function homeSetError(msg) {
  document.getElementById('home-error').textContent = msg;
}

function homeToggleJoin() {
  _joinExpanded = !_joinExpanded;
  document.getElementById('home-join-expand').style.display = _joinExpanded ? 'flex' : 'none';
  if (_joinExpanded) document.getElementById('home-code').focus();
}

// Called by both Start Game and Join Room buttons
async function _ensureSignedIn() {
  // Already signed in
  if (localUid) return true;
  const nameEl = document.getElementById('home-name');
  const name = nameEl.value.trim();
  if (!name) { nameEl.focus(); homeSetError('Please enter your name first.'); return false; }
  homeSetError('');
  try {
    const cred = await firebase.auth().signInAnonymously();
    localUid  = cred.user.uid;
    localName = name;
    localStorage.setItem('seep_name', name);
    return true;
  } catch(e) {
    homeSetError('Sign-in failed: ' + e.message);
    return false;
  }
}

async function homeStartGame() {
  if (!await _ensureSignedIn()) return;
  await startNewGame();
}

async function homeJoinSubmit() {
  if (!await _ensureSignedIn()) return;
  const code = document.getElementById('home-code').value.trim();
  if (code.length !== 6) { homeSetError('Enter a valid 6-digit room code.'); return; }
  homeSetError('');
  await joinGame(code);
}

// ══════════════════════════════════════════════════════
//  GLOBAL MENU
// ══════════════════════════════════════════════════════
function toggleMenu() {
  document.getElementById('global-menu-dropdown').classList.toggle('open');
}

function closeMenu() {
  document.getElementById('global-menu-dropdown').classList.remove('open');
}

function updateMenuInfo() {
  document.getElementById('menu-account-name').textContent = localName || '—';
  const SEAT_LABELS = ['Player 1 (T1)', 'Player 2 (T2)', 'Player 3 (T1)', 'Player 4 (T2)'];
  let detail = '';
  if (currentGameId) detail += `Room: ${currentGameId}`;
  if (localSeat !== null) detail += `  ·  ${SEAT_LABELS[localSeat]}`;
  document.getElementById('menu-account-detail').textContent = detail;
}

function menuSignOut() {
  closeMenu();
  if (currentGameId) {
    exitGame().then(() => doSignOut());
  } else {
    doSignOut();
  }
}

function doSignOut() {
  firebase.auth().signOut();
  localUid = null; localName = ''; currentGameId = null; localSeat = null;
  localStorage.removeItem('seep_gameId');
  localStorage.removeItem('seep_seat');
  localStorage.removeItem('seep_name');
  unsubscribeAll();
  // Reset home screen to name-input state
  document.getElementById('home-name').value = '';
  document.getElementById('home-welcome').style.display = 'none';
  document.getElementById('home-name').style.display = '';
  document.getElementById('home-join-expand').style.display = 'none';
  _joinExpanded = false;
  showScreen('home-screen');
}

async function exitGame() {
  if (!currentGameId) { showScreen('home-screen'); return; }
  if (localSeat !== null) {
    const seatRef = DB.ref(`games/${currentGameId}/seatMap/${localSeat}`);
    seatRef.onDisconnect().cancel();
    await seatRef.set(null);
  }
  unsubscribeAll();
  localStorage.removeItem('seep_gameId');
  localStorage.removeItem('seep_seat');
  currentGameId = null;
  localSeat = null;
  showScreen('home-screen');
}

// ══════════════════════════════════════════════════════
//  MULTIPLAYER – LOBBY
// ══════════════════════════════════════════════════════
async function startNewGame() {
  const id = Math.floor(100000 + Math.random() * 900000).toString();
  const seatMap = [null, null, null, null];
  seatMap[0] = localUid;  // host takes seat 0
  localSeat = 0;
  localStorage.setItem('seep_seat', '0');
  currentGameId = id;
  localStorage.setItem('seep_gameId', id);
  await DB.ref(`games/${id}`).set({
    status: 'lobby',
    hostUid: localUid,
    createdAt: Date.now(),
    seatMap,
    names: { [localUid]: localName },
    gameState: null,
  });
  subscribeRoom(id);
  showScreen('room-screen');
}

async function joinGame(code) {
  const snap = await DB.ref(`games/${code}`).once('value');
  if (!snap.exists()) { homeSetError('Room not found. Check the code and try again.'); return; }
  const d = snap.val();
  if (d.status !== 'lobby') { homeSetError('This game has already started.'); return; }
  // Check if already seated (reconnect)
  if (d.seatMap) {
    const entries = Object.values(d.seatMap);
    const existing = entries.indexOf(localUid);
    if (existing !== -1) { localSeat = existing; localStorage.setItem('seep_seat', String(existing)); }
  }
  currentGameId = code;
  localStorage.setItem('seep_gameId', code);
  await DB.ref(`games/${code}/names/${localUid}`).set(localName);
  subscribeRoom(code);
  showScreen('room-screen');
}

// ══════════════════════════════════════════════════════
//  MULTIPLAYER – ROOM
// ══════════════════════════════════════════════════════
function subscribeRoom(gameId) {
  unsubscribeAll();
  _roomRef = DB.ref(`games/${gameId}`);
  _roomRef.on('value', snap => {
    if (!snap.exists()) return;
    const d = snap.val();
    if (d.status === 'bid' || d.status === 'playing') {
      // Game started — subscribe to game state
      _roomRef.off('value');
      _roomRef = null;
      subscribeGameState(gameId);
      // Restore local seat in case of reconnect (d.seatMap is a Firebase object)
      if (localSeat === null && d.seatMap) {
        const entries = Object.values(d.seatMap);
        const idx = entries.indexOf(localUid);
        if (idx !== -1) { localSeat = idx; localStorage.setItem('seep_seat', String(idx)); }
      }
      return;
    }
    renderRoomScreen(d);
  });
}

function renderRoomScreen(d) {
  const seatMap  = d.seatMap  || [null,null,null,null];
  const names    = d.names    || {};
  const isHost   = d.hostUid === localUid;
  const allFull  = seatMap.every(s => s !== null);

  document.getElementById('room-code-display').textContent = currentGameId;

  // Seat grid: layout  [0,1] top row, [2,3] bottom row
  // Team 1 = col 0 (seats 0,2), Team 2 = col 1 (seats 1,3)
  const grid = document.getElementById('seat-grid');
  // Remove old seat slots (keep first 2 header divs)
  while (grid.children.length > 2) grid.removeChild(grid.lastChild);

  const SEAT_LABELS = ['Player 1 (T1)', 'Player 2 (T2)', 'Player 3 (T1)', 'Player 4 (T2)'];
  // Order in grid: seats 0,1 then seats 2,3 (col 0 = T1, col 1 = T2)
  [0,1,2,3].forEach(seat => {
    const uid  = seatMap[seat];
    const isMine = uid === localUid;
    const slot = document.createElement('div');
    slot.className = 'seat-slot' + (uid ? ' taken' : '') + (isMine ? ' mine' : '');
    if (uid) {
      slot.innerHTML = `<div class="seat-name">${names[uid] || 'Player'}</div><div class="seat-label">${SEAT_LABELS[seat]}</div>`;
    } else {
      const canTake = !seatMap.includes(localUid);  // haven't sat yet
      if (canTake) {
        const btn = document.createElement('button');
        btn.textContent = 'Take seat';
        btn.onclick = () => takeSeat(seat);
        slot.innerHTML = `<div class="seat-label">${SEAT_LABELS[seat]}</div>`;
        slot.appendChild(btn);
      } else {
        slot.innerHTML = `<div class="seat-label">${SEAT_LABELS[seat]}</div><div style="color:#555;font-size:.85rem">Empty</div>`;
      }
    }
    grid.appendChild(slot);
  });

  const status = document.getElementById('room-status');
  const startBtn = document.getElementById('room-start-btn');
  if (isHost) {
    status.textContent = allFull ? 'All seats filled! Start the game.' : `Waiting for players… (${seatMap.filter(Boolean).length}/4)`;
    startBtn.style.display = allFull ? 'inline-block' : 'none';
  } else {
    status.textContent = 'Waiting for host to start…';
    startBtn.style.display = 'none';
  }
}

async function takeSeat(seatIdx) {
  // Use a transaction to atomically claim the seat
  const ref = DB.ref(`games/${currentGameId}/seatMap/${seatIdx}`);
  const { committed } = await ref.transaction(current => {
    if (current !== null) return; // already taken — abort
    return localUid;
  });
  if (committed) {
    localSeat = seatIdx;
    localStorage.setItem('seep_seat', String(seatIdx));
    await DB.ref(`games/${currentGameId}/names/${localUid}`).set(localName);
    // Set up disconnect cleanup
    ref.onDisconnect().set(null);
  } else {
    alert('That seat was just taken. Please choose another.');
  }
}

async function hostStartGame() {
  const snap = await DB.ref(`games/${currentGameId}`).once('value');
  const d = snap.val();
  if (!d || d.seatMap.some(s => s === null)) { alert('All 4 seats must be filled'); return; }
  // Init game state
  G = freshState();
  G.hands[G.bidder] = G.deck.splice(0,4);
  sortHand(G.hands[G.bidder]);
  // Store names indexed by seat
  const seatArr = Object.values(d.seatMap);  // seatMap from Firebase may be object
  G.playerNames = seatArr.map(uid => (d.names && d.names[uid]) || 'Player');
  await DB.ref(`games/${currentGameId}`).update({
    status: 'bid',
    gameStateJson: JSON.stringify(G),
  });
  // All clients pick this up via subscribeGameState
}

function copyCode() {
  navigator.clipboard.writeText(currentGameId).then(() => {
    const el = document.getElementById('room-code-display');
    const orig = el.textContent;
    el.textContent = 'Copied!';
    setTimeout(() => { el.textContent = orig; }, 1200);
  });
}

// ══════════════════════════════════════════════════════
//  MULTIPLAYER – GAME STATE SYNC
// ══════════════════════════════════════════════════════
async function subscribeGameState(gameId) {
  // Recover localSeat if missing (reconnect or page refresh scenario)
  if (localSeat === null) {
    const saved = localStorage.getItem('seep_seat');
    if (saved !== null) {
      localSeat = parseInt(saved, 10);
    } else {
      // Ask Firebase directly
      const roomSnap = await DB.ref(`games/${gameId}/seatMap`).once('value');
      if (roomSnap.exists()) {
        const sm = roomSnap.val();
        const idx = Object.values(sm).indexOf(localUid);
        if (idx !== -1) { localSeat = idx; localStorage.setItem('seep_seat', String(idx)); }
      }
    }
  }

  _stateRef = DB.ref(`games/${gameId}/gameStateJson`);
  _stateRef.on('value', snap => {
    if (!snap.exists()) return;
    G = JSON.parse(snap.val());   // JSON.parse perfectly restores all arrays/types
    if (!Array.isArray(G.selFloorIdxs)) G.selFloorIdxs = [];
    if (G.selHandIdx === undefined)     G.selHandIdx   = null;
    if (G.phase === 'bid') {
      showScreen('bid-screen');
      renderBidScreen();
    } else if (G.phase === 'play') {
      showScreen('game-screen');
      renderGame();
    } else if (G.phase === 'roundend') {
      showRoundEnd(G._roundS0 || 0, G._roundS1 || 0);
    } else if (G.phase === 'gameover') {
      showGameOver();
    }
  });
}

// Recursively convert Firebase's numeric-keyed objects back to JS arrays.
// Firebase strips empty arrays and turns array indices into object keys.
// Card/house objects are safe because their keys are non-numeric strings.
function deepRestore(val) {
  if (val === null || val === undefined) return val;
  if (typeof val !== 'object' || Array.isArray(val)) {
    if (Array.isArray(val)) return val.map(deepRestore);
    return val;
  }
  const keys = Object.keys(val);
  const allNumeric = keys.length > 0 && keys.every(k => /^\d+$/.test(k));
  if (allNumeric) {
    const maxIdx = Math.max(...keys.map(Number));
    const arr = [];
    for (let i = 0; i <= maxIdx; i++) arr.push(deepRestore(val[i] !== undefined ? val[i] : null));
    return arr;
  }
  const out = {};
  for (const k of keys) out[k] = deepRestore(val[k]);
  return out;
}

async function pushGameState() {
  if (!currentGameId) return;
  const slim = Object.assign({}, G, { selHandIdx: null, selFloorIdxs: [] });
  await DB.ref(`games/${currentGameId}/gameStateJson`).set(JSON.stringify(slim));
}

function sanitise(obj) {
  if (obj === undefined) return null;
  if (obj === null || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(sanitise);
  const out = {};
  for (const k of Object.keys(obj)) out[k] = sanitise(obj[k]);
  return out;
}

function unsubscribeAll() {
  if (_roomRef)  { _roomRef.off();  _roomRef  = null; }
  if (_stateRef) { _stateRef.off(); _stateRef = null; }
}

// ══════════════════════════════════════════════════════
//  PAGE LOAD / RECONNECT
// ══════════════════════════════════════════════════════
// Close menu when clicking outside
document.addEventListener('click', e => {
  const btn = document.getElementById('global-menu-btn');
  const drop = document.getElementById('global-menu-dropdown');
  if (!btn.contains(e.target) && !drop.contains(e.target)) closeMenu();
});

// Enter key on home-code input submits join
document.getElementById('home-code').addEventListener('keydown', e => {
  if (e.key === 'Enter') homeJoinSubmit();
});
document.getElementById('home-name').addEventListener('keydown', e => {
  if (e.key === 'Enter') homeStartGame();
});

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    localUid  = user.uid;
    localName = localStorage.getItem('seep_name') || '';
    if (localName) {
      // Returning user: show welcome, hide name input
      document.getElementById('home-welcome').textContent = `Welcome back, ${localName}!`;
      document.getElementById('home-welcome').style.display = 'block';
      document.getElementById('home-name').style.display = 'none';
      const savedGame = localStorage.getItem('seep_gameId');
      if (savedGame) {
        currentGameId = savedGame;
        DB.ref(`games/${savedGame}`).once('value').then(snap => {
          if (!snap.exists()) { currentGameId = null; return; }
          const d = snap.val();
          if (d.seatMap) {
            const entries = Object.values(d.seatMap);
            const mySeat = entries.indexOf(localUid);
            if (mySeat !== -1) { localSeat = mySeat; localStorage.setItem('seep_seat', String(mySeat)); }
          }
          if (d.status === 'lobby') {
            subscribeRoom(savedGame);
            showScreen('room-screen');
          } else {
            subscribeGameState(savedGame);
          }
        });
      }
      // Stay on home-screen; returning user can pick Start/Join
    }
    // else: new user — home-screen stays, name input visible
  }
});
