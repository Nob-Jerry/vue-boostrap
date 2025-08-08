import { ref } from 'vue'

export const userEmailRef = ref(localStorage.getItem('email') || '')

export const setUserEmail = (email) => {
  const normalized = email || ''
  userEmailRef.value = normalized
  if (normalized) {
    localStorage.setItem('email', normalized)
  } else {
    localStorage.removeItem('email')
  }
}
