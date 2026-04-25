// ── Rendering: DOM mutations for the game screen ──
// Imports: constants, state, rules, session.

import { rn, sym, red, fiv, isDoubled, cardPts, PLAYER_LABELS } from './constants.js';
import { G, playerName } from './state.js';
import { computeActions } from './rules.js';
import { session } from './session.js';

// ── Card element ──
export function makeCard(card, clickable, selected) {
  const el = document.createElement('div');
  el.className = 'card' + (red(card.suit) ? ' red' : '') + (selected ? ' selected' : '');
  if (!clickable) el.style.cursor = 'default';
  const s = sym(card.suit), r = rn(card.rank);
  el.innerHTML = `<div class="c-tl">${r}<br>${s}</div><div class="rank">${r}</div><div class="suit">${s}</div><div class="c-br">${r}<br>${s}</div>`;
  return el;
}

// ── Hidden pile (face-down stack badge for opponent hands) ──
export function makeHiddenPile(count) {
  const wrapper = document.createElement('div');
  wrapper.className = 'hidden-pile';
  const stack = document.createElement('div');
  stack.className = 'pile-stack';
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
  const houseState = house.shared ? ' shared' : house.pucca ? ' pucca' : ' doubled';
  const el = document.createElement('div');
  el.className = 'house' + houseState + (sel ? ' selected' : '');
  const badgeCls = house.shared ? 'shared' : `t${house.team}`;
  const badgeTxt = house.shared ? 'T1+T2' : `T${house.team+1} P${house.owner+1}`;
  el.innerHTML = `
    <div class="h-val">${rn(house.value)}</div>
    <div class="h-badge ${badgeCls}">${badgeTxt}</div>
    <div class="h-count">${house.cards.length}c</div>
    <button class="house-peek-btn" title="Peek cards">👁</button>`;
  el.querySelector('.house-peek-btn').onclick = e => { e.stopPropagation(); showHousePeek(house); };
  el.onclick = () => toggleFloor(idx);
  return el;
}

