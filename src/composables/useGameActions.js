import { rn, cardPts, WIN_SCORE, itemCards } from '../logic/constants.js'
import { freshState, shuffle, initDeck, sortHand, mergeLooseIntoHouse } from '../logic/state.js'
import { computeActions } from '../logic/rules.js'
import { useGameState } from './useGameState.js'
import { useSession } from './useSession.js'

const { gameState, ui, clearSel, showSeepOverlay } = useGameState()
const { session } = useSession()

// Injected by useGameSync after it loads
let _pushGameState = () => Promise.resolve()
export function setGameSyncPush(fn) { _pushGameState = fn }

// ══════════════════════════════════════
//  BID PHASE
// ══════════════════════════════════════

export function startGame() {
  Object.assign(gameState, freshState())
  gameState.hands[gameState.bidder] = gameState.deck.splice(0, 4)
  sortHand(gameState.hands[gameState.bidder])
  gameState.phase = 'bid'
}

export function reDealBid() {
  gameState.deck = shuffle(initDeck())
  gameState.hands[gameState.bidder] = gameState.deck.splice(0, 4)
  sortHand(gameState.hands[gameState.bidder])
  if (session.currentGameId) {
    _pushGameState()
  }
}

export function dealRemainingCards() {
  gameState.hands[gameState.bidder].push(...gameState.deck.splice(0, 8))
  sortHand(gameState.hands[gameState.bidder])
  for (let p = 0; p < 4; p++) {
    if (p === gameState.bidder) continue
    gameState.hands[p] = gameState.deck.splice(0, 12)
    sortHand(gameState.hands[p])
  }
  gameState.handsDealt = true
}

export function confirmBid(value) {
  gameState.bidValue = value
  gameState.floor    = gameState.deck.splice(0, 4).map(c => ({ type: 'card', card: c }))
  gameState.phase    = 'play'
  if (session.currentGameId) {
    _pushGameState()
  }
}

// ══════════════════════════════════════
//  ACTIONS
// ══════════════════════════════════════

export function doAction(type) {
  if (session.localSeat !== null && session.localSeat !== gameState.currentPlayer) return
  const a = computeActions(gameState, ui)
  if (type === 'pick'  && !a.pick)  return
  if (type === 'seep'  && !a.seep)  return
  if (type === 'build' && !a.build) return
  if (type === 'add'   && !a.add)   return
  if (type === 'throw' && !a.throw) return

  switch (type) {
    case 'pick':  execPickup(false); break
    case 'seep':
      ui.selFloorIdxs = gameState.floor.map((_, i) => i)
      execPickup(true)
      break
    case 'build': execBuild(a.buildVal); break
    case 'add':   execAdd();   break
    case 'throw': execThrow(); break
  }
}

export function execPickup(isSeep) {
  const cp      = gameState.currentPlayer
  const team    = cp % 2
  const hc      = gameState.hands[cp][ui.selHandIdx]
  const captured = [
    ...ui.selFloorIdxs.map(i => gameState.floor[i]).flatMap(itemCards),
    hc,
  ]

  gameState.hands[cp].splice(ui.selHandIdx, 1)
  ;[...ui.selFloorIdxs].sort((a, b) => b - a).forEach(i => gameState.floor.splice(i, 1))
  gameState.captured[team].push(...captured)
  gameState.lastCaptureTeam = team

  const wasFirst    = gameState.isFirstTurn
  gameState.isFirstTurn = false
  clearSel()

  const seepBonus = isSeep || (gameState.floor.length === 0)
  if (seepBonus && !allHandsEmpty()) {
    const pts = wasFirst ? 25 : 50
    gameState.seepBonus[team] += pts
    showSeepOverlay(team, pts, advanceTurn)
    return
  }
  advanceTurn()
}

export function execBuild(val) {
  const cp       = gameState.currentPlayer
  const team     = cp % 2
  const hc       = gameState.hands[cp][ui.selHandIdx]
  const selItems = ui.selFloorIdxs.map(i => gameState.floor[i])
  const allCards = [...selItems.flatMap(itemCards), hc]

  gameState.hands[cp].splice(ui.selHandIdx, 1)
  ;[...ui.selFloorIdxs].sort((a, b) => b - a).forEach(i => gameState.floor.splice(i, 1))

  const existing = gameState.floor.find(it => it.type === 'house' && it.value === val)
  if (existing) {
    existing.cards.push(...allCards)
    if (existing.team !== team) {
      if (!existing.shared) { existing.shared = true; existing.sharedBy = cp }
      existing.pucca = true
    }
    mergeLooseIntoHouse(gameState.floor, existing)
  } else {
    const newHouse = {
      type: 'house', cards: allCards, value: val,
      pucca: false, owner: cp, team, shared: false, sharedBy: undefined,
    }
    gameState.floor.push(newHouse)
    mergeLooseIntoHouse(gameState.floor, newHouse)
  }

  gameState.finalEligible = cp
  gameState.finalHouseVal = val
  gameState.isFirstTurn = false
  clearSel()
  advanceTurn()
}

