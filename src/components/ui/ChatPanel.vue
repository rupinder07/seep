<template>
  <div v-if="session.currentGameId" class="chat-wrap">
    <!-- Toggle button -->
    <button class="chat-toggle" @click="toggleOpen">
      💬
      <span v-if="!open && unreadCount > 0" class="chat-badge">{{ unreadCount }}</span>
    </button>

    <!-- Panel -->
    <div v-if="open" class="chat-panel">
      <div class="chat-header">
        <span>Room Chat</span>
        <button class="chat-close" @click="open = false">✕</button>
      </div>
      <div class="chat-messages" ref="msgList">
        <div v-if="messages.length === 0" class="chat-empty">No messages yet…</div>
        <div v-for="(msg, i) in messages" :key="i" class="chat-msg" :class="{ mine: msg.name === session.localName }">
          <span class="chat-name">{{ msg.name }}</span>
          <span class="chat-text">{{ msg.text }}</span>
        </div>
      </div>
      <div class="chat-input-row">
        <input
          v-model="draft"
          class="chat-input"
          placeholder="Type a message…"
          maxlength="200"
          @keydown.enter="send"
        />
        <button class="chat-send" @click="send">Send</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'
import { useSession } from '../../composables/useSession.js'
import { messages, unreadCount, sendMessage } from '../../composables/useChat.js'

const { session } = useSession()
const open  = ref(false)
const draft = ref('')
const msgList = ref(null)

// Reset unread when panel is opened; scroll to bottom on new messages
watch(open, (val) => {
  if (val) {
    unreadCount.value = 0
    scrollBottom()
  }
})

watch(messages, () => {
  if (open.value) {
    unreadCount.value = 0
    scrollBottom()
  }
}, { deep: true })

function toggleOpen() {
  open.value = !open.value
}

async function send() {
  if (!draft.value.trim()) return
  await sendMessage(draft.value)
  draft.value = ''
}

async function scrollBottom() {
  await nextTick()
  if (msgList.value) msgList.value.scrollTop = msgList.value.scrollHeight
}
</script>
