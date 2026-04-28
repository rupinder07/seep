<template>
  <div id="house-peek" :class="{ show: housePeek.visible }" @click.self="closeHousePeek">
    <div class="peek-inner">
      <div class="peek-header">
        <span id="peek-title">{{ peekTitle }}</span>
        <button class="peek-close" @click="closeHousePeek">✕</button>
      </div>
      <div id="peek-owners" class="peek-owners">
        <template v-if="house">
          <span class="peek-owner" :class="`t${house.team}`">
            Built by {{ playerName(house.owner) }} (Team {{ house.team + 1 }})
          </span>
          <template v-if="house.shared && house.sharedBy !== undefined">
            <span class="peek-owner-sep"> · </span>
            <span class="peek-owner" :class="`t${house.team === 0 ? 1 : 0}`">
              Shared by {{ playerName(house.sharedBy) }} (Team {{ house.team === 0 ? 2 : 1 }})
            </span>
          </template>
        </template>
      </div>
      <div id="peek-cards" class="peek-cards">
        <CardEl
          v-for="(card, i) in house?.cards ?? []"
          :key="i"
          :card="card"
          :clickable="false"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { rn, isDoubled } from '../../logic/constants.js'
import CardEl from '../game/CardEl.vue'
import { useGameState } from '../../composables/useGameState.js'

const { housePeek, closeHousePeek, playerName } = useGameState()
const house = computed(() => housePeek.house)

const peekTitle = computed(() => {
  if (!house.value) return ''
  const h = house.value
  const state = h.shared ? ' ⚑ Shared'
    : h.pucca   ? ' ★ Pucca'
    : isDoubled(h) ? ' ◆ Doubled'
    : ' (building)'
  return `House of ${rn(h.value)}${state} — ${h.cards.length} cards`
})
</script>
