import { reactive } from 'vue'

// Shared singleton — all components see the same session object
const session = reactive({
  localUid:      null,
  localName:     '',
  currentGameId: null,
  localSeat:     null,
  hostUid:       null,
  screen:        'home',   // 'home' | 'room' | 'game'
})

export function useSession() {
  return { session }
}
