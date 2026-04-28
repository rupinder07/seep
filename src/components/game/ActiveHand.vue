<template>
  <div class="active-hand-zone" id="active-hand-zone">
    <CardEl
      v-for="(card, idx) in hand"
      :key="idx"
      :card="card"
      :clickable="isMyTurn"
      :selected="ui.selHandIdx === idx"
      @click="isMyTurn ? selectHandCard(idx) : null"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import CardEl from './CardEl.vue'
import { useGameState } from '../../composables/useGameState.js'
import { useSession } from '../../composables/useSession.js'

const { gameState, ui, selectHandCard } = useGameState()
const { session } = useSession()

const viewSeat = computed(() =>
  session.localSeat !== null ? session.localSeat : gameState.currentPlayer
)
const isMyTurn = computed(() =>
  session.localSeat === null || session.localSeat === gameState.currentPlayer
)
const hand = computed(() => gameState.hands[viewSeat.value] ?? [])
</script>
