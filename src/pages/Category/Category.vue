<script setup>
import { ref } from 'vue'
import { getAllPosts } from '@/Utils/post'
import { RouterLink } from 'vue-router'

const selectedItem = ref(null)
const items = getAllPosts()

const showDetail = (index) => {
  selectedItem.value = items.value[index]
}
</script>

<template>
  <div class="container py-1">
    <!-- Hero section -->
    <div
      class="p-4 p-md-5 mb-4 text-white rounded-3"
      style="background: linear-gradient(135deg, #1a1f3a, #0f1220)"
    >
      <div class="col-lg-8 px-0">
        <h1 class="display-6 fw-semibold gradient-text">Blog công nghệ và thủ thuật</h1>
        <p class="lead my-3 ">
          Chia sẻ kiến thức và kinh nghiệm trong lĩnh vực công nghệ
        </p>
      </div>
    </div>

    <div class="row g-4">
      <div class="col-md-7">
        <div v-if="items && items.length" class="card h-100 border-0 shadow-sm">
          <img :src="items[0].image" class="card-img-top" alt="" />
          <div class="card-body">
            <h3 class="card-title h4">{{ items[0].title }}</h3>
            <p class="card-text text-muted">{{ items[0].detail.slice(0, 30) }}...</p>
            <RouterLink :to="`/category/comment/${items[0].id}`" class="btn btn-primary"
              >Đọc tiếp</RouterLink
            >
          </div>
        </div>
      </div>
      <div class="col-md-5">
        <div class="row row-cols-1 g-3">
          <div v-for="post in items.slice(1, 4)" :key="post.id" class="col">
            <div class="card h-100 border-0 shadow-sm">
              <div class="row g-0 align-items-stretch">
                <div class="col-4">
                  <img
                    :src="post.image"
                    class="img-fluid rounded-start h-100 object-fit-cover"
                    alt=""
                  />
                </div>
                <div class="col-8">
                  <div class="card-body">
                    <h5 class="card-title mb-1">{{ post.title }}</h5>
                    <p class="card-text small text-muted mb-2">{{ post.detail.slice(0, 30) }}...</p>
                    <RouterLink :to="`/category/comment/${post.id}`" class="stretched-link"
                      >Đọc</RouterLink
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Grid -->
    <h2 class="h5 mt-4 mb-3">Bài viết mới</h2>
    <div class="row g-4">
      <div v-for="post in items.slice(4)" :key="post.id" class="col-12 col-sm-6 col-lg-4">
        <div class="card h-100 shadow-sm">
          <img :src="post.image" class="card-img-top" alt="" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text text-muted flex-grow-1">{{ post.detail.slice(0, 30) }}...</p>
            <RouterLink :to="`/category/comment/${post.id}`" class="btn btn-outline-primary mt-2"
              >Xem chi tiết</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
