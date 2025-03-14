<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next';
import { ref, onMounted, watch, inject } from 'vue';

const TEXTS: string[] = ["隠者", "巡礼者", "賢い", "勇者", "探求者", "賢者", "冒険者", "守護者"];
const currentText = ref<string>(TEXTS[0]);

const theme = inject('theme', ref('light'));
const changeTheme = inject('changeTheme') as () => void;
const navbarIsSmall = ref<boolean>(false);
const navbarHighlight = ref<boolean>(false);

const NAVBAR_HEIGHT = { normal: '8rem', small: '5rem' };

const updateText = (): void => {
  const randomIndex: number = Math.floor(Math.random() * TEXTS.length);
  currentText.value = TEXTS[randomIndex];
};

const handleScroll = (): void => {
  navbarIsSmall.value = window.scrollY > 100;
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const navbarBottom = navbar.getBoundingClientRect().bottom;
  const darkBgArticles = document.querySelectorAll('article.dark-bg');

  navbarHighlight.value = Array.from(darkBgArticles).some(article => {
    const { top, height } = article.getBoundingClientRect();
    return navbarBottom >= top && navbarBottom <= top + height;
  });
};

onMounted((): void => {
  const savedTheme: string = localStorage.getItem('theme') || 'light';
  theme.value = savedTheme;
  document.documentElement.setAttribute('data-theme', savedTheme);

  setInterval(updateText, 2000);
  window.addEventListener('scroll', handleScroll);
});

watch(theme, (newTheme: string): void => {
  localStorage.setItem('theme', newTheme);
});
</script>

<template>
  <nav :class="{ small: navbarIsSmall, highlight: navbarHighlight }" id="navbar">
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
  transition: background-color 0.2s ease-in-out, height 0.2s ease-in-out;
}

nav.small {
  height: 5rem;
  button {
    padding: 0.7rem;
  }
  h1 {
    font-size: 3rem;
  }
}

nav.highlight {
  background-color: var(--color-section-background);
  color: #f2d6bd;
  border-color: #f2d6bd;
  button {
    background-color: #f2d6bd;
    .lucide {
      color: #1b1a1a;
    }
    &:hover {
      background-color: #1b1a1a;
      .lucide {
        color: #f2d6bd;
      }
    }
  }
}

button {
  background-color: var(--color-text);
  padding: 1rem;
  border: none;
  cursor: pointer;
  border-radius: var(--common-border-radius);
  transition: transform 0.1s ease-in-out, padding 0.2s ease-in-out;

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
  transition: transform 0.1s ease-in-out, font-size 0.2s ease-in-out;

  &:hover {
    color: var(--color-highlight);
  }
  &:active {
    transform: scale(0.85);
  }
}
</style>