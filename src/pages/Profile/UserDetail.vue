<script setup>
import { reactive, onMounted, computed } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { getUserById, getUserByEmail, upsertUser } from '@/Utils/users'
import { userEmailRef } from '@/hook/UseUser'

const route = useRoute()
const router = useRouter()

const state = reactive({
  loading: true,
  user: null,
})

const currentUser = computed(() => getUserByEmail(userEmailRef.value))

onMounted(() => {
  // Ưu tiên lấy người đang đăng nhập; fallback theo id nếu có param
  const found = currentUser.value || getUserById(route.params.id)
  if (!found) {
    router.replace('/profile')
    return
  }
  state.user = { ...found }
  state.loading = false
})

const handleUpdate = () => {
  upsertUser(state.user)
}
</script>

<template>
  <div class="container py-4">
    <div class="d-flex align-items-center justify-content-between mb-3">
      <h1 class="h4 m-0">Chi tiết người dùng</h1>
      <RouterLink to="/" class="btn btn-outline-secondary" aria-label="Quay lại" tabindex="0">Quay lại</RouterLink>
    </div>

    <div v-if="state.loading" class="text-center py-5">Đang tải...</div>
    <div v-else class="row g-4">
      <div class="col-12 col-md-4">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body d-flex flex-column align-items-center gap-3">
            <img :src="state.user.avatar" alt="Avatar" class="rounded-circle" style="width: 140px; height: 140px; object-fit: cover" />
            <div class="w-100">
              <label class="form-label">Ảnh đại diện (URL)</label>
              <input v-model="state.user.avatar" type="url" class="form-control" aria-label="Ảnh đại diện" tabindex="0" />
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-8">
        <div class="card border-0 shadow-sm">
          <div class="card-body">
            <div class="row g-3">
              <div class="col-12 col-md-6">
                <label class="form-label">Họ và tên</label>
                <input v-model="state.user.fullName" type="text" class="form-control" aria-label="Họ và tên" tabindex="0" />
              </div>

              <div class="col-12 col-md-6">
                <label class="form-label">Email</label>
                <input :value="state.user.email" disabled type="email" class="form-control" aria-label="Email" tabindex="0" />
              </div>

              <div class="col-12 col-md-6">
                <label class="form-label">Số điện thoại</label>
                <input v-model="state.user.phone" type="tel" class="form-control" aria-label="Số điện thoại" tabindex="0" />
              </div>

              <div class="col-12 col-md-6">
                <label class="form-label">Trạng thái</label>
                <input :value="state.user.isActive ? 'Đang hoạt động' : 'Ngưng hoạt động'" disabled type="text" class="form-control" aria-label="Trạng thái" tabindex="0" />
              </div>

              <div class="col-12">
                <label class="form-label">Địa chỉ</label>
                <input v-model="state.user.address" type="text" class="form-control" aria-label="Địa chỉ" tabindex="0" />
              </div>

              <div class="col-12 col-md-6">
                <label class="form-label">Giới tính</label>
                <select v-model="state.user.gender" class="form-select" aria-label="Giới tính" tabindex="0">
                  <option value="male">Nam</option>
                  <option value="female">Nữ</option>
                  <option value="other">Khác</option>
                </select>
              </div>

              <div class="col-12 col-md-6">
                <label class="form-label">Ngày sinh</label>
                <input v-model="state.user.dob" type="date" class="form-control" aria-label="Ngày sinh" tabindex="0" />
              </div>
            </div>

            <div class="d-flex justify-content-end gap-2 mt-4">
              <button class="btn btn-primary" @click="handleUpdate" aria-label="Cập nhật" tabindex="0">Cập nhật</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<style scoped>
</style>


