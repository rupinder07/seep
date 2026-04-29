<template>
  <div id="game-screen" class="screen">
    <!-- Header -->
    <div class="g-header">
      <h1>♠ SEEP</h1>
      <div class="g-scores">
        <div class="g-score" :class="{ winning: gameState.scores[0] > gameState.scores[1] }">
          <div class="g-score-label">Team 1</div>
          <div class="g-score-val">{{ gameState.scores[0] }}</div>
        </div>
        <div class="g-score-sep">vs</div>
        <div class="g-score" :class="{ winning: gameState.scores[1] > gameState.scores[0] }">
          <div class="g-score-label">Team 2</div>
          <div class="g-score-val">{{ gameState.scores[1] }}</div>
        </div>
      </div>
      <div v-if="session.currentGameId" class="g-room-code" title="Click to copy" @click="handleCopyCode">
        {{ copiedMsg || session.currentGameId }}
      </div>
    </div>

    <!-- Table -->
    <div class="g-table">
      <!-- Top: Player 2 (seat 2) -->
      <div class="player-zone top" :class="{ active: gameState.currentPlayer === 2 }">
        <div class="cards-row">
          <PlayerHand :count="gameState.hands[2]?.length ?? 0" />
        </div>
        <div class="p-label t0" :class="{ 'active-lbl': gameState.currentPlayer === 2 }">
          {{ playerName(2) }} · Team 1
        </div>
        <button v-if="isHost && seatOccupied(2) && 2 !== session.localSeat" class="kick-btn" @click="kickPlayer(2)" title="Remove player">✕</button>
      </div>

      <!-- Left: Player 1 (seat 1) -->
      <div class="player-zone left" :class="{ active: gameState.currentPlayer === 1 }">
        <div class="cards-row">
          <PlayerHand :count="gameState.hands[1]?.length ?? 0" />
        </div>
        <div class="p-label t1" :class="{ 'active-lbl': gameState.currentPlayer === 1 }">
          {{ playerName(1) }}·T2
        </div>
        <button v-if="isHost && seatOccupied(1) && 1 !== session.localSeat" class="kick-btn" @click="kickPlayer(1)" title="Remove player">✕</button>
      </div>

      <!-- Center: Floor -->
      <div class="floor-zone">
        <div class="floor-label">TABLE</div>
        <FloorArea />
        <div class="cap-row">
          <div>T1 pts: <span>{{ capPts(0) }}</span></div>
          <div>T2 pts: <span>{{ capPts(1) }}</span></div>
        </div>
      </div>

      <!-- Right: Player 3 (seat 3) -->
      <div class="player-zone right" :class="{ active: gameState.currentPlayer === 3 }">
        <div class="p-label t1" :class="{ 'active-lbl': gameState.currentPlayer === 3 }">
          {{ playerName(3) }}·T2
        </div>
        <div class="cards-row">
          <PlayerHand :count="gameState.hands[3]?.length ?? 0" />
        </div>
        <button v-if="isHost && seatOccupied(3) && 3 !== session.localSeat" class="kick-btn" @click="kickPlayer(3)" title="Remove player">✕</button>
      </div>

      <!-- Bottom: Player 0 (seat 0) -->
      <div class="player-zone bottom" :class="{ active: gameState.currentPlayer === 0 }">
        <div class="p-label t0" :class="{ 'active-lbl': gameState.currentPlayer === 0 }">
          {{ playerName(0) }} · Team 1
        </div>
        <div class="cards-row">
          <PlayerHand :count="gameState.hands[0]?.length ?? 0" />
        </div>
      </div>
    </div>

    <!-- Active hand (local player face-up) -->
    <ActiveHand />

    <!-- Actions panel -->
    <ActionsPanel />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { cardPts } from '../../logic/constants.js'
import PlayerHand  from '../game/PlayerHand.vue'
import FloorArea   from '../game/FloorArea.vue'
import ActiveHand  from '../game/ActiveHand.vue'
import ActionsPanel from '../game/ActionsPanel.vue'
import { useGameState } from '../../composables/useGameState.js'
import { useSession } from '../../composables/useSession.js'
import { kickPlayer, copyCode, _liveSeatMap } from '../../composables/useGameSync.js'

const { gameState, playerName } = useGameState()
const { session } = useSession()

const isHost      = computed(() => session.hostUid && session.hostUid === session.localUid)
const copiedMsg   = ref('')

async function handleCopyCode() {
  await copyCode()
  copiedMsg.value = 'Copied!'
  setTimeout(() => { copiedMsg.value = '' }, 1200)
}
const seatOccupied = (seat) => !!_liveSeatMap.value[seat]

function capPts(team) {
  return (gameState.captured[team] ?? []).reduce((s, c) => s + cardPts(c), 0) + (gameState.seepBonus[team] ?? 0)
}
</script>
