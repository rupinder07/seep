// ── Session state: shared mutable object for multiplayer session ──
// No imports. Mutated in place by sync.js, app.js, and game.js.

export const session = {
  localUid:      null,   // this browser's anonymous Firebase UID
  localName:     '',     // display name chosen at login
  currentGameId: null,   // 6-digit game-room string
  localSeat:     null,   // 0-3 assigned seat index
};
