<template>
  <div id="global-menu-wrap" :class="{ visible: session.screen !== 'home' }">
    <button id="global-menu-btn" @click.stop="open = !open">☰</button>
    <div id="global-menu-dropdown" :class="{ open }" @click.stop>
      <div class="menu-account">
        <div id="menu-account-name">{{ session.localName || '—' }}</div>
        <div id="menu-account-detail">{{ menuDetail }}</div>
      </div>
      <div v-if="isHost && session.currentGameId" class="menu-section">
        <div class="menu-section-title">Room Code</div>
        <div class="menu-room-code" @click="handleCopyCode">
          {{ copiedMsg || session.currentGameId }}
        </div>
      </div>
      <button v-if="session.currentGameId" class="menu-item danger" @click="handleLeave">Leave Room</button>
      <button class="menu-item" @click="handleSignOut">Sign Out</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { copyCode } from '../../composables/useGameSync.js'
import { useSession } from '../../composables/useSession.js'
import { doSignOut, exitGame } from '../../composables/useGameSync.js'

const { session } = useSession()
const open      = ref(false)
const copiedMsg = ref('')

const isHost = computed(() => session.hostUid && session.hostUid === session.localUid)

const SEAT_LABELS = ['Player 1 (T1)', 'Player 2 (T2)', 'Player 3 (T1)', 'Player 4 (T2)']
const menuDetail = computed(() => {
  let d = ''
  if (session.currentGameId) d += `Room: ${session.currentGameId}`
  if (session.localSeat !== null) d += `  ·  ${SEAT_LABELS[session.localSeat]}`
  return d
})

async function handleCopyCode() {
  await copyCode()
  copiedMsg.value = 'Copied!'
  setTimeout(() => { copiedMsg.value = '' }, 1200)
}

async function handleLeave() {
  open.value = false
  await exitGame()
}

async function handleSignOut() {
  open.value = false
  await doSignOut()
}

function onDocClick() { open.value = false }
onMounted(()    => document.addEventListener('click', onDocClick))
onUnmounted(()  => document.removeEventListener('click', onDocClick))
</script>
