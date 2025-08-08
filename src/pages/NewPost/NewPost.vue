<script setup>
import { reactive } from 'vue'
import router from '@/router'
import { getStoredPosts, saveStoredPosts } from '@/Utils/post'
import { alertSuccess, alertWarning } from '@/Utils/notify'

const getEmail = localStorage.getItem('email')

const formState = reactive({
  title: '',
  image: '',
  detail: '',
})

const handleSubmit = () => {
  if (!getEmail) {
    router.push('/login')
    return
  }
  if (!formState.title || !formState.detail) {
    alertWarning('Vui lòng nhập tiêu đề và nội dung', 'Thiếu thông tin')
    return
  }

  const posts = getStoredPosts()
  const nextId = posts.length ? Math.max(...posts.map((p) => Number(p.id) || 0)) + 1 : 10001
  const newPost = {
    id: nextId,
    title: formState.title.trim(),
    image: formState.image || '',
    content: formState.detail.slice(0, 60),
    detail: formState.detail,
    author: getEmail,
    createdAt: new Date().toISOString(),
  }
  saveStoredPosts([newPost, ...posts])
  alertSuccess('Đăng bài thành công!').then(() => router.push('/'))
}
</script>

<template>
  <div class="container py-4">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-9">
        <div class="card shadow-sm border-0">
          <div class="card-body p-4 p-md-5">
            <h1 class="h4 mb-4">Tạo bài viết mới</h1>
            <form @submit.prevent="handleSubmit" class="needs-validation" novalidate>
              <div class="mb-3">
                <label for="title" class="form-label">Tiêu đề</label>
                <input
                  id="title"
                  v-model="formState.title"
                  type="text"
                  class="form-control"
                  placeholder="Nhập tiêu đề bài viết"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="image" class="form-label">Ảnh (URL) - tuỳ chọn</label>
                <input
                  id="image"
                  v-model="formState.image"
                  type="url"
                  class="form-control"
                  placeholder="https://..."
                />
              </div>
              <div class="mb-3">
                <label for="detail" class="form-label">Nội dung</label>
                <textarea
                  id="detail"
                  v-model="formState.detail"
                  rows="8"
                  class="form-control"
                  placeholder="Viết nội dung khoảng 50–150 chữ..."
                  required
                ></textarea>
              </div>
              <div class="d-flex justify-content-end gap-2">
                <router-link to="/" class="btn btn-outline-secondary">Huỷ</router-link>
                <button type="submit" class="btn btn-primary">Đăng bài</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
