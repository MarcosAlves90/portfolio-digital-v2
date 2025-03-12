<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next';
import { ref, onMounted, watch, inject } from 'vue';

const TEXTS: string[] = ["隠者", "巡礼者", "賢い", "勇者", "探求者", "賢者", "冒険者", "守護者"];
const currentText = ref<string>(TEXTS[0]);

const theme = inject('theme', ref('light'));
const changeTheme = inject('changeTheme') as () => void;

onMounted((): void => {
  const savedTheme: string = localStorage.getItem('theme') || 'light';
  theme.value = savedTheme;
  document.documentElement.setAttribute('data-theme', savedTheme);

  setInterval((): void => {
    const randomIndex: number = Math.floor(Math.random() * TEXTS.length);
    currentText.value = TEXTS[randomIndex];
  }, 2000);
});

watch(theme, (newTheme: string): void => {
  localStorage.setItem('theme', newTheme);
});

const NAVBAR_HEIGHT = { normal: '8rem', small: '5rem' };
</script>

<template>
  <nav>
    <h1 aria-live="polite">{{ currentText }}</h1>
    <button @click="changeTheme" :aria-label="`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`">
      <Moon v-if="theme === 'light'" aria-hidden="true"/>
      <Sun v-else aria-hidden="true"/>
    </button>
  </nav>
</template>

<style scoped>
nav {
  height: 8rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-background);
  color: var(--color-text);
  z-index: 1000;
  padding: 1rem 2rem;
  border-bottom: 2px solid var(--color-text);
  transition: background-color 0.2s ease-in-out;
}

button {
  background-color: var(--color-text);
  padding: 1rem;
  border: none;
  cursor: pointer;
  border-radius: var(--common-border-radius);
  transition: transform 0.1s ease-in-out;

  .lucide {
    color: var(--color-background);
    stroke-width: 2;
  }

  &:hover {
    background-color: var(--color-highlight);
    .lucide {
      color: var(--color-text);
    }
  }
  &:active {
    transform: scale(0.85);
  }
}

h1 {
  font-family: Roboto, sans-serif;
  font-size: 4rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;

  &:hover {
    color: var(--color-highlight);
  }
  &:active {
    transform: scale(0.85);
  }
}
</style>