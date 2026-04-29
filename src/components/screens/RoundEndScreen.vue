<template>
  <div id="roundend-screen" class="screen">
    <h2>Round {{ gameState.roundNum }} Complete</h2>
    <table class="score-table">
      <thead>
        <tr><th>Category</th><th>Team 1</th><th>Team 2</th></tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row[0]">
          <td>{{ row[0] }}</td><td>{{ row[1] }}</td><td>{{ row[2] }}</td>
        </tr>
        <tr class="score-total">
          <td>Round Total</td>
          <td>{{ gameState._roundS0 ?? 0 }}</td>
          <td>{{ gameState._roundS1 ?? 0 }}</td>
        </tr>
      </tbody>
    </table>
    <div class="cum-box">
      <h3>Cumulative Score</h3>
      <div class="cum-vals">
        <div>Team 1: <strong>{{ gameState.scores[0] }}</strong></div>
        <div>Team 2: <strong>{{ gameState.scores[1] }}</strong></div>
      </div>
    </div>
    <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center">
      <button
        class="btn btn-primary"
        style="font-size:1rem;padding:10px 28px"
        @click="handleNext"
      >
        {{ isGameOver ? 'See Results' : 'Next Round ▶' }}
      </button>
      <button class="btn btn-exit" style="padding:10px 24px;font-size:1rem" @click="handleExit">
        🚪 Exit Game
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { cardPts, WIN_SCORE } from '../../logic/constants.js'
import { useGameState } from '../../composables/useGameState.js'
import { nextRound } from '../../composables/useGameActions.js'
import { exitGame } from '../../composables/useGameSync.js'
import { requestConfirm } from '../../composables/useConfirm.js'

async function handleExit() {
  const yes = await requestConfirm('Are you sure you want to exit the game?')
  if (yes) exitGame()
}

const { gameState } = useGameState()

const isGameOver = computed(() =>
  gameState.scores[0] >= WIN_SCORE || gameState.scores[1] >= WIN_SCORE
)

function ptsFilter(team, pred) {
  return (gameState.captured[team] ?? []).filter(pred).reduce((s, c) => s + cardPts(c), 0)
}

const rows = computed(() => [
  ['Spades (face value)', ptsFilter(0, c => c.suit === 'S'), ptsFilter(1, c => c.suit === 'S')],
  ['10♦',                ptsFilter(0, c => c.suit === 'D' && c.rank === 10), ptsFilter(1, c => c.suit === 'D' && c.rank === 10)],
  ['Other Aces',         ptsFilter(0, c => c.rank === 1 && c.suit !== 'S'), ptsFilter(1, c => c.rank === 1 && c.suit !== 'S')],
  ['Seep Bonus',         gameState.seepBonus[0] ?? 0, gameState.seepBonus[1] ?? 0],
])

function handleNext() {
  if (isGameOver.value) {
    gameState.phase = 'gameover'
  } else {
    nextRound()
  }
}
</script>
