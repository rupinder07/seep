<template>
  <div id="seep-overlay" :class="{ show: seepOverlay.visible }">
    <div id="seep-msg">{{ seepOverlay.message }}</div>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { useGameState } from '../../composables/useGameState.js'

const { seepOverlay } = useGameState()

watch(() => seepOverlay.visible, (visible) => {
  if (visible) {
    setTimeout(() => {
      seepOverlay.visible = false
      if (seepOverlay.onDone) {
        seepOverlay.onDone()
        seepOverlay.onDone = null
      }
    }, 1800)
  }
})
</script>
