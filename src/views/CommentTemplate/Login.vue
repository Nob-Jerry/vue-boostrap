<script setup>
import { reactive } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { FacebookOutlined, GoogleOutlined, LeftOutlined } from '@ant-design/icons-vue'
import router from '@/router'
import { setUserEmail } from '@/hook/UseUser'
import { alertError, alertInfo, alertSuccess } from '@/Utils/notify'
import { getAllUsers } from '@/Utils/users'

const route = useRoute()

console.log(route.path)

const emit = defineEmits(['emailLogin'])

const user = reactive({
  email: '',
  password: '',
})

const loginsuccess = () => {
  const users = getAllUsers()
  const foundUser = users.find(
    (u) =>
      u.email.toLowerCase() === user.email.trim().toLowerCase() && u.password === user.password,
  )

  if (!foundUser) {
    alertError('Email hoặc mật khẩu không đúng!', 'Đăng nhập thất bại')
    return
  }

  // Lưu thông tin đăng nhập tối thiểu
  setUserEmail(foundUser.email)
  localStorage.setItem(
    'currentUser',
    JSON.stringify({ id: foundUser.id, fullName: foundUser.fullName, email: foundUser.email }),
  )

  emit('emailLogin', foundUser.email)
  alertSuccess('Đăng nhập thành công!').then(() => {
    setUserEmail(foundUser.email)
    router.push('/')
  })
}

const handleLoginGoogle = () => {
  alertInfo('Đăng nhập Google hiện chưa hỗ trợ')
}

const handleLoginFacebook = () => {
  alertInfo('Đăng nhập Facebook hiện chưa hỗ trợ')
}
</script>

<template>
  <div class="min-vh-100 d-flex align-items-center justify-content-center bg-dark px-3 py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-5">
          <div class="card shadow border-0">
            <div class="card-body p-4 p-md-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h2 class="h3 mb-0">Welcome back</h2>
                <RouterLink
                  to="/"
                  class="text-decoration-none d-inline-flex align-items-center gap-1"
                >
                  <LeftOutlined style="font-size: 12px" /> Go home
                </RouterLink>
              </div>
              <p class="text-muted mb-4">
                Don’t have an account?
                <RouterLink to="/register">Register</RouterLink>
              </p>

              <form @submit.prevent="loginsuccess" class="needs-validation" novalidate>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input
                    id="email"
                    v-model="user.email"
                    type="email"
                    class="form-control"
                    placeholder="Nhập Email"
                    required
                    aria-label="Email"
                    tabindex="0"
                  />
                </div>
                <div class="mb-4">
                  <label for="password" class="form-label">Password</label>
                  <input
                    id="password"
                    v-model="user.password"
                    type="password"
                    class="form-control"
                    placeholder="Nhập Password"
                    required
                    aria-label="Password"
                    tabindex="0"
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-primary w-100"
                  aria-label="Đăng nhập"
                  tabindex="0"
                >
                  Login
                </button>
              </form>

              <div class="text-center text-muted py-4">Or login with</div>
              <div class="d-grid gap-3" style="grid-template-columns: 1fr 1fr">
                <button
                  type="button"
                  class="btn btn-outline-secondary d-flex align-items-center justify-content-center gap-2"
                  @click="handleLoginGoogle"
                  aria-label="Đăng nhập với Google"
                  tabindex="0"
                >
                  <GoogleOutlined /> Google
                </button>
                <button
                  type="button"
                  class="btn btn-outline-secondary d-flex align-items-center justify-content-center gap-2"
                  @click="handleLoginFacebook"
                  aria-label="Đăng nhập với Facebook"
                  tabindex="0"
                >
                  <FacebookOutlined /> Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
