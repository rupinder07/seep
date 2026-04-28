<template>
  <div id="final-banner" :class="{ show: finalBanner.visible }">
    <div id="final-msg">{{ finalBanner.message }}</div>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { useGameState } from '../../composables/useGameState.js'

const { finalBanner } = useGameState()

watch(() => finalBanner.visible, (visible) => {
  if (visible) {
    setTimeout(() => { finalBanner.visible = false }, 1800)
  }
})
</script>
