import { ref } from 'vue'
import {
  ref as dbRef, set, update, onValue, off, onDisconnect,
  runTransaction, get,
} from 'firebase/database'
import {
  signInAnonymously, onAuthStateChanged, signOut,
} from 'firebase/auth'
import { DB, auth } from '../firebase.js'
import { freshState, sortHand } from '../logic/state.js'
import { useSession } from './useSession.js'
import { useGameState } from './useGameState.js'
import { setGameSyncPush } from './useGameActions.js'
import { subscribeChat, unsubscribeChat } from './useChat.js'

const { session } = useSession()
const { gameState, ui } = useGameState()

let _roomRef  = null
let _stateRef = null

// ── Reactive room data (read by RoomScreen) ──
export const _latestRoomData = ref(null)

// ── Live seatMap + hostUid (updated throughout the game) ──
export const _liveSeatMap = ref({})
let _seatMapRef = null

function watchSeatMap(gameId) {
  if (_seatMapRef) { off(_seatMapRef); _seatMapRef = null }
  _seatMapRef = dbRef(DB, `games/${gameId}/seatMap`)
  onValue(_seatMapRef, snap => { _liveSeatMap.value = snap.val() || {} })
}

// ── Firebase listener refs ──
export function unsubscribeAll() {
  if (_roomRef)    { off(_roomRef);    _roomRef    = null }
  if (_stateRef)   { off(_stateRef);   _stateRef   = null }
  if (_seatMapRef) { off(_seatMapRef); _seatMapRef = null }
}

// ── Push current game state to Firebase (stripped of UI-only fields) ──
export async function pushGameState() {
  if (!session.currentGameId) return
  const slim = JSON.parse(JSON.stringify(gameState))
  slim.selHandIdx   = null
  slim.selFloorIdxs = []
  await set(dbRef(DB, `games/${session.currentGameId}/gameStateJson`), JSON.stringify(slim))
}

// Register push function so useGameActions can call it
setGameSyncPush(pushGameState)

// ══════════════════════════════════════
//  LOBBY
// ══════════════════════════════════════

export async function startNewGame() {
  const id = Math.floor(100000 + Math.random() * 900000).toString()
  session.localSeat     = 0
  session.currentGameId = id
  sessionStorage.setItem('seep_seat', '0')
  sessionStorage.setItem('seep_gameId', id)

  const seatMap = { 0: session.localUid, 1: null, 2: null, 3: null }
  await set(dbRef(DB, `games/${id}`), {
    status:        'lobby',
    hostUid:       session.localUid,
    createdAt:     Date.now(),
    seatMap,
    names:         { [session.localUid]: session.localName },
    gameStateJson: null,
  })
  subscribeRoom(id)
  session.screen = 'room'
}

export async function kickPlayer(seatIdx) {
  if (!session.currentGameId) return
  if (session.localUid !== session.hostUid) return
  await set(dbRef(DB, `games/${session.currentGameId}/seatMap/${seatIdx}`), null)
}

export async function joinGame(code) {
  const snap = await get(dbRef(DB, `games/${code}`))
  if (!snap.exists()) { return { error: 'Room not found. Check the code and try again.' } }
  const d = snap.val()
  if (d.status === 'gameover') { return { error: 'This game has already ended.' } }
  if (d.seatMap) {
    const existing = Object.values(d.seatMap).indexOf(session.localUid)
    if (existing !== -1) {
      session.localSeat = existing
      sessionStorage.setItem('seep_seat', String(existing))
    }
  }
  session.currentGameId = code
  sessionStorage.setItem('seep_gameId', code)
  await set(dbRef(DB, `games/${code}/names/${session.localUid}`), session.localName)
  subscribeRoom(code)
  session.screen = 'room'
  return {}
}

// ══════════════════════════════════════
//  ROOM
// ══════════════════════════════════════

export function subscribeRoom(gameId) {
  unsubscribeAll()
  subscribeChat(gameId)
  watchSeatMap(gameId)
  _roomRef = dbRef(DB, `games/${gameId}`)
  onValue(_roomRef, snap => {
    if (!snap.exists()) return
    const d = snap.val()
    session.hostUid = d.hostUid || null
    if (d.status === 'bid' || d.status === 'playing') {
      off(_roomRef)
      _roomRef = null
      if (session.localSeat === null && d.seatMap) {
        const idx = Object.values(d.seatMap).indexOf(session.localUid)
        if (idx !== -1) {
          session.localSeat = idx
          sessionStorage.setItem('seep_seat', String(idx))
        }
      }
      subscribeGameState(gameId)
      return
    }
    _latestRoomData.value = d
  })
}

