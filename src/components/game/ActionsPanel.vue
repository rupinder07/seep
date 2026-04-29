<template>
  <div class="g-actions">
    <div class="turn-label">{{ turnLabel }}</div>
    <div class="bid-disp">{{ bidDisp }}</div>
    <div class="action-btns">
      <button class="btn btn-throw" :disabled="!actions.throw" @click="doAction('throw')">Throw</button>
      <button class="btn btn-pick"  :disabled="!actions.pick"  @click="doAction('pick')">Pick</button>
      <button class="btn btn-house" :disabled="!canHouse"      @click="doHouse">House</button>
      <button class="btn btn-seep btn-special"  :disabled="!actions.seep"  @click="doAction('seep')">Seep</button>
      <button class="btn btn-final btn-special" :disabled="!canFinal"      @click="handleFinal">
        Final{{ countdown !== null ? ` (${countdown})` : '' }}
      </button>
    </div>
    <div class="status-msg">{{ actions.msg }}</div>
  </div>
</template>

<script setup>
import { computed, ref, watch, onUnmounted } from 'vue'
import { rn } from '../../logic/constants.js'
import { useGameState } from '../../composables/useGameState.js'
import { useSession } from '../../composables/useSession.js'
import { doAction, doFinal, clearFinal } from '../../composables/useGameActions.js'

const { gameState, actions } = useGameState()
const { session } = useSession()

const turnLabel = computed(() => {
  const cp = gameState.currentPlayer
  return `Player ${cp + 1}'s Turn (Team ${cp % 2 + 1})`
})

const bidDisp = computed(() =>
  gameState.bidValue ? `Bid: ${rn(gameState.bidValue)} (${gameState.bidValue})` : ''
)

const canHouse = computed(() => actions.value.build || actions.value.add)

const canFinal = computed(() => {
  if (gameState.finalEligible === null) return false
  if (session.localSeat !== null) return gameState.finalEligible === session.localSeat
  return true
})

function doHouse() {
  if (actions.value.add) doAction('add')
  else if (actions.value.build) doAction('build')
}

// ── Final countdown ──
const countdown = ref(null)
let countdownTimer = null

function stopTimer() {
  if (countdownTimer) { clearInterval(countdownTimer); countdownTimer = null }
  countdown.value = null
}

watch(() => gameState.finalEligible, (val) => {
  stopTimer()
  if (val === null) return

  // Only the eligible player (or local mode) runs the timer
  const isEligible = session.localSeat === null || session.localSeat === val
  if (!isEligible) return

  countdown.value = 5
  countdownTimer = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      stopTimer()
      clearFinal()
    }
  }, 1000)
})

function handleFinal() {
  stopTimer()
  doFinal()
}

onUnmounted(stopTimer)
</script>
