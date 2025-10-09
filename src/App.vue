<script setup lang="ts">
import CursorLight from "@/components/atoms/CursorLight.vue"
</script>

<template>
  <div class="app-root">
    <div className="grain"/>
    <CursorLight />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.app-root { position: relative; min-height: 100vh; overflow: visible; }
.content { position: relative; z-index: 1; }
</style>