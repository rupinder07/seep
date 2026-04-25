// ── Game state: G object, freshState, deck utilities, playerName ──
// Imports: constants only. Everything else imports from here.

import { SUITS, SUIT_ORD } from './constants.js';
import { findSubsetIndices } from './constants.js';

// Re-export shuffle so callers don't need to know it lives in constants
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

// The single mutable game-state object. Mutated in place by game logic.
export let G = {};

export function freshState() {
  return {
    deck: shuffle(initDeck()),
    hands: [[], [], [], []],
    floor: [],
    captured: [[], []],
    scores: [0, 0],
    seepBonus: [0, 0],
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

// Replace the entire G reference (used when receiving state from Firebase).
export function setG(newG) {
  G = newG;
}

// Returns the display name for a seat (falls back to "Player N" for offline play).
export function playerName(seat) {
  return (G.playerNames && G.playerNames[seat]) || `Player ${seat + 1}`;
}

// After building/cementing a house, absorb any loose floor cards summing to house.value.
export function mergeLooseIntoHouse(house) {
  let merged = true;
  while (merged) {
    merged = false;
    const loose = G.floor.map((it, i) => ({ it, i })).filter(x => x.it.type === 'card');
    if (!loose.length) break;
    const sub = findSubsetIndices(loose.map(x => x.it.card.rank), house.value);
    if (sub !== null) {
      const floorIdxs = sub.map(si => loose[si].i);
      house.cards.push(...floorIdxs.map(i => G.floor[i].card));
      floorIdxs.sort((a, b) => b - a).forEach(i => G.floor.splice(i, 1));
      merged = true;
    }
  }
}
