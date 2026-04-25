// ── Game logic: bid phase, actions, turn/round management, scoring ──
// Imports: constants, state, rules, render, session, sync.

import { rn, fiv, cardPts, WIN_SCORE, itemCards } from './constants.js';
import { G, setG, freshState, playerName, shuffle, initDeck, sortHand, mergeLooseIntoHouse } from './state.js';
import { computeActions } from './rules.js';
import { makeCard, renderGame, renderFloor, renderActiveHand, renderAllHands,
         updateActions, showSeepOverlay, calcCapPts } from './render.js';
import { session } from './session.js';
import { pushGameState, unsubscribeAll } from './sync.js';

// Callbacks wired up by app.js to avoid circular imports
let _showScreen    = () => {};
let _updateMenuInfo = () => {};

export function initGame({ showScreen, updateMenuInfo }) {
  _showScreen     = showScreen;
  _updateMenuInfo = updateMenuInfo;
}

// ══════════════════════════════════════
//  BID PHASE
// ══════════════════════════════════════
export function startGame() {
  setG(freshState());
  G.hands[G.bidder] = G.deck.splice(0, 4);
  sortHand(G.hands[G.bidder]);
  showBidScreen();
}

export function showBidScreen() {
  _showScreen('bid-screen');
  renderBidScreen();
}

export function renderBidScreen() {
  const isBidder = (session.localSeat === null || session.localSeat === G.bidder);
  const hand     = G.hands[G.bidder];
  const maxRnk   = Math.max(...hand.map(c => c.rank));
  const canBid   = maxRnk >= 9;

  if (!isBidder) {
    document.getElementById('bid-instr').textContent = `Waiting for ${playerName(G.bidder)} to bid…`;
    document.getElementById('bid-hand-area').innerHTML = '';
    document.getElementById('bid-btn-area').innerHTML = '';
    document.getElementById('bid-hint').textContent = '';
    return;
  }

  const has9Spade = hand.some(c => c.rank === 9 && c.suit === 'S');
  const canPass   = !canBid || (maxRnk === 9 && !has9Spade);

  document.getElementById('bid-instr').textContent = canBid
    ? `${playerName(G.bidder)} – choose your bid (≥ 9). You need a matching key card in your hand.`
    : 'No card ≥ 9 — redealing…';

  const ha = document.getElementById('bid-hand-area');
  ha.innerHTML = '';
  hand.forEach(c => ha.appendChild(makeCard(c, false, false)));

  const ba = document.getElementById('bid-btn-area');
  ba.innerHTML = '';

  if (canBid) {
    const validBids = [...new Set(hand.filter(c => c.rank >= 9).map(c => c.rank))].sort((a, b) => a - b);
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
  } else {
    hint.textContent = '';
  }

  if (!canBid) setTimeout(reDealBid, 1200);
}

export function reDealBid() {
  G.deck = shuffle(initDeck());
  G.hands[G.bidder] = G.deck.splice(0, 4);
  sortHand(G.hands[G.bidder]);
  if (session.currentGameId) {
    pushGameState();
  } else {
    renderBidScreen();
  }
}

export function dealRemainingCards() {
  G.hands[G.bidder].push(...G.deck.splice(0, 8));
  sortHand(G.hands[G.bidder]);
  for (let p = 0; p < 4; p++) {
    if (p === G.bidder) continue;
    G.hands[p] = G.deck.splice(0, 12);
    sortHand(G.hands[p]);
  }
  G.handsDealt = true;
}

export function confirmBid(value) {
  G.bidValue = value;
  G.floor    = G.deck.splice(0, 4).map(c => ({ type: 'card', card: c }));
  G.phase    = 'play';
  if (session.currentGameId) {
    pushGameState();
  } else {
    _showScreen('game-screen');
    renderGame();
  }
}

// ══════════════════════════════════════
//  ACTIONS
// ══════════════════════════════════════
export function doAction(type) {
  if (session.localSeat !== null && session.localSeat !== G.currentPlayer) return;
  const a = computeActions();
  if (type === 'pick'  && !a.pick)  return;
  if (type === 'seep'  && !a.seep)  return;
  if (type === 'build' && !a.build) return;
  if (type === 'add'   && !a.add)   return;
  if (type === 'throw' && !a.throw) return;

  switch (type) {
    case 'pick':  execPickup(false); break;
    case 'seep':
      G.selFloorIdxs = G.floor.map((_, i) => i);
      execPickup(true);
      break;
    case 'build': execBuild(a.buildVal); break;
    case 'add':   execAdd();   break;
    case 'throw': execThrow(); break;
  }
}

