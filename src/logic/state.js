// ── Pure game-state utilities ──
// No Vue imports. G is managed by useGameState composable.

import { SUITS, SUIT_ORD } from './constants.js'
import { findSubsetIndices } from './constants.js'

export function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function initDeck() {
  const d = [];
  for (const s of SUITS) for (let r = 1; r <= 13; r++) d.push({ suit: s, rank: r });
  return d;
}

export function sortHand(hand) {
  hand.sort((a, b) => a.rank - b.rank || SUIT_ORD[a.suit] - SUIT_ORD[b.suit]);
}

export function freshState() {
  return {
    deck:             shuffle(initDeck()),
    hands:            [[], [], [], []],
    floor:            [],
    captured:         [[], []],
    scores:           [0, 0],
    seepBonus:        [0, 0],
    currentPlayer:    0,
    bidder:           0,
    bidValue:         null,
    phase:            'bid',
    roundNum:         1,
    isFirstTurn:      true,
    handsDealt:       false,
    lastCaptureTeam:  null,
    playerNames:      null,
    finalEligible:    null,   // seat index of player who may declare Final, or null
    finalHouseVal:    null,   // house value they built/contributed to
    finalAnnouncement: null,  // { seat, houseVal } broadcast to all players, cleared on next turn
  };
}

// Absorb loose floor cards summing to house.value into the house.
// Mutates floor (passed by reference from the reactive gameState).
export function mergeLooseIntoHouse(floor, house) {
  let merged = true;
  while (merged) {
    merged = false;
    const loose = floor.map((it, i) => ({ it, i })).filter(x => x.it.type === 'card');
    if (!loose.length) break;
    const sub = findSubsetIndices(loose.map(x => x.it.card.rank), house.value);
    if (sub !== null) {
      const floorIdxs = sub.map(si => loose[si].i);
      house.cards.push(...floorIdxs.map(i => floor[i].card));
      floorIdxs.sort((a, b) => b - a).forEach(i => floor.splice(i, 1));
      merged = true;
    }
  }
}
