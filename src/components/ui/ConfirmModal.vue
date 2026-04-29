<template>
  <div v-if="confirmVisible" class="confirm-overlay">
    <div class="confirm-box">
      <p class="confirm-msg">{{ confirmMessage }}</p>
      <div class="confirm-btns">
        <button class="btn btn-exit" @click="respondConfirm(true)">🚪 Yes, Exit</button>
        <button class="btn btn-secondary" @click="respondConfirm(false)">Stay</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { confirmVisible, confirmMessage, respondConfirm } from '../../composables/useConfirm.js'
</script>
