<template>
  <div v-if="count > 0" class="hidden-pile">
    <div class="pile-stack">
      <div
        v-for="i in showCount"
        :key="i"
        class="card face-down"
        :style="`position:absolute;top:${(i-1)*4}px;left:${(i-1)*4}px;width:54px;height:76px;`"
      />
    </div>
    <div class="pile-label">{{ count }} cards</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  count: { type: Number, required: true },
})

const showCount = computed(() => Math.min(3, props.count))
</script>
