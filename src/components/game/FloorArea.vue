<template>
  <div class="floor-cards" id="floor-area">
    <span v-if="!gameState.floor.length" class="floor-empty">Empty floor</span>
    <template v-for="(item, idx) in gameState.floor" :key="idx">
      <FloorHouse
        v-if="item.type === 'house'"
        :house="item"
        :selected="ui.selFloorIdxs.includes(idx)"
        @click="toggleFloor(idx)"
        @peek="openHousePeek"
      />
      <CardEl
        v-else
        :card="item.card"
        :clickable="true"
        :selected="ui.selFloorIdxs.includes(idx)"
        class="floor-card"
        @click="toggleFloor(idx)"
      />
    </template>
  </div>
</template>

<script setup>
import CardEl     from './CardEl.vue'
import FloorHouse from './FloorHouse.vue'
import { useGameState } from '../../composables/useGameState.js'

const { gameState, ui, toggleFloor, openHousePeek } = useGameState()
</script>
