<script setup>
import router from '@/router'
import { RouterLink } from 'vue-router'
import { computed } from 'vue'
import { userEmailRef, setUserEmail } from '@/hook/UseUser'

const userEmail = userEmailRef
const isLoggedIn = computed(() => !!userEmailRef.value)

const handleLogout = () => {
  setUserEmail('')
  router.push('/')
}
</script>

<template>
  <nav
    class="navbar navbar-expand-lg bg-body-tertiary border-bottom"
    style="backdrop-filter: saturate(180%) blur(8px)"
  >
    <div class="container">
      <RouterLink to="/" class="navbar-brand d-flex align-items-center gap-2">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2314/2314583.png"
          alt="Logo"
          width="32"
          height="32"
          class="d-inline-block align-text-top"
        />
        <span class="fw-semibold">Technology Blog</span>
      </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-target="#mainNavbar"
        aria-controls="mainNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
        tabindex="0"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="navbar-collapse" id="mainNavbar">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Trang chủ</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink :to="isLoggedIn ? '/post' : '/login'" class="nav-link">Đăng bài</RouterLink>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li v-if="isLoggedIn" class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="userMenu"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              tabindex="0"
            >
              {{ userEmail }}
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userMenu">
              <li>
                <button
                  class="dropdown-item"
                  @click="handleLogout"
                  aria-label="Đăng xuất"
                  tabindex="0"
                >
                  Đăng xuất
                </button>
              </li>
            </ul>
          </li>
          <template v-else>
            <li class="nav-item">
              <RouterLink to="/login" class="nav-link">Đăng nhập</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/register" class="btn btn-primary ms-lg-2" tabindex="0"
                >Đăng kí</RouterLink
              >
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>
