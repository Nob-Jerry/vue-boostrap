<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="bg-dark text-light border-top mt-auto">
    <footer class="text-center text-sm text-gray-500 py-4">
  <p>&copy; 2025 Nob-Jerry. All rights reserved.</p>
  <p>Developed using Vue 3 & Bootstrap 5</p>
  <p><a href="https://github.com/Nob-Jerry" class="text-blue-500 hover:underline">GitHub</a></p>
</footer>
  </footer>
</template>
