<template>
  <div
    class="card"
    :class="[isRed ? 'red' : 'black', { selected, 'face-down': faceDown }]"
    :style="clickable ? {} : { cursor: 'default' }"
    @click="clickable ? $emit('click') : null"
  >
    <template v-if="!faceDown">
      <div class="c-tl">
        <div class="c-rank">{{ rankLabel }}</div>
        <div class="c-suit">{{ suitSym }}</div>
      </div>
      <div class="c-center">{{ suitSym }}</div>
      <div class="c-br">
        <div class="c-rank">{{ rankLabel }}</div>
        <div class="c-suit">{{ suitSym }}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { rn, sym, red } from '../../logic/constants.js'

const props = defineProps({
  card:      { type: Object, required: true },
  clickable: { type: Boolean, default: false },
  selected:  { type: Boolean, default: false },
  faceDown:  { type: Boolean, default: false },
})
defineEmits(['click'])

const rankLabel = computed(() => rn(props.card.rank))
const suitSym   = computed(() => sym(props.card.suit))
const isRed     = computed(() => red(props.card.suit))
</script>
