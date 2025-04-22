<script setup lang="ts">
import '@splidejs/splide/css/sea-green';
import { defineEmits } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { ref, onMounted, onUnmounted } from 'vue';

const emit = defineEmits(['setCurrentProject']);

const screenWidth = ref(window.innerWidth);

function updateScreenWidth() {
  screenWidth.value = window.innerWidth;
}

const props = defineProps<{
  projects: Array<{ name: string; images: Array<{ src: string }>; smallDescription: string }>;
  currentProject: number;
}>();

onMounted(() => {
  window.addEventListener('resize', updateScreenWidth);
});
onUnmounted(() => {
  window.removeEventListener('resize', updateScreenWidth);
});
</script>

<template>
  <div class="project-cards">
    <Splide class="project-cards__carousel" :options="{
        rewind: true,
        perPage: screenWidth > 1350 ? 4 : screenWidth > 950 ? 3 : screenWidth > 650 ? 2 : 1,
        perMove: 1,
        updateOnMove: true,
        pagination: true,
        gap: '0.5rem',
    }" aria-label="Destaques da equipe">
      <SplideSlide v-for="(project, index) in projects" :key="index">
        <div :class="currentProject === index ? 'project-cards__card project-cards__card--active' : 'project-cards__card'" @click="$emit('setCurrentProject', index)">
          <img :src="project.images[0].src" :alt="project.name" />
          <div class="project-cards__content">
            <h2>{{ project.name }}</h2>
            <p>{{ project.smallDescription }}</p>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  </div>
</template>

<style scoped>
/* Project Cards Container */
.project-cards {
  width: 100%;
  max-width: 78rem;
}

/* Carousel */
.project-cards__carousel {
  padding-top: 0;
}

/* Card Styles */
.project-cards__card {
  width: 100%;
  overflow: hidden;
  cursor: pointer;
  padding: 0.5rem;
}
.project-cards__card--active {
  background-color: var(--color-second-background-secondary);
  border-radius: var(--common-border-radius);
}
.project-cards__card:active {
  transform: scale(0.9);
}
.project-cards__card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: calc(var(--common-border-radius) / 1.5);
}

/* Card Content */
.project-cards__content {
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
.project-cards__content h2 {
  font-size: 1.2rem;
  margin: 0 0 0.5rem 0;
  font-weight: 600;
}
.project-cards__content p {
  font-size: 0.9rem;
  margin: 0;
}

/* Responsive Styles */
@media (max-width: 1350px) {
  .project-cards__content h2 {
    font-size: 1rem;
  }
  .project-cards__content p {
    font-size: 0.8rem;
  }
}
@media (max-width: 950px) {
  .project-cards {
    gap: 1rem;
  }
  .project-cards__content {
    padding: 0.3rem;
  }
  .project-cards__content p {
    display: none;
  }
  .project-cards__content h2 {
    font-size: 0.8rem;
  }
  :deep(.splide) {
    padding: 0 1rem 3rem 1rem;
  }
  :deep(.splide__arrow svg) {
    height: 1.5em;
    width: 1.5em;
  }
  :deep(.splide__arrow--prev) {
    left: -0.8rem;
  }
  :deep(.splide__arrow--next) {
    right: -0.8rem;
  }
}

/* Splide Customizations */
:deep(.splide__slide) {
  display: flex;
  justify-content: center;
  align-items: center;
}
:deep(.splide__arrow svg) {
  fill: #f2e3d5 !important;
}
:deep(.splide__pagination__page) {
  cursor: pointer;
  width: 15px;
  height: 15px;
  border-radius: 2px;
  margin: 0 4px;
  border: none;
  background-color: rgba(var(--color-highlight-rgb), 0.3);
  transition: background-color 0.3s ease;
}
:deep(.splide__pagination__page:hover) {
  background-color: rgba(var(--color-highlight-rgb), 0.6);
}
:deep(.splide__pagination__page.is-active) {
  background-color: rgba(var(--color-highlight-rgb), 1);
  outline: none;
}
</style>