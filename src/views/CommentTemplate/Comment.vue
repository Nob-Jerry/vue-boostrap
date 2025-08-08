<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getAllPosts } from '@/Utils/post'
import { alertSuccess, alertWarning } from '@/Utils/notify'

const route = useRoute()

const props = defineProps({
  propsEmail: String,
})

const idPost = computed(() => Number(route.params.id))
const allPosts = getAllPosts()
const postDetail = computed(() => allPosts.find((item) => Number(item.id) === idPost.value) || {})
const relatedPosts = computed(() =>
  allPosts.filter((p) => Number(p.id) !== idPost.value).slice(0, 3),
)

const comments = ref([])
const inputComment = ref('')
const currentEmail = computed(() => props.propsEmail || localStorage.getItem('email') || 'Ẩn danh')

const addComment = () => {
  const text = String(inputComment.value || '').trim()
  if (!text) {
    alertWarning('Nội dung bình luận không được để trống', 'Thiếu nội dung')
    return
  }
  comments.value.unshift({
    email: currentEmail.value,
    comment: text,
    createdAt: new Date().toISOString(),
  })
  inputComment.value = ''
  alertSuccess('Đã gửi bình luận')
}

watch(
  () => route.params.id,
  () => {
    // reset UI state when navigating to another post in the same component
    comments.value = []
    inputComment.value = ''
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },
)
</script>

<template>
  <div class="container py-4">
    <div class="row g-4">
      <!-- Main article -->
      <article class="col-12 col-lg-8">
        <nav class="mb-3" aria-label="breadcrumb">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><router-link to="/">Trang chủ</router-link></li>
            <li class="breadcrumb-item"><router-link to="/category">Bài viết</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">Chi tiết</li>
          </ol>
        </nav>
        <h1 class="h3 fw-semibold mb-2 gradient-text">{{ postDetail.title }}</h1>
        <div class="text-muted small mb-3">
          <span>Đăng bởi {{ currentEmail }}</span>
          <span class="mx-2">•</span>
          <span>{{ new Date().toLocaleDateString() }}</span>
        </div>
        <div class="ratio ratio-16x9 mb-3">
          <img :src="postDetail.image" alt="" class="w-100 h-100 object-fit-cover rounded-3" />
        </div>
        <p class="lead text-muted">{{ postDetail.detail }}</p>
      </article>

      <!-- Sidebar: comments -->
      <aside class="col-12 col-lg-4">
        <div class="card shadow-sm border-0">
          <div class="card-body">
            <h2 class="h5 d-flex align-items-center justify-content-between">
              Bình luận
              <span class="badge text-bg-secondary">{{ comments.length }}</span>
            </h2>
            <form class="mt-3" @submit.prevent="addComment">
              <label for="comment" class="form-label">Viết bình luận</label>
              <textarea
                id="comment"
                v-model="inputComment"
                class="form-control"
                rows="4"
                placeholder="Nhập bình luận của bạn"
                aria-label="Nội dung bình luận"
              ></textarea>
              <div class="d-flex justify-content-end mt-2">
                <button type="submit" class="btn btn-primary">Gửi bình luận</button>
              </div>
            </form>

            <hr class="my-4" />
            <div v-if="comments.length">
              <ul class="list-group list-group-flush">
                <li v-for="(item, index) in comments" :key="index" class="list-group-item px-0">
                  <div class="d-flex justify-content-between">
                    <strong>{{ item.email }}</strong>
                    <span class="text-muted small">{{
                      new Date(item.createdAt).toLocaleString()
                    }}</span>
                  </div>
                  <div class="mt-1">{{ item.comment }}</div>
                </li>
              </ul>
            </div>
            <div v-else class="text-muted small">Chưa có bình luận nào. Hãy là người đầu tiên!</div>
          </div>
        </div>
      </aside>
    </div>

    <!-- Related posts -->
    <div class="mt-5">
      <h2 class="h6 mb-3">Bài viết gợi ý</h2>
      <div class="row g-3">
        <div v-for="post in relatedPosts" :key="post.id" class="col-12 col-md-4">
          <div class="card h-100 shadow-sm">
            <div class="ratio ratio-16x9">
              <img :src="post.image" class="card-img-top object-fit-cover" alt="" />
            </div>
            <div class="card-body py-3">
              <h6 class="card-title mb-2">{{ post.title }}</h6>
              <router-link
                :to="`/category/comment/${post.id}`"
                class="btn btn-sm btn-outline-primary"
                >Xem</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
