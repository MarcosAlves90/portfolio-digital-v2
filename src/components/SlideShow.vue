<script setup lang="ts">
import { ref, onMounted, onUnmounted, inject, computed } from 'vue';

interface Slide {
  src: string;
  caption?: string;
}

const props = defineProps<{
  slides: Slide[];
}>();

const slideIndex = inject('slideIndex', ref(1));
const setSlideIndex = inject('setSlideIndex', (index: number) => {});

const intervalRef = ref<ReturnType<typeof setInterval> | null>(null);
const totalSlides = computed(() => props.slides.length);

const nextSlide = () => {
  setSlideIndex((slideIndex.value % totalSlides.value) + 1);
};

const resetInterval = () => {
  if (intervalRef.value !== null) {
    clearInterval(intervalRef.value);
  }
  intervalRef.value = setInterval(nextSlide, 7000);
};

const changeSlide = (n: number) => {
  const newIndex = (slideIndex.value - 1 + n + totalSlides.value) % totalSlides.value;
  setSlideIndex(newIndex + 1);
  resetInterval();
};

const goToSlide = (n: number) => {
  setSlideIndex(n);
  resetInterval();
};

onMounted(() => {
  resetInterval();
});

onUnmounted(() => {
  if (intervalRef.value !== null) {
    clearInterval(intervalRef.value);
  }
});
</script>

<template>
  <div class="slideshow">
    <div class="slideshow-container">
      <div
        v-for="(slide, index) in slides"
        :key="slide.src"
        :class="{ active: slideIndex === index + 1 }"
        class="slide"
      >
        <img
          :src="slide.src"
          :alt="slide.caption || `Slide ${index + 1}`"
          loading="lazy"
          class="slide-image"
        />
        <div
          v-if="slide.caption"
          class="text-overlay"
          :style="{ bottom: '0', textAlign: 'center' }"
        >
          {{ slide.caption }}
        </div>
      </div>

      <button
        class="navigation-button prev"
        @click="changeSlide(-1)"
        aria-label="Previous slide"
      >
        ❮
      </button>

      <button
        class="navigation-button next"
        @click="changeSlide(1)"
        aria-label="Next slide"
      >
        ❯
      </button>
    </div>

    <div class="dots-container">
      <button
        v-for="(slide, index) in slides"
        :key="index + 1"
        @click="goToSlide(index + 1)"
        :aria-label="`Go to slide ${index + 1}`"
        :aria-current="slideIndex === index + 1"
        class="dot"
      />
    </div>
  </div>
</template>

<style scoped>

.slideshow {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

.slideshow, .slideshow-container, .slide, .slide-image {
  @media (max-width: 950px) {
    width: 100%;
  }
}

.slide {
  display: none;
  width: 640px;
  height: 360px;
  box-sizing: border-box;
  aspect-ratio: 16 / 9;
}

.slide.active {
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--common-border-radius);
}

.text-overlay {
  color: #f2f2f2;
  padding: 4px 12px;
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  border-radius: var(--common-border-radius) var(--common-border-radius) 0 0;
  backdrop-filter: blur(10px);
}

.navigation-button {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 14px;
  margin-top: -22px;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  user-select: none;
  border: none;
  background-color: rgba(var(--color-highlight-rgb), 0.4);
  backdrop-filter: blur(10px);
  color: white;
  --navigation-border-radius: calc(var(--common-border-radius) / 2);
}

.navigation-button.prev {
  left: 0;
  border-radius: 0 var(--navigation-border-radius) var(--navigation-border-radius) 0;
}

.navigation-button.next {
  right: 0;
  border-radius: var(--navigation-border-radius) 0 0 var(--navigation-border-radius);
}

.dots-container {
  display: flex;
  justify-content: center;
  align-items: end;
}

.dot {
  cursor: pointer;
  border-radius: 0;
  width: 35px;
  height: 6px;
  margin: 0 4px;
  border: none;
  background-color: rgba(var(--color-highlight-rgb), 0.3);
  transition: background-color 0.3s ease;
}

.dot:hover {
  background-color: rgba(var(--color-highlight-rgb), 0.6);
}

.dot[aria-current="true"] {
  background-color: rgba(var(--color-highlight-rgb), 1);
  outline: none;
}

@media (max-width: 1600px) {
  .slide {
    width: 480px;
    height: 270px;
  }
}

@media (max-width: 950px) {
  .slideshow, .slideshow-container, .slide, .slide-image {
    width: 100%;
    height: 100%;
  }
  .navigation-button {
    font-size: 12px;
    padding: 10px;
  }
  .dot {
    width: 25px;
    height: 3px;
  }
  .text-overlay {
    font-size: 2.5vw;
    padding: 0.4rem;
  }
}
</style>