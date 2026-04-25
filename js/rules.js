// ── Rule engine: pure evaluation of move legality ──
// Each rule returns { valid, reason, meta? }.
// Imports: constants, state (read-only G access).

import { rn, fiv, hasSubsetSum, WIN_SCORE, isDoubled } from './constants.js';
import { G } from './state.js';

// ── Move context built once per user interaction ──
export function buildMoveCtx() {
  if (G.selHandIdx === null) return null;
  const cp   = G.currentPlayer;
  const hand = G.hands[cp];
  const hc   = hand[G.selHandIdx];
  const sel  = G.selFloorIdxs.map(i => G.floor[i]);
  return {
    floor:     G.floor,
    floorVals: G.floor.map(fiv),
    floorSum:  G.floor.reduce((s, it) => s + fiv(it), 0),
    hand,
    handCard:  hc,
    handIdx:   G.selHandIdx,
    selItems:  sel,
    selSum:    sel.reduce((s, it) => s + fiv(it), 0),
    selLoose:  sel.filter(it => it.type === 'card').map(it => it.card),
    selHouses: sel.filter(it => it.type === 'house'),
    remainder: hand.filter((_, i) => i !== G.selHandIdx),
    team:      cp % 2,
    player:    cp,
  };
}

// ── SEEP: sweep the entire floor with one card ──
export function ruleSeep(ctx) {
  if (ctx.floor.length === 0) return { valid: false, reason: 'Floor is empty' };
  const r      = ctx.handCard.rank;
  const houses = ctx.floor.filter(it => it.type === 'house');
  const loose  = ctx.floor.filter(it => it.type === 'card');
  for (const h of houses) {
    if (h.value !== r)
      return { valid: false, reason: `House of ${rn(h.value)} cannot be swept by ${rn(r)}` };
  }
  if (loose.length > 0) {
    const looseSum = loose.reduce((s, it) => s + it.card.rank, 0);
    if (looseSum !== r)
      return { valid: false, reason: `Loose cards sum to ${looseSum}, not ${r} — cannot seep` };
  }
  return { valid: true, reason: 'Seep! Sweep the entire floor', meta: {} };
}

// ── PICK ──
export function rulePick(ctx) {
  if (ctx.selItems.length === 0)
    return { valid: false, reason: 'No floor items selected' };
  if (G.isFirstTurn && ctx.player === G.bidder && ctx.handCard.rank !== G.bidValue)
    return { valid: false, reason: `First turn: can only pick with the bid card (${rn(G.bidValue)})` };
  if (ctx.handCard.rank !== ctx.selSum)
    return { valid: false, reason: `Selected sum ${ctx.selSum} ≠ ${rn(ctx.handCard.rank)}` };
  return { valid: true, reason: `Pick ${ctx.selItems.length} floor item(s)`, meta: {} };
}

// ── Key-card check ──
export function hasKey(ctx, hv) {
  return ctx.remainder.some(c => c.rank === hv)
    || ctx.floor.some(it => it.type === 'house' && it.team === ctx.team && it.value === hv);
}

