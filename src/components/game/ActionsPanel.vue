<template>
  <div class="g-actions">
    <div class="turn-label">{{ turnLabel }}</div>
    <div class="bid-disp">{{ bidDisp }}</div>
    <div class="action-btns">
      <button class="btn btn-throw" :disabled="!actions.throw" @click="doAction('throw')">Throw</button>
      <button class="btn btn-pick"  :disabled="!actions.pick"  @click="doAction('pick')">Pick</button>
      <button class="btn btn-house" :disabled="!canHouse"      @click="doHouse">House</button>
      <button class="btn btn-seep btn-special"  :disabled="!actions.seep"  @click="doAction('seep')">Seep</button>
      <button class="btn btn-final btn-special" :disabled="!canFinal"      @click="doFinal()">Final</button>
    </div>
    <div class="status-msg">{{ actions.msg }}</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { rn } from '../../logic/constants.js'
import { useGameState } from '../../composables/useGameState.js'
import { useSession } from '../../composables/useSession.js'
import { doAction, doFinal } from '../../composables/useGameActions.js'

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

const canFinal = computed(() =>
  gameState.finalEligible !== null &&
  gameState.finalEligible === session.localSeat &&
  gameState.currentPlayer === session.localSeat
)

function doHouse() {
  if (actions.value.add) doAction('add')
  else if (actions.value.build) doAction('build')
}
</script>
