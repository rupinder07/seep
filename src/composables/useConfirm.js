import { ref } from 'vue'

export const confirmVisible = ref(false)
export const confirmMessage = ref('')

let _resolve = null

export function requestConfirm(msg = 'Are you sure?') {
  confirmMessage.value = msg
  confirmVisible.value = true
  return new Promise(resolve => { _resolve = resolve })
}

export function respondConfirm(yes) {
  confirmVisible.value = false
  if (_resolve) { _resolve(yes); _resolve = null }
}
