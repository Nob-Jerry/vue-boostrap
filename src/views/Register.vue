<script setup>
import { FacebookOutlined, GoogleOutlined, LeftOutlined } from '@ant-design/icons-vue'
import { RouterLink } from 'vue-router'
import { reactive } from 'vue'
import router from '@/router'
import { getStoredUsers, saveStoredUsers } from '@/Utils/users'
import { alertError, alertInfo, alertSuccess, alertWarning } from '@/Utils/notify'

const formState = reactive({
  fullName: '',
  email: '',
  password: '',
})

const handleRegister = () => {
  if (formState.fullName === '' || formState.email === '' || formState.password === '') {
    alertWarning('Vui lòng nhập đầy đủ thông tin!', 'Thiếu thông tin')
    return
  }

  const existingUsers = getStoredUsers()
  const isEmailTaken = existingUsers.some(
    (u) => String(u.email).toLowerCase() === formState.email.trim().toLowerCase(),
  )
  if (isEmailTaken) {
    alertError('Email đã được sử dụng!', 'Email đã tồn tại')
    return
  }

  const nextId = existingUsers.length
    ? Math.max(...existingUsers.map((u) => Number(u.id) || 0)) + 1
    : 1001

  const newUser = {
    id: nextId,
    fullName: formState.fullName,
    email: formState.email.trim(),
    password: formState.password,
  }

  const updated = [...existingUsers, newUser]
  saveStoredUsers(updated)

  alertSuccess('Đăng ký thành công! Hãy đăng nhập.').then(() => router.push('/login'))
}

const handleRegisterGoogle = () => {
  alertInfo('Đăng ký bằng Google hiện chưa hỗ trợ')
}

const handleRegisterFacebook = () => {
  alertInfo('Đăng ký bằng Facebook hiện chưa hỗ trợ')
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
                <h2 class="h3 mb-0">Create an account</h2>
                <RouterLink
                  to="/"
                  class="text-decoration-none d-inline-flex align-items-center gap-1"
                >
                  <LeftOutlined style="font-size: 12px" /> Go home
                </RouterLink>
              </div>
              <p class="text-muted mb-4">
                Already have an account?
                <RouterLink to="/login">Login</RouterLink>
              </p>

              <form @submit.prevent="handleRegister" class="needs-validation" novalidate>
                <div class="mb-3">
                  <label for="fullName" class="form-label">Full name</label>
                  <input
                    id="fullName"
                    v-model="formState.fullName"
                    type="text"
                    class="form-control"
                    placeholder="Nhập Họ Và Tên"
                    required
                    aria-label="Họ và Tên"
                    tabindex="0"
                  />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input
                    id="email"
                    v-model="formState.email"
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
                    v-model="formState.password"
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
                  aria-label="Tạo tài khoản"
                  tabindex="0"
                >
                  Create account
                </button>
              </form>

              <div class="text-center text-muted py-4">Or register with</div>
              <div class="d-grid gap-3" style="grid-template-columns: 1fr 1fr">
                <button
                  type="button"
                  class="btn btn-outline-secondary d-flex align-items-center justify-content-center gap-2"
                  @click="handleRegisterGoogle"
                  aria-label="Đăng ký với Google"
                  tabindex="0"
                >
                  <GoogleOutlined /> Google
                </button>
                <button
                  type="button"
                  class="btn btn-outline-secondary d-flex align-items-center justify-content-center gap-2"
                  @click="handleRegisterFacebook"
                  aria-label="Đăng ký với Facebook"
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

<style scoped></style>
