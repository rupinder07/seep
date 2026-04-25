// ── App entry point: screen loading, auth, home screen, menu, event wiring ──
// Imports all modules; fetches screen HTML partials; sets up callbacks.

import { session } from './session.js';
import { DB, startNewGame, joinGame, subscribeRoom, subscribeGameState,
         unsubscribeAll, setCallbacks, copyCode, hostStartGame } from './sync.js';
import { renderGame, closePeek } from './render.js';
import { doAction, initGame, renderBidScreen,
         showRoundEnd, showGameOver, nextRound, startGame } from './game.js';

// ══════════════════════════════════════
//  SCREEN PARTIALS LOADER
// ══════════════════════════════════════
const SCREENS = ['home', 'room', 'bid', 'game', 'roundend', 'gameover'];

async function loadScreens() {
  const htmls = await Promise.all(
    SCREENS.map(name =>
      fetch(`screens/${name}.html`).then(r => {
        if (!r.ok) throw new Error(`Failed to load screens/${name}.html`);
        return r.text();
      })
    )
  );
  document.getElementById('app').innerHTML = htmls.join('\n');
}

// ══════════════════════════════════════
//  SCREEN MANAGEMENT
// ══════════════════════════════════════
export function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  const menuBtn = document.getElementById('global-menu-btn');
  if (id === 'home-screen') {
    menuBtn.classList.remove('visible');
    closeMenu();
  } else {
    menuBtn.classList.add('visible');
    updateMenuInfo();
  }
}

// ══════════════════════════════════════
//  MENU
// ══════════════════════════════════════
export function toggleMenu() {
  document.getElementById('global-menu-dropdown').classList.toggle('open');
}

export function closeMenu() {
  document.getElementById('global-menu-dropdown').classList.remove('open');
}

export function updateMenuInfo() {
  document.getElementById('menu-account-name').textContent = session.localName || '—';
  const SEAT_LABELS = ['Player 1 (T1)', 'Player 2 (T2)', 'Player 3 (T1)', 'Player 4 (T2)'];
  let detail = '';
  if (session.currentGameId) detail += `Room: ${session.currentGameId}`;
  if (session.localSeat !== null) detail += `  ·  ${SEAT_LABELS[session.localSeat]}`;
  document.getElementById('menu-account-detail').textContent = detail;
}

export function menuSignOut() {
  closeMenu();
  if (session.currentGameId) {
    exitGame().then(() => doSignOut());
  } else {
    doSignOut();
  }
}

export function doSignOut() {
  firebase.auth().signOut();
  session.localUid      = null;
  session.localName     = '';
  session.currentGameId = null;
  session.localSeat     = null;
  localStorage.removeItem('seep_gameId');
  localStorage.removeItem('seep_seat');
  localStorage.removeItem('seep_name');
  unsubscribeAll();
  document.getElementById('home-name').value = '';
  document.getElementById('home-welcome').style.display = 'none';
  document.getElementById('home-name').style.display    = '';
  document.getElementById('home-join-expand').style.display = 'none';
  _joinExpanded = false;
  showScreen('home-screen');
}

export async function exitGame() {
  if (!session.currentGameId) { showScreen('home-screen'); return; }
  if (session.localSeat !== null) {
    const seatRef = DB.ref(`games/${session.currentGameId}/seatMap/${session.localSeat}`);
    seatRef.onDisconnect().cancel();
    await seatRef.set(null);
  }
  unsubscribeAll();
  localStorage.removeItem('seep_gameId');
  localStorage.removeItem('seep_seat');
  session.currentGameId = null;
  session.localSeat     = null;
  showScreen('home-screen');
}

// ══════════════════════════════════════
//  HOME SCREEN
// ══════════════════════════════════════
let _joinExpanded = false;

export function homeSetError(msg) {
  document.getElementById('home-error').textContent = msg;
}

export function homeToggleJoin() {
  _joinExpanded = !_joinExpanded;
  document.getElementById('home-join-expand').style.display = _joinExpanded ? 'flex' : 'none';
  if (_joinExpanded) document.getElementById('home-code').focus();
}

