// ── Firebase sync: multiplayer room & game state ──
// Imports: state, session. Uses callbacks (set by app.js) for UI transitions.

import { G, setG, freshState, sortHand, shuffle, initDeck } from './state.js';
import { session } from './session.js';

// ── Firebase config ──
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
export const DB = firebase.database();

// ── Callbacks set by app.js to avoid circular imports ──
// (sync.js needs to call showScreen / renderGame / etc. without importing game.js/app.js)
const _cb = {};
export function setCallbacks(cbs) { Object.assign(_cb, cbs); }

// ── Firebase listener refs for cleanup ──
let _roomRef  = null;
let _stateRef = null;

// ══════════════════════════════════════
//  LOBBY
// ══════════════════════════════════════
export async function startNewGame() {
  const id = Math.floor(100000 + Math.random() * 900000).toString();
  session.localSeat     = 0;
  session.currentGameId = id;
  localStorage.setItem('seep_seat', '0');
  localStorage.setItem('seep_gameId', id);
  const seatMap = { 0: session.localUid, 1: null, 2: null, 3: null };
  await DB.ref(`games/${id}`).set({
    status:   'lobby',
    hostUid:  session.localUid,
    createdAt: Date.now(),
    seatMap,
    names: { [session.localUid]: session.localName },
    gameState: null,
  });
  subscribeRoom(id);
  _cb.showScreen('room-screen');
}

export async function joinGame(code) {
  const snap = await DB.ref(`games/${code}`).once('value');
  if (!snap.exists()) { _cb.homeSetError('Room not found. Check the code and try again.'); return; }
  const d = snap.val();
  if (d.status !== 'lobby') { _cb.homeSetError('This game has already started.'); return; }
  if (d.seatMap) {
    const existing = Object.values(d.seatMap).indexOf(session.localUid);
    if (existing !== -1) {
      session.localSeat = existing;
      localStorage.setItem('seep_seat', String(existing));
    }
  }
  session.currentGameId = code;
  localStorage.setItem('seep_gameId', code);
  await DB.ref(`games/${code}/names/${session.localUid}`).set(session.localName);
  subscribeRoom(code);
  _cb.showScreen('room-screen');
}

// ══════════════════════════════════════
//  ROOM
// ══════════════════════════════════════
export function subscribeRoom(gameId) {
  unsubscribeAll();
  _roomRef = DB.ref(`games/${gameId}`);
  _roomRef.on('value', snap => {
    if (!snap.exists()) return;
    const d = snap.val();
    if (d.status === 'bid' || d.status === 'playing') {
      _roomRef.off('value');
      _roomRef = null;
      // Restore seat from seatMap if we lost it
      if (session.localSeat === null && d.seatMap) {
        const idx = Object.values(d.seatMap).indexOf(session.localUid);
        if (idx !== -1) { session.localSeat = idx; localStorage.setItem('seep_seat', String(idx)); }
      }
      subscribeGameState(gameId);
      return;
    }
    _renderRoomScreen(d);
  });
}

function _renderRoomScreen(d) {
  const seatMap = d.seatMap || {};
  const names   = d.names   || {};
  const isHost  = d.hostUid === session.localUid;
  // Count filled seats (Firebase may omit null entries)
  const filledCount = Object.values(seatMap).filter(v => v !== null).length;
  const allFull     = filledCount === 4;

  document.getElementById('room-code-display').textContent = session.currentGameId;

  const grid = document.getElementById('seat-grid');
  while (grid.children.length > 2) grid.removeChild(grid.lastChild);

  const SEAT_LABELS = ['Player 1 (T1)', 'Player 2 (T2)', 'Player 3 (T1)', 'Player 4 (T2)'];
  const myUidInMap  = Object.values(seatMap).includes(session.localUid);

  [0,1,2,3].forEach(seat => {
    const uid    = seatMap[seat] || null;
    const isMine = uid === session.localUid;
    const slot   = document.createElement('div');
    slot.className = 'seat-slot' + (uid ? ' taken' : '') + (isMine ? ' mine' : '');
    if (uid) {
      slot.innerHTML = `<div class="seat-name">${names[uid] || 'Player'}</div><div class="seat-label">${SEAT_LABELS[seat]}</div>`;
    } else if (!myUidInMap) {
      const btn = document.createElement('button');
      btn.textContent = 'Take seat';
      btn.onclick = () => takeSeat(seat);
      slot.innerHTML = `<div class="seat-label">${SEAT_LABELS[seat]}</div>`;
      slot.appendChild(btn);
    } else {
      slot.innerHTML = `<div class="seat-label">${SEAT_LABELS[seat]}</div><div style="color:#555;font-size:.85rem">Empty</div>`;
    }
    grid.appendChild(slot);
  });

  const status   = document.getElementById('room-status');
  const startBtn = document.getElementById('room-start-btn');
  if (isHost) {
    status.textContent = allFull
      ? 'All seats filled! Start the game.'
      : `Waiting for players… (${filledCount}/4)`;
    startBtn.style.display = allFull ? 'inline-block' : 'none';
  } else {
    status.textContent = 'Waiting for host to start…';
    startBtn.style.display = 'none';
  }
}

