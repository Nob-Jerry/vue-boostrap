export const defaultUsers = [
  {
    id: 1,
    fullName: 'Trần Hoàng Tuấn',
    email: 'jerry@gmail.com',
    password: '123456',
    phone: '0901234567',
    isActive: true,
    address: '123 Tân Thới Nhất, Hồ Chí Minh',
    gender: 'male',
    dob: '2000-03-24',
    avatar: 'https://cdn.mobilecity.vn/mobilecity-vn/images/2024/12/top-anh-dai-dien-facebook-dep-50.png.webp',
  },
  {
    id: 2,
    fullName: 'Trần Nguyễn Bảo Ngọc',
    email: 'ngoc@gmail.com',
    password: '123456',
    phone: '0912345678',
    isActive: true,
    address: '456 Lê Lợi, TP. Hồ Chí Minh',
    gender: 'female',
    dob: '2020-08-22',
    avatar: 'https://i.pinimg.com/474x/79/d3/1e/79d31e406fe3d3d7322b18666184911d.jpg',
  },
  {
    id: 3,
    fullName: 'Truscy Nguyen',
    email: 'truscy@gmail.com',
    password: '123456',
    phone: '0987654321',
    isActive: false,
    address: '789 Phan Chu Trinh, Hồ Chí Minh',
    gender: 'male',
    dob: '2003-03-19',
    avatar: 'https://cdn2.fptshop.com.vn/unsafe/hinh_dai_dien_zalo_may_man_43_4603faa50a.jpg',
  },
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
  const map = new Map()
  for (const user of defaultUsers) {
    map.set(user.email.toLowerCase(), user)
  }
  for (const user of stored) {
    map.set(user.email.toLowerCase(), user)
  }
  return Array.from(map.values())
}

export const getUserById = (id) => {
  const numericId = Number(id)
  if (Number.isNaN(numericId)) return undefined
  const users = getAllUsers()
  return users.find((u) => u.id === numericId)
}

export const getUserByEmail = (email) => {
  if (!email) return undefined
  const normalized = String(email).trim().toLowerCase()
  if (!normalized) return undefined
  const users = getAllUsers()
  return users.find((u) => u.email?.toLowerCase() === normalized)
}

export const upsertUser = (updatedUser) => {
  if (!updatedUser || !updatedUser.email) return
  const normalized = updatedUser.email.trim().toLowerCase()
  const stored = getStoredUsers()
  const index = stored.findIndex((u) => u.email?.toLowerCase() === normalized)
  if (index >= 0) {
    stored[index] = { ...stored[index], ...updatedUser }
  } else {
    stored.push({ ...updatedUser })
  }
  saveStoredUsers(stored)
}