export function execAdd() {
  const cp          = gameState.currentPlayer
  const hc          = gameState.hands[cp][ui.selHandIdx]
  const houseSelIdx = ui.selFloorIdxs.find(i => gameState.floor[i].type === 'house')
  const house       = gameState.floor[houseSelIdx]
  const looseIdxs   = ui.selFloorIdxs.filter(i => gameState.floor[i].type === 'card')

  house.cards.push(hc, ...looseIdxs.map(i => gameState.floor[i].card))
  const team = cp % 2
  if (house.team !== team) {
    if (!house.shared) { house.shared = true; house.sharedBy = cp }
  }
  house.pucca = true
  gameState.hands[cp].splice(ui.selHandIdx, 1)
  looseIdxs.sort((a, b) => b - a).forEach(i => gameState.floor.splice(i, 1))
  mergeLooseIntoHouse(gameState.floor, house)
  gameState.finalEligible = cp
  gameState.finalHouseVal = house.value
  gameState.isFirstTurn = false
  clearSel()
  advanceTurn()
}

export function execThrow() {
  const cp = gameState.currentPlayer
  const hc = gameState.hands[cp][ui.selHandIdx]
  gameState.floor.push({ type: 'card', card: hc })
  gameState.hands[cp].splice(ui.selHandIdx, 1)
  gameState.isFirstTurn = false
  clearSel()
  advanceTurn()
}

// ══════════════════════════════════════
//  TURN / ROUND MANAGEMENT
// ══════════════════════════════════════

export function allHandsEmpty() {
  return gameState.hands.every(h => h.length === 0)
}

export function clearFinal() {
  gameState.finalEligible = null
  gameState.finalHouseVal = null
  if (session.currentGameId) _pushGameState()
}

export function doFinal() {
  if (session.localSeat !== null && session.localSeat !== gameState.finalEligible) return
  gameState.finalAnnouncement = { seat: gameState.finalEligible, houseVal: gameState.finalHouseVal }
  gameState.finalEligible = null
  gameState.finalHouseVal = null
  if (session.currentGameId) _pushGameState()
}

export function advanceTurn() {
  gameState.finalAnnouncement = null
  if (!gameState.handsDealt) dealRemainingCards()
  if (allHandsEmpty()) { endRound(); return }
  gameState.currentPlayer = (gameState.currentPlayer + 1) % 4
  let t = 0
  while (gameState.hands[gameState.currentPlayer].length === 0 && t++ < 4)
    gameState.currentPlayer = (gameState.currentPlayer + 1) % 4
  if (session.currentGameId) {
    _pushGameState()
  }
}

// ══════════════════════════════════════
//  ROUND END / SCORING
// ══════════════════════════════════════

export function endRound() {
  if (gameState.floor.length > 0 && gameState.lastCaptureTeam !== null) {
    gameState.captured[gameState.lastCaptureTeam].push(...gameState.floor.flatMap(itemCards))
    gameState.floor = []
  }
  const s0 = gameState.captured[0].reduce((s, c) => s + cardPts(c), 0) + gameState.seepBonus[0]
  const s1 = gameState.captured[1].reduce((s, c) => s + cardPts(c), 0) + gameState.seepBonus[1]
  gameState.scores[0] += s0
  gameState.scores[1] += s1
  gameState.phase    = (gameState.scores[0] >= WIN_SCORE || gameState.scores[1] >= WIN_SCORE)
    ? 'gameover'
    : 'roundend'
  gameState._roundS0 = s0
  gameState._roundS1 = s1
  if (session.currentGameId) {
    _pushGameState()
  }
}

export function ptsFilter(team, pred) {
  return gameState.captured[team].filter(pred).reduce((s, c) => s + cardPts(c), 0)
}

export function nextRound() {
  if (session.currentGameId && session.localSeat !== gameState.bidder) return
  gameState.roundNum++
  Object.assign(gameState, {
    deck:            shuffle(initDeck()),
    hands:           [[], [], [], []],
    floor:           [],
    captured:        [[], []],
    seepBonus:       [0, 0],
    bidder:          (gameState.bidder + 1) % 4,
    bidValue:        null,
    phase:           'bid',
    isFirstTurn:     true,
    handsDealt:      false,
    lastCaptureTeam: null,
    finalEligible:    null,
    finalHouseVal:    null,
    finalAnnouncement: null,
  })
  clearSel()
  gameState.hands[gameState.bidder] = gameState.deck.splice(0, 4)
  sortHand(gameState.hands[gameState.bidder])
  if (session.currentGameId) {
    _pushGameState()
  }
}