// ── Pick / Seep ──
export function execPickup(isSeep) {
  const cp   = G.currentPlayer;
  const team = cp % 2;
  const hc   = G.hands[cp][G.selHandIdx];
  const captured = [...G.selFloorIdxs.map(i => G.floor[i]).flatMap(itemCards), hc];

  G.hands[cp].splice(G.selHandIdx, 1);
  [...G.selFloorIdxs].sort((a, b) => b - a).forEach(i => G.floor.splice(i, 1));
  G.captured[team].push(...captured);
  G.lastCaptureTeam = team;

  const wasFirst = G.isFirstTurn;
  G.isFirstTurn  = false;
  clearSel();

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
export function execBuild(val) {
  const cp       = G.currentPlayer;
  const team     = cp % 2;
  const hc       = G.hands[cp][G.selHandIdx];
  const selItems = G.selFloorIdxs.map(i => G.floor[i]);
  const allCards = [...selItems.flatMap(itemCards), hc];

  G.hands[cp].splice(G.selHandIdx, 1);
  [...G.selFloorIdxs].sort((a, b) => b - a).forEach(i => G.floor.splice(i, 1));

  const existing = G.floor.find(it => it.type === 'house' && it.value === val);
  if (existing) {
    existing.cards.push(...allCards);
    if (existing.team !== team) {
      if (!existing.shared) { existing.shared = true; existing.sharedBy = cp; }
      existing.pucca = true;
    }
    mergeLooseIntoHouse(existing);
  } else {
    const newHouse = {
      type: 'house', cards: allCards, value: val,
      pucca: false, owner: cp, team, shared: false, sharedBy: undefined,
    };
    G.floor.push(newHouse);
    mergeLooseIntoHouse(newHouse);
  }

  G.isFirstTurn = false;
  clearSel();
  advanceTurn();
}

// ── Add to House (reinforce → cement to Pucca) ──
export function execAdd() {
  const cp          = G.currentPlayer;
  const hc          = G.hands[cp][G.selHandIdx];
  const houseSelIdx = G.selFloorIdxs.find(i => G.floor[i].type === 'house');
  const house       = G.floor[houseSelIdx];
  const looseIdxs   = G.selFloorIdxs.filter(i => G.floor[i].type === 'card');

  house.cards.push(hc, ...looseIdxs.map(i => G.floor[i].card));
  const team = cp % 2;
  if (house.team !== team) {
    if (!house.shared) { house.shared = true; house.sharedBy = cp; }
  }
  house.pucca = true;
  G.hands[cp].splice(G.selHandIdx, 1);
  looseIdxs.sort((a, b) => b - a).forEach(i => G.floor.splice(i, 1));
  mergeLooseIntoHouse(house);
  G.isFirstTurn = false;
  clearSel();
  advanceTurn();
}

// ── Throw ──
export function execThrow() {
  const cp = G.currentPlayer;
  const hc = G.hands[cp][G.selHandIdx];
  G.floor.push({ type: 'card', card: hc });
  G.hands[cp].splice(G.selHandIdx, 1);
  G.isFirstTurn = false;
  clearSel();
  advanceTurn();
}

export function clearSel() {
  G.selHandIdx   = null;
  G.selFloorIdxs = [];
}

// ══════════════════════════════════════
//  TURN / ROUND MANAGEMENT
// ══════════════════════════════════════
export function allHandsEmpty() {
  return G.hands.every(h => h.length === 0);
}

export function advanceTurn() {
  if (!G.handsDealt) dealRemainingCards();
  if (allHandsEmpty()) { endRound(); return; }
  G.currentPlayer = (G.currentPlayer + 1) % 4;
  let t = 0;
  while (G.hands[G.currentPlayer].length === 0 && t++ < 4)
    G.currentPlayer = (G.currentPlayer + 1) % 4;
  if (session.currentGameId) {
    pushGameState();
  } else {
    renderGame();
  }
}

// ══════════════════════════════════════
//  ROUND END / SCORING
// ══════════════════════════════════════
export function endRound() {
  if (G.floor.length > 0 && G.lastCaptureTeam !== null) {
    G.captured[G.lastCaptureTeam].push(...G.floor.flatMap(itemCards));
    G.floor = [];
  }
  const s0 = G.captured[0].reduce((s, c) => s + cardPts(c), 0) + G.seepBonus[0];
  const s1 = G.captured[1].reduce((s, c) => s + cardPts(c), 0) + G.seepBonus[1];
  G.scores[0] += s0;
  G.scores[1] += s1;
  G.phase    = (G.scores[0] >= WIN_SCORE || G.scores[1] >= WIN_SCORE) ? 'gameover' : 'roundend';
  G._roundS0 = s0;
  G._roundS1 = s1;
  if (session.currentGameId) {
    pushGameState();
  } else {
    showRoundEnd(s0, s1);
  }
}

export function showRoundEnd(s0, s1) {
  _showScreen('roundend-screen');
  document.getElementById('re-title').textContent = `Round ${G.roundNum} Complete`;

  const rows = [
    ['Spades (face value)', ptsFilter(0, c => c.suit === 'S'),             ptsFilter(1, c => c.suit === 'S')],
    ['10♦',                 ptsFilter(0, c => c.suit === 'D' && c.rank === 10), ptsFilter(1, c => c.suit === 'D' && c.rank === 10)],
    ['Other Aces',          ptsFilter(0, c => c.rank === 1 && c.suit !== 'S'), ptsFilter(1, c => c.rank === 1 && c.suit !== 'S')],
    ['Seep Bonus',          G.seepBonus[0], G.seepBonus[1]],
  ];
  const tbody = document.getElementById('re-body');
  tbody.innerHTML = '';
  rows.forEach(([lbl, v0, v1]) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${lbl}</td><td>${v0}</td><td>${v1}</td>`;
    tbody.appendChild(tr);
  });
  const tot = document.createElement('tr');
  tot.className = 'score-total';
  tot.innerHTML = `<td>Round Total</td><td>${s0}</td><td>${s1}</td>`;
  tbody.appendChild(tot);

  document.getElementById('cum0').textContent = G.scores[0];
  document.getElementById('cum1').textContent = G.scores[1];

  const btn = document.getElementById('re-btn');
  if (G.scores[0] >= WIN_SCORE || G.scores[1] >= WIN_SCORE) {
    btn.textContent = 'See Results';
    btn.onclick = showGameOver;
  } else {
    btn.textContent = 'Next Round ▶';
    btn.onclick = nextRound;
  }
}

export function ptsFilter(team, pred) {
  return G.captured[team].filter(pred).reduce((s, c) => s + cardPts(c), 0);
}

export function nextRound() {
  if (session.currentGameId && session.localSeat !== G.bidder) return;
  G.roundNum++;
  G.deck            = shuffle(initDeck());
  G.hands           = [[], [], [], []];
  G.floor           = [];
  G.captured        = [[], []];
  G.seepBonus       = [0, 0];
  G.bidder          = (G.bidder + 1) % 4;
  G.bidValue        = null;
  G.phase           = 'bid';
  G.isFirstTurn     = true;
  G.handsDealt      = false;
  G.lastCaptureTeam = null;
  G.selHandIdx      = null;
  G.selFloorIdxs    = [];
  G.hands[G.bidder] = G.deck.splice(0, 4);
  sortHand(G.hands[G.bidder]);
  if (session.currentGameId) {
    pushGameState();
  } else {
    showBidScreen();
  }
}

export function showGameOver() {
  _showScreen('gameover-screen');
  const w = G.scores[0] > G.scores[1]
    ? 'Team 1 (P1 & P3)'
    : G.scores[1] > G.scores[0]
    ? 'Team 2 (P2 & P4)'
    : 'Both Teams (Tie!)';
  document.getElementById('go-title').textContent  = `🏆 ${w} Wins!`;
  document.getElementById('go-scores').textContent = `Team 1: ${G.scores[0]} pts  |  Team 2: ${G.scores[1]} pts`;
  const btn = document.querySelector('#gameover-screen .btn');
  if (session.currentGameId && btn) {
    btn.textContent = 'Back to Home';
    btn.onclick = () => {
      localStorage.removeItem('seep_gameId');
      localStorage.removeItem('seep_seat');
      session.currentGameId = null;
      session.localSeat     = null;
      unsubscribeAll();
      _showScreen('home-screen');
    };
  } else if (btn) {
    btn.textContent = 'New Game';
    btn.onclick = startGame;
  }
}
