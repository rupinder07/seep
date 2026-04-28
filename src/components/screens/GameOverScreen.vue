<template>
  <div id="gameover-screen" class="screen">
    <h1>{{ title }}</h1>
    <p>Team 1: {{ gameState.scores[0] }} pts  |  Team 2: {{ gameState.scores[1] }} pts</p>
    <button class="btn btn-primary" style="font-size:1rem;padding:10px 28px" @click="handleAction">
      {{ session.currentGameId ? 'Back to Home' : 'New Game' }}
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { WIN_SCORE } from '../../logic/constants.js'
import { useGameState } from '../../composables/useGameState.js'
import { useSession } from '../../composables/useSession.js'
import { exitGame } from '../../composables/useGameSync.js'
import { startGame } from '../../composables/useGameActions.js'

const { gameState } = useGameState()
const { session } = useSession()

const title = computed(() => {
  const s0 = gameState.scores[0], s1 = gameState.scores[1]
  const winner = s0 > s1 ? 'Team 1 (P1 & P3)' : s1 > s0 ? 'Team 2 (P2 & P4)' : 'Both Teams (Tie!)'
  return `🏆 ${winner} Wins!`
})

async function handleAction() {
  if (session.currentGameId) {
    await exitGame()
  } else {
    startGame()
  }
}
</script>
