<script setup lang="ts">

const props = defineProps<{
  progress: number;
}>();
</script>

<template>
  <div class="progress-bar-container">
    <div
        v-for="index in 8"
        :key="index"
        :class="['progress-segment', { active: index < props.progress }]"
    ></div>
  </div>
</template>

<style scoped>
.progress-bar-container {
  width: 100%;
  overflow: hidden;
  display: flex;
  gap: 0.5rem;
}

.progress-segment {
  height: 0.5rem;
  width: 12.5%;
  background-color: var(--color-background);
}

.progress-segment.active {
  background-color: var(--color-highlight);
}
</style>