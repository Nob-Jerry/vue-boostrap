<script setup>
import { RouterView } from 'vue-router'
import Header from '@/views/HomeTemplate/components/Header.vue'
import Footer from '@/views/HomeTemplate/components/Footer.vue'
</script>

<template>
  <div class="d-flex flex-column min-vh-100">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<style>
.min-vh-100 {
  min-height: 100vh;
}
</style>