export async function takeSeat(seatIdx) {
  const ref = DB.ref(`games/${session.currentGameId}/seatMap/${seatIdx}`);
  const { committed } = await ref.transaction(current => {
    if (current !== null) return; // already taken — abort
    return session.localUid;
  });
  if (committed) {
    session.localSeat = seatIdx;
    localStorage.setItem('seep_seat', String(seatIdx));
    await DB.ref(`games/${session.currentGameId}/names/${session.localUid}`).set(session.localName);
    ref.onDisconnect().set(null);
  } else {
    alert('That seat was just taken. Please choose another.');
  }
}

export async function hostStartGame() {
  const snap = await DB.ref(`games/${session.currentGameId}`).once('value');
  const d = snap.val();
  const filledCount = Object.values(d.seatMap || {}).filter(Boolean).length;
  if (!d || filledCount < 4) { alert('All 4 seats must be filled'); return; }

  setG(freshState());
  G.hands[G.bidder] = G.deck.splice(0, 4);
  sortHand(G.hands[G.bidder]);
  // Build playerNames indexed by seat (Firebase may omit null entries so use explicit index)
  G.playerNames = [0,1,2,3].map(i => {
    const uid = d.seatMap[i];
    return (uid && d.names && d.names[uid]) || `Player ${i+1}`;
  });
  await DB.ref(`games/${session.currentGameId}`).update({
    status:       'bid',
    gameStateJson: JSON.stringify(G),
  });
  // All clients pick this up via subscribeGameState listener
}

export function copyCode() {
  navigator.clipboard.writeText(session.currentGameId).then(() => {
    const el   = document.getElementById('room-code-display');
    const orig = el.textContent;
    el.textContent = 'Copied!';
    setTimeout(() => { el.textContent = orig; }, 1200);
  });
}

// ══════════════════════════════════════
//  GAME STATE SYNC
// ══════════════════════════════════════
export async function subscribeGameState(gameId) {
  // Recover localSeat if missing (page refresh / reconnect)
  if (session.localSeat === null) {
    const saved = localStorage.getItem('seep_seat');
    if (saved !== null) {
      session.localSeat = parseInt(saved, 10);
    } else {
      const roomSnap = await DB.ref(`games/${gameId}/seatMap`).once('value');
      if (roomSnap.exists()) {
        const sm  = roomSnap.val();
        const idx = Object.values(sm).indexOf(session.localUid);
        if (idx !== -1) { session.localSeat = idx; localStorage.setItem('seep_seat', String(idx)); }
      }
    }
  }

  _stateRef = DB.ref(`games/${gameId}/gameStateJson`);
  _stateRef.on('value', snap => {
    if (!snap.exists()) return;
    setG(JSON.parse(snap.val()));   // JSON round-trip preserves all arrays/types
    if (!Array.isArray(G.selFloorIdxs)) G.selFloorIdxs = [];
    if (G.selHandIdx === undefined)      G.selHandIdx   = null;
    if (G.phase === 'bid') {
      _cb.showScreen('bid-screen');
      _cb.renderBidScreen();
    } else if (G.phase === 'play') {
      _cb.showScreen('game-screen');
      _cb.renderGame();
    } else if (G.phase === 'roundend') {
      _cb.showRoundEnd(G._roundS0 || 0, G._roundS1 || 0);
    } else if (G.phase === 'gameover') {
      _cb.showGameOver();
    }
  });
}

export async function pushGameState() {
  if (!session.currentGameId) return;
  // Clear UI-only selection state before broadcasting
  const slim = Object.assign({}, G, { selHandIdx: null, selFloorIdxs: [] });
  await DB.ref(`games/${session.currentGameId}/gameStateJson`).set(JSON.stringify(slim));
}

export function unsubscribeAll() {
  if (_roomRef)  { _roomRef.off();  _roomRef  = null; }
  if (_stateRef) { _stateRef.off(); _stateRef = null; }
}