// ── Undoubled house: fanned mini-card pile ──
function makeUndoubledHouseEl(house, idx) {
  const sel = G.selFloorIdxs.includes(idx);
  const el  = document.createElement('div');
  el.className = 'house-pile' + (sel ? ' selected' : '');
  el.title = `Building house of ${rn(house.value)} — not yet doubled`;
  const display = house.cards.slice(-3).reverse();
  display.forEach((c, i) => {
    const mc = document.createElement('div');
    mc.className = 'pile-mini-card' + (red(c.suit) ? ' red' : '');
    mc.style.cssText = `top:${i*18}px; left:${i*4}px; z-index:${10-i};`;
    mc.innerHTML = `<span class="pmc-rank">${rn(c.rank)}</span><span class="pmc-suit">${sym(c.suit)}</span>`;
    el.appendChild(mc);
  });
  const badge = document.createElement('div');
  badge.className = `h-pile-badge t${house.team}`;
  badge.textContent = `${rn(house.value)} ▸ T${house.team+1}`;
  el.appendChild(badge);
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
export function showHousePeek(house) {
  const houseState = house.shared ? ' ⚑ Shared' : house.pucca ? ' ★ Pucca' : isDoubled(house) ? ' ◆ Doubled' : ' (building)';
  document.getElementById('peek-title').textContent =
    `House of ${rn(house.value)}${houseState} — ${house.cards.length} cards`;

  // Owner info
  const ownersEl = document.getElementById('peek-owners');
  ownersEl.innerHTML = '';
  const builderName = playerName(house.owner);
  const builderTeam = house.team + 1;
  if (house.shared && house.sharedBy !== undefined) {
    const sharedName = playerName(house.sharedBy);
    const sharedTeam = (house.team === 0 ? 1 : 0) + 1;
    ownersEl.innerHTML =
      `<span class="peek-owner t${house.team}">Built by ${builderName} (Team ${builderTeam})</span>` +
      `<span class="peek-owner-sep"> · </span>` +
      `<span class="peek-owner t${house.team === 0 ? 1 : 0}">Shared by ${sharedName} (Team ${sharedTeam})</span>`;
  } else {
    ownersEl.innerHTML =
      `<span class="peek-owner t${house.team}">Built by ${builderName} (Team ${builderTeam})</span>`;
  }

  const area = document.getElementById('peek-cards');
  area.innerHTML = '';
  house.cards.forEach(c => area.appendChild(makeCard(c, false, false)));
  document.getElementById('house-peek').classList.add('show');
}

export function closePeek() {
  document.getElementById('house-peek').classList.remove('show');
}

// ── Game screen ──
export function renderGame() {
  const cp = G.currentPlayer;
  document.getElementById('sv0').textContent = G.scores[0];
  document.getElementById('sv1').textContent = G.scores[1];
  document.getElementById('g-sc0').className = 'g-score' + (G.scores[0] > G.scores[1] ? ' winning' : '');
  document.getElementById('g-sc1').className = 'g-score' + (G.scores[1] > G.scores[0] ? ' winning' : '');
  document.getElementById('g-round').textContent = `Round ${G.roundNum}`;
  [0,1,2,3].forEach(p => {
    const [,,cls] = PLAYER_LABELS[p];
    const pName = playerName(p);
    const lbl = document.getElementById(`lbl-${p}`);
    lbl.textContent = (p === 0 || p === 2)
      ? `${pName} · Team ${p%2===0 ? 1 : 2}`
      : `${pName}·T${p%2===0 ? 1 : 2}`;
    lbl.className = `p-label ${cls}${p === cp ? ' active-lbl' : ''}`;
    document.getElementById(`zone-${p}`).classList.toggle('active', p === cp);
  });
  document.getElementById('turn-lbl').textContent = `${playerName(cp)}'s Turn (Team ${cp%2+1})`;
  document.getElementById('bid-disp').textContent = G.bidValue ? `Bid: ${rn(G.bidValue)} (${G.bidValue})` : '';
  document.getElementById('cap0').textContent = calcCapPts(0);
  document.getElementById('cap1').textContent = calcCapPts(1);
  renderFloor();
  renderAllHands();
  updateActions();
}

export function calcCapPts(team) {
  return G.captured[team].reduce((s, c) => s + cardPts(c), 0) + G.seepBonus[team];
}

// ── Floor ──
export function renderFloor() {
  const area = document.getElementById('floor-area');
  area.innerHTML = '';
  if (!G.floor.length) {
    area.innerHTML = '<span class="floor-empty">Empty floor</span>';
    return;
  }
  G.floor.forEach((item, idx) => {
    const el = item.type === 'house' ? makeHouseEl(item, idx) : makeFloorCardEl(item.card, idx);
    area.appendChild(el);
  });
}

// ── Hands ──
export function renderAllHands() {
  [0,1,2,3].forEach(p => renderPlayerHand(p));
  renderActiveHand();
}

export function renderPlayerHand(p) {
  const container = document.getElementById(`hand-${p}`);
  container.innerHTML = '';
  const count = G.hands[p].length;
  if (count > 0) container.appendChild(makeHiddenPile(count));
}

// Full-width row below the table: shows the local player's cards face-up.
export function renderActiveHand() {
  const viewSeat = (session.localSeat !== null) ? session.localSeat : G.currentPlayer;
  const isMyTurn = (session.localSeat === null) || (session.localSeat === G.currentPlayer);
  const zone = document.getElementById('active-hand-zone');
  zone.innerHTML = '';
  G.hands[viewSeat].forEach((card, idx) => {
    const sel = G.selHandIdx === idx;
    const el  = makeCard(card, isMyTurn, sel);
    if (isMyTurn) el.onclick = () => selectHandCard(idx);
    else          el.style.cursor = 'default';
    zone.appendChild(el);
  });
}

// ── Actions panel ──
export function updateActions() {
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
  renderFloor();
}

// ── Seep overlay ──
export function showSeepOverlay(team, pts, cb) {
  const ov = document.getElementById('seep-overlay');
  document.getElementById('seep-msg').textContent = `+${pts} points for Team ${team+1}!`;
  ov.classList.add('show');
  setTimeout(() => { ov.classList.remove('show'); cb(); }, 1800);
}

// ── Selection handlers (live here since they only call render functions) ──
export function selectHandCard(idx) {
  if (session.localSeat !== null && session.localSeat !== G.currentPlayer) return;
  G.selHandIdx = (G.selHandIdx === idx) ? null : idx;
  G.selFloorIdxs = [];
  renderActiveHand();
  renderFloor();
  updateActions();
}

export function toggleFloor(idx) {
  if (session.localSeat !== null && session.localSeat !== G.currentPlayer) return;
  const i = G.selFloorIdxs.indexOf(idx);
  if (i === -1) G.selFloorIdxs.push(idx);
  else          G.selFloorIdxs.splice(i, 1);
  renderFloor();
  updateActions();
}
