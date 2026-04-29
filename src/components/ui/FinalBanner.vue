<template>
  <div id="final-banner" :class="{ show: visible }">
    <div id="final-msg">{{ message }}</div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { rn } from '../../logic/constants.js'
import { useGameState } from '../../composables/useGameState.js'

const { gameState, playerName } = useGameState()

const visible = ref(false)
const message = ref('')
let hideTimer = null

watch(() => gameState.finalAnnouncement, (ann) => {
  if (!ann) return
  if (hideTimer) clearTimeout(hideTimer)
  message.value = `House ${rn(ann.houseVal)} Final by ${playerName(ann.seat)}!`
  visible.value = true
  hideTimer = setTimeout(() => { visible.value = false }, 1800)
})
</script>
