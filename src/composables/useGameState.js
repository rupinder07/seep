import { reactive, computed } from 'vue'
import { freshState } from '../logic/state.js'
import { computeActions } from '../logic/rules.js'

// Module-level singletons shared by all components
const gameState    = reactive(freshState())
const ui           = reactive({ selHandIdx: null, selFloorIdxs: [] })
const seepOverlay  = reactive({ visible: false, message: '', onDone: null })
const housePeek    = reactive({ visible: false, house: null })
const finalBanner  = reactive({ visible: false, message: '' })

export function useGameState() {
  const actions = computed(() => computeActions(gameState, ui))

  function playerName(seat) {
    return (gameState.playerNames?.[seat]) || `Player ${seat + 1}`
  }

  function selectHandCard(idx) {
    ui.selHandIdx   = (ui.selHandIdx === idx) ? null : idx
    ui.selFloorIdxs = []
  }

  function toggleFloor(idx) {
    const i = ui.selFloorIdxs.indexOf(idx)
    if (i === -1) ui.selFloorIdxs.push(idx)
    else          ui.selFloorIdxs.splice(i, 1)
  }

  function clearSel() {
    ui.selHandIdx   = null
    ui.selFloorIdxs = []
  }

  function showFinalBanner(houseVal) {
    finalBanner.message = `House ${houseVal} Final!!`
    finalBanner.visible = true
  }

  function showSeepOverlay(team, pts, cb) {
    seepOverlay.message = `+${pts} points for Team ${team + 1}!`
    seepOverlay.visible = true
    seepOverlay.onDone  = cb
  }

  function openHousePeek(house) {
    housePeek.house   = house
    housePeek.visible = true
  }

  function closeHousePeek() {
    housePeek.visible = false
    housePeek.house   = null
  }

  return {
    gameState,
    ui,
    actions,
    seepOverlay,
    housePeek,
    finalBanner,
    playerName,
    selectHandCard,
    toggleFloor,
    clearSel,
    showSeepOverlay,
    showFinalBanner,
    openHousePeek,
    closeHousePeek,
  }
}
