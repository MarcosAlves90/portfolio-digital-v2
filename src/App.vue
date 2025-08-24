<script setup lang="ts">
import MainPage from "@/components/pages/MainPage.vue"
import CursorLight from "@/components/atoms/CursorLight.vue"
</script>

<template>
  <div class="app-root">
    <CursorLight />
    <div class="content">
      <MainPage />
    </div>
  </div>
</template>

<style scoped>
.app-root { position: relative; min-height: 100vh; overflow: visible; }
.content { position: relative; z-index: 1; }
</style>