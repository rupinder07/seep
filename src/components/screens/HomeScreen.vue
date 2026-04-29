<template>
  <div id="home-screen" class="screen">
    <div class="home-logo">♠ SEEP ♠</div>
    <div class="home-card">
      <div v-if="session.localName && session.localUid" class="home-welcome">
        Welcome back, {{ session.localName }}!
      </div>
      <input
        v-else
        v-model="nameInput"
        class="home-input"
        type="text"
        placeholder="Enter your name to play"
        maxlength="20"
        autocomplete="off"
        @keydown.enter="handleStartGame"
      />
      <div class="home-actions">
        <button class="btn btn-primary" @click="handleStartGame">Start Game</button>
        <button class="btn" style="background:#1e5c32;color:#fff;border:1px solid #3a8a4e" @click="joinExpanded = !joinExpanded">
          Join Room
        </button>
      </div>
      <div v-if="joinExpanded" class="home-join-expand">
        <input
          v-model="codeInput"
          type="text"
          placeholder="6-digit code"
          maxlength="6"
          autocomplete="off"
          @keydown.enter="handleJoinSubmit"
        />
        <button class="btn btn-primary" @click="handleJoinSubmit">Join →</button>
      </div>
      <div class="home-error">{{ errorMsg }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useSession } from '../../composables/useSession.js'
import { ensureSignedIn, startNewGame, joinGame } from '../../composables/useGameSync.js'

const { session } = useSession()

const nameInput   = ref('')
const codeInput   = ref('')
const joinExpanded = ref(false)
const errorMsg    = ref('')

async function handleStartGame() {
  errorMsg.value = ''
  const name = session.localName || nameInput.value.trim()
  if (!name) { errorMsg.value = 'Please enter your name first.'; return }
  try {
    await ensureSignedIn(name)
    await startNewGame()
  } catch (e) {
    errorMsg.value = 'Sign-in failed: ' + e.message
  }
}

async function handleJoinSubmit() {
  errorMsg.value = ''
  const name = session.localName || nameInput.value.trim()
  if (!name) { errorMsg.value = 'Please enter your name first.'; return }
  const code = codeInput.value.trim()
  if (code.length !== 6) { errorMsg.value = 'Enter a valid 6-digit room code.'; return }
  try {
    await ensureSignedIn(name)
    const result = await joinGame(code)
    if (result?.error) errorMsg.value = result.error
  } catch (e) {
    errorMsg.value = 'Join failed: ' + e.message
  }
}
</script>
