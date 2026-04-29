<template>
  <div id="room-screen" class="screen">
    <h2>Game Room</h2>
    <div class="room-code-box">
      <div class="label">Share this code</div>
      <div class="room-code" title="Click to copy" @click="handleCopyCode">
        {{ copiedMsg || session.currentGameId || '------' }}
      </div>
    </div>
    <div class="seat-grid">
      <div class="seat-header t1">Team 1 (Blue)</div>
      <div class="seat-header t2">Team 2 (Red)</div>
      <div
        v-for="seat in [0, 1, 2, 3]"
        :key="seat"
        class="seat-slot"
        :class="{ taken: !!seatUid(seat), mine: seatUid(seat) === session.localUid }"
      >
        <template v-if="seatUid(seat)">
          <div class="seat-name">{{ seatName(seat) }}</div>
          <div class="seat-label">{{ SEAT_LABELS[seat] }}</div>
          <button
            v-if="isHost && seatUid(seat) !== session.localUid"
            class="seat-kick-btn"
            title="Remove player"
            @click="kickPlayer(seat)"
          >✕ Remove</button>
        </template>
        <template v-else-if="!myUidInMap">
          <div class="seat-label">{{ SEAT_LABELS[seat] }}</div>
          <button @click="takeSeat(seat)">Take seat</button>
        </template>
        <template v-else>
          <div class="seat-label">{{ SEAT_LABELS[seat] }}</div>
          <div style="color:#555;font-size:.85rem">Empty</div>
        </template>
      </div>
    </div>
    <div>{{ statusText }}</div>
    <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center">
      <button
        v-if="isHost && allFull"
        class="btn btn-primary"
        style="padding:12px 36px;font-size:1rem"
        @click="hostStartGame"
      >Start Game ▶</button>
      <button class="btn btn-exit" style="padding:12px 28px;font-size:1rem" @click="handleExit">
        🚪 Leave Room
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useSession } from '../../composables/useSession.js'
import {
  takeSeat, hostStartGame, copyCode, exitGame, kickPlayer,
  _latestRoomData,
} from '../../composables/useGameSync.js'
import { requestConfirm } from '../../composables/useConfirm.js'

async function handleExit() {
  const yes = await requestConfirm('Are you sure you want to leave the room?')
  if (yes) exitGame()
}

const { session } = useSession()
const copiedMsg = ref('')

const SEAT_LABELS = ['Player 1 (T1)', 'Player 2 (T2)', 'Player 3 (T1)', 'Player 4 (T2)']

const roomData   = _latestRoomData
const seatMap    = computed(() => roomData.value?.seatMap   || {})
const names      = computed(() => roomData.value?.names     || {})
const isHost     = computed(() => roomData.value?.hostUid === session.localUid || session.hostUid === session.localUid)
const filledCount = computed(() => Object.values(seatMap.value).filter(v => v !== null).length)
const allFull    = computed(() => filledCount.value === 4)
const myUidInMap = computed(() => Object.values(seatMap.value).includes(session.localUid))

function seatUid(seat)  { return seatMap.value[seat] || null }
function seatName(seat) {
  const uid = seatUid(seat)
  return uid ? (names.value[uid] || 'Player') : ''
}

const statusText = computed(() => {
  if (isHost.value)
    return allFull.value ? 'All seats filled! Start the game.' : `Waiting for players… (${filledCount.value}/4)`
  return 'Waiting for host to start…'
})

async function handleCopyCode() {
  await copyCode()
  copiedMsg.value = 'Copied!'
  setTimeout(() => { copiedMsg.value = '' }, 1200)
}
</script>
