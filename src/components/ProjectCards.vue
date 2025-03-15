<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  projects: Array<{ name: string; images: Array<{ src: string }>; smallDescription: string }>;
}>();

const emit = defineEmits(['setCurrentProject']);
</script>

<template>
  <div class="card-container">
    <div
      v-for="(project, index) in projects"
      :key="index"
      class="card"
      @click="$emit('setCurrentProject', index)"
    >
      <img :src="project.images[0].src" :alt="project.name" />
      <div class="card-content">
        <h2>{{ project.name }}</h2>
        <p>{{ project.smallDescription }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  justify-items: center;
  align-items: start;
  width: 100%;
  max-width: 76rem;
}

@media (max-width: 1350px) {
  .card-container {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}

.card {
  width: 100%;
  overflow: hidden;
  cursor: pointer;
}

.card:active {
  transform: scale(0.9);
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: calc(var(--common-border-radius) / 1.5);
}

.card-content {
  padding: 1rem;
  color: #f2e3d5;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.card-content h2 {
  font-size: 1.2rem;
  margin: 0 0 0.5rem 0;
  font-weight: 600;
}

.card-content p {
  font-size: 0.9rem;
  margin: 0;
}

@media (max-width: 1350px) {
  .card-content h2 {
    font-size: 1rem;
  }
  .card-content p {
    font-size: 0.8rem;
  }
}
</style>