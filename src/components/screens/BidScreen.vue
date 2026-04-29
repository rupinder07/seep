<template>
  <div id="bid-screen" class="screen">
    <h2>♠ Bid Phase</h2>
    <p>{{ instrText }}</p>
    <div class="bid-hand">
      <CardEl
        v-for="(card, i) in bidderHand"
        :key="i"
        :card="card"
        :clickable="false"
      />
    </div>
    <p v-if="hintText" style="color:#ffa040;font-size:.8rem;">{{ hintText }}</p>
    <div v-if="isBidder" class="bid-btns">
      <button
        v-for="v in validBids"
        :key="v"
        class="bid-btn"
        @click="confirmBid(v)"
      >Bid {{ rn(v) }} ({{ v }})</button>
      <button v-if="canPass" class="bid-btn pass" @click="reDealBid">Pass (Redeal)</button>
    </div>
    <button class="btn btn-exit" style="margin-top:8px;padding:8px 24px;font-size:.9rem" @click="handleExit">
      🚪 Exit Game
    </button>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import { rn } from '../../logic/constants.js'
import CardEl from '../game/CardEl.vue'
import { useGameState } from '../../composables/useGameState.js'
import { useSession } from '../../composables/useSession.js'
import { confirmBid, reDealBid } from '../../composables/useGameActions.js'
import { exitGame } from '../../composables/useGameSync.js'
import { requestConfirm } from '../../composables/useConfirm.js'

async function handleExit() {
  const yes = await requestConfirm('Are you sure you want to exit the game?')
  if (yes) exitGame()
}

const { gameState, playerName } = useGameState()
const { session } = useSession()

const isBidder   = computed(() => session.localSeat === null || session.localSeat === gameState.bidder)
const bidderHand = computed(() => isBidder.value ? (gameState.hands[gameState.bidder] ?? []) : [])
const maxRnk     = computed(() => bidderHand.value.length ? Math.max(...bidderHand.value.map(c => c.rank)) : 0)
const canBid     = computed(() => maxRnk.value >= 9)
const has9Spade  = computed(() => bidderHand.value.some(c => c.rank === 9 && c.suit === 'S'))
const canPass    = computed(() => !canBid.value || (maxRnk.value === 9 && !has9Spade.value))

const validBids = computed(() => {
  if (!canBid.value) return []
  return [...new Set(bidderHand.value.filter(c => c.rank >= 9).map(c => c.rank))].sort((a, b) => a - b)
})

const instrText = computed(() => {
  if (!isBidder.value) return `Waiting for ${playerName(gameState.bidder)} to bid…`
  if (!canBid.value)   return 'No card ≥ 9 — redealing…'
  return `${playerName(gameState.bidder)} – choose your bid (≥ 9). You need a matching key card in your hand.`
})

const hintText = computed(() => {
  if (!isBidder.value) return ''
  return (canPass.value && canBid.value) ? 'You may pass (highest card is a non-♠ 9).' : ''
})

// Auto-redeal if no card ≥ 9 — only during bid phase
watch(canBid, (val) => {
  if (!val && isBidder.value && gameState.phase === 'bid') setTimeout(reDealBid, 1200)
}, { immediate: true })
</script>
