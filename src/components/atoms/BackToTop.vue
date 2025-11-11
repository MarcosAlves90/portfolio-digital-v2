<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const show = ref(false);

const handler = () => {
  show.value = window.scrollY > 400;
};

onMounted(() => {
  window.addEventListener("scroll", handler, { passive: true });
  handler();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handler);
});

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
</script>

<template>
  <transition name="back-to-top" appear>
    <button
      v-if="show"
      @click="scrollToTop"
      aria-label="Voltar ao topo"
      class="fixed z-50 right-4 bottom-6 sm:right-6 sm:bottom-8 w-12 h-12 flex items-center justify-center rounded-full bg-tertiary/10 text-secondary hover:bg-tertiary/20 hover:text-primary transition-colors shadow-lg focus:outline-none"
    >
      <i class="bi bi-arrow-up text-lg" aria-hidden="true"></i>
    </button>
  </transition>
</template>

<style scoped>
.back-to-top-enter-active,
.back-to-top-leave-active {
  transition:
    opacity 300ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 300ms cubic-bezier(0.22, 1, 0.36, 1);
}

.back-to-top-enter-from,
.back-to-top-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.95);
}

.back-to-top-enter-to,
.back-to-top-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>