// ── BUILD HOUSE ──
export function ruleBuildHouse(ctx) {
  const looseSum = ctx.selLoose.reduce((s, c) => s + c.rank, 0);
  const houseSum = ctx.selHouses.reduce((s, h) => s + h.value, 0);

  // Merge mode: floor houses included in selection
  if (ctx.selHouses.length > 0) {
    const hv = ctx.handCard.rank + looseSum + houseSum;
    if (hv > 13) return { valid: false, reason: `Sum ${hv} exceeds King (13)` };
    const target = ctx.floor.find(it =>
      it.type === 'house' && it.value === hv && !ctx.selHouses.includes(it));
    if (!target) return { valid: false, reason: `No house of ${rn(hv)} on the floor to merge into` };
    const needsKey = ctx.team === target.team
      ? ctx.player === target.owner
      : target.sharedBy === undefined || ctx.player === target.sharedBy;
    if (needsKey && ctx.handCard.rank === target.value && !ctx.remainder.some(c => c.rank === target.value))
      return { valid: false, reason: `Must keep a ${rn(target.value)} in hand to capture this house` };
    return { valid: true, reason: `Merge into house of ${rn(hv)}`, meta: { houseVal: hv, merge: true } };
  }

  // Normal mode
  if (ctx.selLoose.length === 0)
    return { valid: false, reason: 'Select floor card(s) to combine with your hand card' };
  const isOverlay = ctx.handCard.rank === looseSum;
  const hv = isOverlay ? ctx.handCard.rank : ctx.handCard.rank + looseSum;
  if (hv < 9) return { valid: false, reason: `House value ${hv} is below 9` };
  if (!isOverlay && hv > 13) return { valid: false, reason: `Sum ${hv} exceeds King (13)` };
  if (G.isFirstTurn && ctx.player === G.bidder && ctx.handCard.rank === G.bidValue) {
    if (!ctx.remainder.some(c => c.rank === G.bidValue))
      return { valid: false, reason: `First turn: need a second ${rn(G.bidValue)} to build with it` };
  }

  const existing = ctx.floor.find(it => it.type === 'house' && it.value === hv);
  if (existing) {
    if (existing.shared)
      return { valid: false, reason: `House of ${rn(hv)} is already shared and locked` };
    return { valid: true, reason: `Contribute to house of ${rn(hv)} (will become shared)`, meta: { houseVal: hv } };
  }

  if (ctx.floor.filter(it => it.type === 'house').length >= 2)
    return { valid: false, reason: 'Maximum of 2 houses are already on the floor' };
  if (!hasKey(ctx, hv))
    return { valid: false, reason: `You need a key card (${rn(hv)}) in hand to pick up this house later` };
  return { valid: true, reason: `Build house of ${rn(hv)}`, meta: { houseVal: hv } };
}

// ── UPGRADE HOUSE ──
export function ruleBreakHouse(ctx) {
  if (ctx.selHouses.length !== 1) return { valid: false, reason: 'Select exactly one house to upgrade' };
  const h = ctx.selHouses[0];
  if (h.shared)  return { valid: false, reason: 'Cannot upgrade a shared house' };
  if (h.pucca)   return { valid: false, reason: 'Cannot upgrade a Pucca house' };
  if (isDoubled(h))
    return { valid: false, reason: 'House is already doubled — only cementing applies' };
  if (h.owner === ctx.player)
    return { valid: false, reason: 'You built this house — another player must modify it first' };
  const nv = h.value + ctx.handCard.rank + ctx.selLoose.reduce((s, c) => s + c.rank, 0);
  if (nv <= h.value) return { valid: false, reason: 'New value must exceed current' };
  if (nv > 13)       return { valid: false, reason: `New value ${nv} exceeds King (13)` };
  if (!ctx.remainder.some(c => c.rank === nv))
    return { valid: false, reason: `Need key card (${rn(nv)}) to claim the upgraded house` };
  return { valid: true, reason: `Upgrade house to ${rn(nv)}`, meta: { houseVal: nv } };
}

// ── ADD TO HOUSE (reinforce / cement) ──
export function ruleAddToHouse(ctx) {
  if (ctx.selHouses.length !== 1) return { valid: false, reason: 'Select a house to reinforce' };
  const h = ctx.selHouses[0];
  const contrib = ctx.handCard.rank + ctx.selLoose.reduce((s, c) => s + c.rank, 0);
  if (contrib !== h.value)
    return { valid: false, reason: `Cards must total ${rn(h.value)} to reinforce — yours total ${contrib}` };
  let needsKey;
  if (ctx.team === h.team) {
    needsKey = ctx.player === h.owner;
  } else {
    needsKey = h.sharedBy === undefined || ctx.player === h.sharedBy;
  }
  if (needsKey && ctx.handCard.rank === h.value && !ctx.remainder.some(c => c.rank === h.value))
    return { valid: false, reason: `Must keep a ${rn(h.value)} in hand to capture this house` };
  const label = (!h.shared && h.team !== ctx.team)
    ? `Share house of ${rn(h.value)}`
    : `Reinforce house of ${rn(h.value)}`;
  return { valid: true, reason: label, meta: { houseVal: h.value } };
}

