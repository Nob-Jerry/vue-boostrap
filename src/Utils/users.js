export const defaultUsers = [
  { id: 1, fullName: 'Nguyễn Văn A', email: 'a@example.com', password: '123456' },
  { id: 2, fullName: 'Trần Thị B', email: 'b@example.com', password: '123456' },
  { id: 3, fullName: 'Lê Văn C', email: 'c@example.com', password: '123456' },
]

export const getStoredUsers = () => {
  try {
    const raw = localStorage.getItem('users')
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed
  } catch {
    return []
  } 
}

export const saveStoredUsers = (users) => {
  localStorage.setItem('users', JSON.stringify(users))
}

export const getAllUsers = () => {
  const stored = getStoredUsers()
  // Merge by unique email; stored overrides defaults if same email
  const map = new Map()
  for (const user of defaultUsers) {
    map.set(user.email.toLowerCase(), user)
  }
  for (const user of stored) {
    map.set(user.email.toLowerCase(), user)
  }
  return Array.from(map.values())
}


