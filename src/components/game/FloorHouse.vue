<template>
  <!-- Doubled / shared / pucca house — badge + peek button -->
  <div
    v-if="isDoubledHouse"
    class="house"
    :class="[houseState, { selected }]"
    @click="$emit('click')"
  >
    <div class="h-val">{{ rankLabel }}</div>
    <div class="h-badge" :class="badgeCls">{{ badgeTxt }}</div>
    <div class="h-count">{{ house.cards.length }}c</div>
    <button class="house-peek-btn" title="Peek cards" @click.stop="$emit('peek', house)">👁</button>
  </div>

  <!-- Undoubled house: fanned mini-card pile -->
  <div
    v-else
    class="house-pile"
    :class="{ selected }"
    :title="`Building house of ${rankLabel} — not yet doubled`"
    @click="$emit('click')"
  >
    <div
      v-for="(c, i) in displayCards"
      :key="i"
      class="pile-mini-card"
      :class="{ red: isRedCard(c) }"
      :style="`top:${i*18}px;left:${i*4}px;z-index:${10-i};`"
    >
      <span class="pmc-rank">{{ rn(c.rank) }}</span>
      <span class="pmc-suit">{{ sym(c.suit) }}</span>
    </div>
    <div class="h-pile-badge" :class="`t${house.team}`">
      {{ rankLabel }} ▸ T{{ house.team + 1 }}
    </div>
    <button class="house-peek-btn" title="Peek all cards" @click.stop="$emit('peek', house)">👁</button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { rn, sym, red, isDoubled } from '../../logic/constants.js'

const props = defineProps({
  house:    { type: Object, required: true },
  selected: { type: Boolean, default: false },
})
defineEmits(['click', 'peek'])

const isDoubledHouse = computed(() => isDoubled(props.house))
const rankLabel      = computed(() => rn(props.house.value))
const isRedCard      = (c) => red(c.suit)

const houseState = computed(() => {
  if (props.house.shared) return 'shared'
  if (props.house.pucca)  return 'pucca'
  return 'doubled'
})

const badgeCls = computed(() =>
  props.house.shared ? 'shared' : `t${props.house.team}`
)
const badgeTxt = computed(() =>
  props.house.shared
    ? 'T1+T2'
    : `T${props.house.team + 1} P${props.house.owner + 1}`
)

const displayCards = computed(() => props.house.cards.slice(-3).reverse())
</script>
