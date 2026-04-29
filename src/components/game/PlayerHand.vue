<template>
  <div v-if="count > 0" class="card-count-badge">
    {{ count }}
  </div>
</template>

<script setup>
defineProps({ count: { type: Number, required: true } })
</script>
