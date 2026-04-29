import { ref } from 'vue'
import { ref as dbRef, push, onChildAdded, off, query, limitToLast } from 'firebase/database'
import { DB } from '../firebase.js'
import { useSession } from './useSession.js'

const { session } = useSession()

export const messages  = ref([])
export const unreadCount = ref(0)
let _chatRef = null

export function subscribeChat(gameId) {
  if (_chatRef) { off(_chatRef); _chatRef = null }
  messages.value   = []
  unreadCount.value = 0
  const q = query(dbRef(DB, `games/${gameId}/chat`), limitToLast(50))
  _chatRef = q
  onChildAdded(q, snap => {
    messages.value.push(snap.val())
    unreadCount.value++
  })
}

export function unsubscribeChat() {
  if (_chatRef) { off(_chatRef); _chatRef = null }
  messages.value    = []
  unreadCount.value = 0
}

export async function sendMessage(text) {
  const t = text.trim()
  if (!t || !session.currentGameId) return
  await push(dbRef(DB, `games/${session.currentGameId}/chat`), {
    name: session.localName || 'Player',
    text: t,
    ts:   Date.now(),
  })
}