export async function takeSeat(seatIdx) {
  const seatDbRef = dbRef(DB, `games/${session.currentGameId}/seatMap/${seatIdx}`)
  const { committed } = await runTransaction(seatDbRef, current => {
    if (current !== null) return  // abort — already taken
    return session.localUid
  })
  if (committed) {
    session.localSeat = seatIdx
    sessionStorage.setItem('seep_seat', String(seatIdx))
    await set(dbRef(DB, `games/${session.currentGameId}/names/${session.localUid}`), session.localName)
    onDisconnect(seatDbRef).set(null)
  } else {
    alert('That seat was just taken. Please choose another.')
  }
}

export async function hostStartGame() {
  const snap = await get(dbRef(DB, `games/${session.currentGameId}`))
  const d = snap.val()
  const filledCount = Object.values(d.seatMap || {}).filter(Boolean).length
  if (!d || filledCount < 4) { alert('All 4 seats must be filled'); return }

  const G = freshState()
  G.hands[G.bidder] = G.deck.splice(0, 4)
  sortHand(G.hands[G.bidder])
  G.playerNames = [0, 1, 2, 3].map(i => {
    const uid = d.seatMap[i]
    return (uid && d.names && d.names[uid]) || `Player ${i + 1}`
  })

  Object.assign(gameState, G)

  await update(dbRef(DB, `games/${session.currentGameId}`), {
    status:        'bid',
    gameStateJson: JSON.stringify(G),
  })
}

export async function copyCode() {
  await navigator.clipboard.writeText(session.currentGameId)
}

// ══════════════════════════════════════
//  GAME STATE SYNC
// ══════════════════════════════════════

export async function subscribeGameState(gameId) {
  subscribeChat(gameId)
  watchSeatMap(gameId)
  if (session.localSeat === null) {
    const saved = sessionStorage.getItem('seep_seat')
    if (saved !== null) {
      session.localSeat = parseInt(saved, 10)
    } else {
      const roomSnap = await get(dbRef(DB, `games/${gameId}`))
      if (roomSnap.exists()) {
        const d   = roomSnap.val()
        session.hostUid = d.hostUid || null
        const sm  = d.seatMap || {}
        const idx = Object.values(sm).indexOf(session.localUid)
        if (idx !== -1) {
          session.localSeat = idx
          sessionStorage.setItem('seep_seat', String(idx))
        }
      }
    }
  }

  _stateRef = dbRef(DB, `games/${gameId}/gameStateJson`)
  onValue(_stateRef, snap => {
    if (!snap.exists()) return
    const newG = JSON.parse(snap.val())
    Object.assign(gameState, newG)
    ui.selHandIdx   = null
    ui.selFloorIdxs = []
    session.screen  = 'game'
  })
}

// ══════════════════════════════════════
//  AUTH
// ══════════════════════════════════════

export function initAuth() {
  onAuthStateChanged(auth, async user => {
    if (!user) return
    session.localUid  = user.uid
    session.localName = sessionStorage.getItem('seep_name') || ''
    if (!session.localName) return

    const savedGame = sessionStorage.getItem('seep_gameId')
    if (!savedGame) return

    session.currentGameId = savedGame
    const snap = await get(dbRef(DB, `games/${savedGame}`))
    if (!snap.exists()) { session.currentGameId = null; return }
    const d = snap.val()
    if (d.seatMap) {
      const mySeat = Object.values(d.seatMap).indexOf(session.localUid)
      if (mySeat !== -1) {
        session.localSeat = mySeat
        sessionStorage.setItem('seep_seat', String(mySeat))
      }
    }
    if (d.status === 'lobby') {
      subscribeRoom(savedGame)
      session.screen = 'room'
    } else {
      subscribeGameState(savedGame)
    }
  })
}

export async function ensureSignedIn(name) {
  if (session.localUid) return true
  const trimmed = name.trim()
  if (!trimmed) return false
  const cred        = await signInAnonymously(auth)
  session.localUid  = cred.user.uid
  session.localName = trimmed
  sessionStorage.setItem('seep_name', trimmed)
  return true
}

export async function doSignOut() {
  await exitGame()
  await signOut(auth)
  session.localUid      = null
  session.localName     = ''
  session.currentGameId = null
  session.localSeat     = null
  session.hostUid       = null
  sessionStorage.removeItem('seep_gameId')
  sessionStorage.removeItem('seep_seat')
  sessionStorage.removeItem('seep_name')
  session.screen = 'home'
}

export async function exitGame() {
  unsubscribeChat()
  if (!session.currentGameId) { session.screen = 'home'; return }
  if (session.localSeat !== null) {
    const seatDbRef = dbRef(DB, `games/${session.currentGameId}/seatMap/${session.localSeat}`)
    onDisconnect(seatDbRef).cancel()
    await set(seatDbRef, null)
  }
  unsubscribeAll()
  sessionStorage.removeItem('seep_gameId')
  sessionStorage.removeItem('seep_seat')
  session.currentGameId = null
  session.localSeat     = null
  session.screen        = 'home'
}
