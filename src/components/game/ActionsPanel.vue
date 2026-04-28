<template>
  <div class="g-actions">
    <div class="turn-label">{{ turnLabel }}</div>
    <div class="bid-disp">{{ bidDisp }}</div>
    <div class="action-btns">
      <button class="btn btn-pick"  :disabled="!actions.pick"  @click="doAction('pick')">Pick</button>
      <button class="btn btn-seep"  :disabled="!actions.seep"  @click="doAction('seep')">Seep</button>
      <button class="btn btn-build" :disabled="!actions.build" @click="doAction('build')">
        {{ buildLabel }}
      </button>
      <button class="btn btn-add"   :disabled="!actions.add"   @click="doAction('add')">Add to House</button>
      <button class="btn btn-throw" :disabled="!actions.throw" @click="doAction('throw')">Throw</button>
    </div>
    <div class="status-msg">{{ actions.msg }}</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { rn } from '../../logic/constants.js'
import { useGameState } from '../../composables/useGameState.js'
import { doAction } from '../../composables/useGameActions.js'

const { gameState, actions } = useGameState()

const turnLabel = computed(() => {
  const cp = gameState.currentPlayer
  return `Player ${cp + 1}'s Turn (Team ${cp % 2 + 1})`
})

const bidDisp = computed(() =>
  gameState.bidValue ? `Bid: ${rn(gameState.bidValue)} (${gameState.bidValue})` : ''
)

const buildLabel = computed(() => {
  if (!actions.value.build) return 'Build House'
  return actions.value.buildMerge
    ? `Merge → ${rn(actions.value.buildVal)}`
    : `Build House (${rn(actions.value.buildVal)})`
})
</script>
