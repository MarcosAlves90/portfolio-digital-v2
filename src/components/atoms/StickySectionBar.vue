<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";

const props = defineProps<{ sectionId: string; label: string }>();

const visible = ref(false);
const isLargeScreen = ref(false);

const LARGE_SCREEN_BREAKPOINT = "(min-width: 1024px)";

let mediaQuery: MediaQueryList | null = null;
let rafId: number | null = null;

const ariaLabel = computed(() => `Navegar para a seção ${props.label}`);

const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList): void => {
  isLargeScreen.value = e.matches;
  if (e.matches) visible.value = false;
};

const scrollToSection = (): void => {
  const element = document.getElementById(props.sectionId);
  element?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const handleScroll = (): void => {
  if (rafId !== null) cancelAnimationFrame(rafId);

  rafId = requestAnimationFrame(() => {
    const element = document.getElementById(props.sectionId);
    visible.value =
      !isLargeScreen.value &&
      Boolean(element?.getBoundingClientRect().top <= 0);
  });
};

onMounted(() => {
  if (typeof window === "undefined") return;

  mediaQuery = window.matchMedia(LARGE_SCREEN_BREAKPOINT);
  isLargeScreen.value = mediaQuery.matches;
  mediaQuery.addEventListener("change", handleMediaChange);

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
});

onUnmounted(() => {
  mediaQuery?.removeEventListener("change", handleMediaChange);
  window.removeEventListener("scroll", handleScroll);
  if (rafId !== null) cancelAnimationFrame(rafId);

  mediaQuery = null;
  rafId = null;
});
</script>

<template>
  <nav
    v-if="visible"
    class="lg:hidden fixed top-0 inset-x-0 z-50 backdrop-blur-md"
    role="navigation"
    aria-label="Navegação de seção contextual"
  >
    <div class="max-w-6xl mx-auto">
      <button
        type="button"
        :aria-label="ariaLabel"
        :aria-controls="sectionId"
        class="w-full h-13 flex items-center gap-3 bg-background/20 text-highlight font-semibold px-6 md:px-12 border-b-2 border-highlight/30 hover:bg-background/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        @click="scrollToSection"
      >
        <span class="uppercase text-sm tracking-wide" aria-hidden="true">{{
          label
        }}</span>
      </button>
    </div>
  </nav>
</template>