// ── THROW ──
export function ruleThrow(ctx) {
  if (G.isFirstTurn && ctx.player === G.bidder && ctx.handCard.rank !== G.bidValue)
    return { valid: false, reason: `First turn: can only throw the bid card (${rn(G.bidValue)})` };
  if (hasSubsetSum(ctx.floor.map(fiv), ctx.handCard.rank))
    return { valid: false, reason: `${rn(ctx.handCard.rank)} can capture a floor item — must capture first` };
  return { valid: true, reason: 'Throw card to floor', meta: {} };
}

// ── Chain evaluator ──
export function evaluateRules(ctx) {
  const seep = ruleSeep(ctx);
  if (seep.valid) {
    const blocked = { valid: false, reason: 'Seep is mandatory' };
    return { seep, pick: blocked, build: blocked, break: blocked, add: blocked, throw: blocked };
  }
  return {
    seep:  { valid: false },
    pick:  rulePick(ctx),
    build: ruleBuildHouse(ctx),
    break: ruleBreakHouse(ctx),
    add:   ruleAddToHouse(ctx),
    throw: ruleThrow(ctx),
  };
}

// ── computeActions: thin wrapper used by render + doAction ──
export function computeActions() {
  const ctx = buildMoveCtx();
  if (!ctx) {
    return { pick: false, seep: false, build: false, buildVal: null, add: false, throw: false,
             msg: 'Select a card from your hand.' };
  }
  const rules    = evaluateRules(ctx);
  G._rules       = rules;
  const buildActive = rules.build.valid || rules.break.valid;
  const buildMeta   = buildActive ? (rules.build.valid ? rules.build.meta : rules.break.meta) : null;
  return {
    pick:       rules.pick.valid,
    seep:       rules.seep.valid,
    build:      buildActive,
    buildVal:   buildMeta ? buildMeta.houseVal : null,
    buildMerge: !!(buildMeta && buildMeta.merge),
    add:        rules.add.valid,
    throw:      rules.throw.valid,
    msg:        buildStatusMsg(rules, ctx),
  };
}

// ── Human-readable hint/status message ──
function buildStatusMsg(rules, ctx) {
  if (rules.seep.valid) return `⚡ Seep — sweep entire floor (${ctx.floor.length} items)!`;
  if (rules.pick.valid)  return `Pick: take ${ctx.selItems.length} floor item(s)`;
  if (rules.build.valid) {
    const hv = rules.build.meta.houseVal;
    return rules.build.meta.merge
      ? `Merge selected house(s) into House of ${rn(hv)} (${hv})`
      : `Build House of ${rn(hv)} (${hv})`;
  }
  if (rules.break.valid) return `Upgrade House → ${rn(rules.break.meta.houseVal)}`;
  if (rules.add.valid)   return `Reinforce house of ${rn(rules.add.meta.houseVal)} → Pucca ★`;

  const hc = ctx.handCard;
  const hints = [];

  ctx.floor.forEach((it, i) => {
    if (fiv(it) === hc.rank && !G.selFloorIdxs.includes(i))
      hints.push(`Click ${rn(fiv(it))} on the floor to Pick it up`);
  });

  if (!hints.length) {
    const loose = ctx.floor.map((it, i) => ({ v: fiv(it), i })).filter(x => x.v < hc.rank);
    for (let a = 0; a < loose.length && !hints.length; a++)
      for (let b = a + 1; b < loose.length; b++)
        if (loose[a].v + loose[b].v === hc.rank) {
          hints.push(`Select ${rn(loose[a].v)} + ${rn(loose[b].v)} on floor to Pick`);
          break;
        }
  }

  if (!rules.throw.valid)
    return hints.length ? hints[0] : `${rn(hc.rank)} must capture — select matching floor cards`;
  return hints.length ? hints[0] : 'Select floor cards to act, or Throw';
}
