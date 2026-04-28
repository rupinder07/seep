<template>
  <div id="global-menu-wrap" :class="{ visible: session.screen !== 'home' }">
    <button id="global-menu-btn" @click.stop="open = !open">☰</button>
    <div id="global-menu-dropdown" :class="{ open }" @click.stop>
      <div class="menu-account">
        <div id="menu-account-name">{{ session.localName || '—' }}</div>
        <div id="menu-account-detail">{{ menuDetail }}</div>
      </div>
      <button class="menu-item" @click="handleSignOut">Sign Out</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useSession } from '../../composables/useSession.js'
import { doSignOut } from '../../composables/useGameSync.js'

const { session } = useSession()
const open = ref(false)

const SEAT_LABELS = ['Player 1 (T1)', 'Player 2 (T2)', 'Player 3 (T1)', 'Player 4 (T2)']
const menuDetail = computed(() => {
  let d = ''
  if (session.currentGameId) d += `Room: ${session.currentGameId}`
  if (session.localSeat !== null) d += `  ·  ${SEAT_LABELS[session.localSeat]}`
  return d
})

async function handleSignOut() {
  open.value = false
  await doSignOut()
}

function onDocClick() { open.value = false }
onMounted(()    => document.addEventListener('click', onDocClick))
onUnmounted(()  => document.removeEventListener('click', onDocClick))
</script>
