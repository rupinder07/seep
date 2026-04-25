// ── Card constants & pure helper functions ──
// No imports. Safe to import from any other module.

export const SUITS     = ['S','H','D','C'];
export const SUIT_SYM  = { S:'♠', H:'♥', D:'♦', C:'♣' };
export const SUIT_ORD  = { S:0, H:1, D:2, C:3 };
export const RANK_NAME = { 1:'A', 11:'J', 12:'Q', 13:'K' };
export const WIN_SCORE = 100;

export const PLAYER_LABELS = [
  ['Player 1', 'T1', 't0'],
  ['Player 2', 'T2', 't1'],
  ['Player 3', 'T1', 't0'],
  ['Player 4', 'T2', 't1'],
];

export const rn  = r => RANK_NAME[r] || String(r);
export const sym = s => SUIT_SYM[s];
export const red = s => s === 'H' || s === 'D';

export function cardPts(c) {
  if (c.suit === 'S')                return c.rank;  // every spade = face value
  if (c.suit === 'D' && c.rank === 10) return 6;     // 10♦ = 6 pts
  if (c.rank === 1)                  return 1;        // non-spade aces
  return 0;
}

export function fiv(item) {
  return item.type === 'house' ? item.value : item.card.rank;
}

export function isDoubled(house) {
  return house.cards.reduce((s, c) => s + c.rank, 0) >= 2 * house.value;
}

export function itemCards(item) {
  return item.type === 'house' ? item.cards : [item.card];
}

// Subset-sum check — does any subset of `vals` sum to `target`?
export function hasSubsetSum(vals, target) {
  const dp = new Set([0]);
  for (const v of vals) {
    for (const s of [...dp]) dp.add(s + v);
    if (dp.has(target)) return true;
  }
  return dp.has(target);
}

// Returns indices of a subset of `vals` that sums to `target`, or null.
export function findSubsetIndices(vals, target) {
  function bt(i, rem, path) {
    if (rem === 0) return path;
    if (i >= vals.length || rem < 0) return null;
    return bt(i + 1, rem - vals[i], [...path, i]) ?? bt(i + 1, rem, path);
  }
  return bt(0, target, []);
}
