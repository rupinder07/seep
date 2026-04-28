<template>
  <GlobalMenu />

  <!-- Pre-game screens -->
  <HomeScreen  v-show="session.screen === 'home'" />
  <RoomScreen  v-show="session.screen === 'room'" />

  <!-- In-game screens (driven by gameState.phase) -->
  <BidScreen      v-show="session.screen === 'game' && gameState.phase === 'bid'" />
  <GameScreen     v-show="session.screen === 'game' && gameState.phase === 'play'" />
  <RoundEndScreen v-show="session.screen === 'game' && gameState.phase === 'roundend'" />
  <GameOverScreen v-show="session.screen === 'game' && gameState.phase === 'gameover'" />

  <!-- Overlays (always mounted) -->
  <SeepOverlay />
  <HousePeekModal />
</template>

<script setup>
import { onMounted } from 'vue'
import GlobalMenu     from './components/ui/GlobalMenu.vue'
import SeepOverlay    from './components/ui/SeepOverlay.vue'
import HousePeekModal from './components/ui/HousePeekModal.vue'
import HomeScreen     from './components/screens/HomeScreen.vue'
import RoomScreen     from './components/screens/RoomScreen.vue'
import BidScreen      from './components/screens/BidScreen.vue'
import GameScreen     from './components/screens/GameScreen.vue'
import RoundEndScreen from './components/screens/RoundEndScreen.vue'
import GameOverScreen from './components/screens/GameOverScreen.vue'
import { useSession }   from './composables/useSession.js'
import { useGameState } from './composables/useGameState.js'
import { initAuth }     from './composables/useGameSync.js'

const { session }   = useSession()
const { gameState } = useGameState()

onMounted(() => {
  initAuth()
})
</script>