async function _ensureSignedIn() {
  if (session.localUid) return true;
  const nameEl = document.getElementById('home-name');
  const name   = nameEl.value.trim();
  if (!name) { nameEl.focus(); homeSetError('Please enter your name first.'); return false; }
  homeSetError('');
  try {
    const cred        = await firebase.auth().signInAnonymously();
    session.localUid  = cred.user.uid;
    session.localName = name;
    localStorage.setItem('seep_name', name);
    return true;
  } catch (e) {
    homeSetError('Sign-in failed: ' + e.message);
    return false;
  }
}

export async function homeStartGame() {
  if (!await _ensureSignedIn()) return;
  await startNewGame();
}

export async function homeJoinSubmit() {
  if (!await _ensureSignedIn()) return;
  const code = document.getElementById('home-code').value.trim();
  if (code.length !== 6) { homeSetError('Enter a valid 6-digit room code.'); return; }
  homeSetError('');
  await joinGame(code);
}

// ══════════════════════════════════════
//  EXPOSE TO HTML onclick ATTRIBUTES
//  (assigned before init so inline handlers work during load)
// ══════════════════════════════════════
window.toggleMenu     = toggleMenu;
window.menuSignOut    = menuSignOut;
window.homeStartGame  = homeStartGame;
window.homeToggleJoin = homeToggleJoin;
window.homeJoinSubmit = homeJoinSubmit;
window.hostStartGame  = hostStartGame;
window.copyCode       = copyCode;
window.exitGame       = exitGame;
window.doAction       = doAction;
window.closePeek      = closePeek;
window.nextRound      = nextRound;

// ══════════════════════════════════════
//  BOOT: load screens then wire everything up
// ══════════════════════════════════════
async function init() {
  await loadScreens();

  // Wire inter-module callbacks (needs game + render functions to be defined)
  initGame({ showScreen, updateMenuInfo });
  setCallbacks({
    showScreen,
    renderGame,
    renderBidScreen,
    showRoundEnd,
    showGameOver,
    homeSetError,
  });

  // DOM event listeners (need screen elements to exist in the DOM)
  document.addEventListener('click', e => {
    const btn  = document.getElementById('global-menu-btn');
    const drop = document.getElementById('global-menu-dropdown');
    if (!btn.contains(e.target) && !drop.contains(e.target)) closeMenu();
  });

  document.getElementById('home-code').addEventListener('keydown', e => {
    if (e.key === 'Enter') homeJoinSubmit();
  });

  document.getElementById('home-name').addEventListener('keydown', e => {
    if (e.key === 'Enter') homeStartGame();
  });

  // Firebase auth (must come after screens so returning-user DOM updates work)
  firebase.auth().onAuthStateChanged(user => {
    if (!user) return;
    session.localUid  = user.uid;
    session.localName = localStorage.getItem('seep_name') || '';
    if (!session.localName) return;

    document.getElementById('home-welcome').textContent   = `Welcome back, ${session.localName}!`;
    document.getElementById('home-welcome').style.display = 'block';
    document.getElementById('home-name').style.display    = 'none';

    const savedGame = localStorage.getItem('seep_gameId');
    if (!savedGame) return;

    session.currentGameId = savedGame;
    DB.ref(`games/${savedGame}`).once('value').then(snap => {
      if (!snap.exists()) { session.currentGameId = null; return; }
      const d = snap.val();
      if (d.seatMap) {
        const mySeat = Object.values(d.seatMap).indexOf(session.localUid);
        if (mySeat !== -1) {
          session.localSeat = mySeat;
          localStorage.setItem('seep_seat', String(mySeat));
        }
      }
      if (d.status === 'lobby') {
        subscribeRoom(savedGame);
        showScreen('room-screen');
      } else {
        subscribeGameState(savedGame);
      }
    });
  });
}

init().catch(err => {
  document.getElementById('app').innerHTML =
    `<div style="color:#f66;padding:2rem;text-align:center">
       Failed to load game screens.<br><small>${err.message}</small>
     </div>`;
});
