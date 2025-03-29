<script setup lang="ts">
import { Moon, Sun, Menu } from 'lucide-vue-next';
import { ref, onMounted, onUnmounted, watch, inject, nextTick } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const TEXTS: string[] = ["隠者", "巡礼者", "賢い", "勇者", "探求者", "賢者", "冒険者", "守護者"];
const currentText = ref<string>(TEXTS[0]);

const theme = inject('theme', ref('light'));
const changeTheme = inject('changeTheme') as () => void;
const navbarIsSmall = ref<boolean>(false);
const navbarHighlight = ref<boolean>(false);
const buttonsBoxVisible = ref<boolean>(false);

const NAVBAR_HEIGHT = { normal: '8rem', small: '5rem' };

const updateText = (): void => {
  const randomIndex: number = Math.floor(Math.random() * TEXTS.length);
  currentText.value = TEXTS[randomIndex];
};

const handleScroll = (): void => {
  navbarIsSmall.value = window.scrollY > 100;

  const navbar = document.getElementById('navbar');
  const buttonsBox = document.getElementById('buttons-box');
  const darkBgArticles = Array.from(document.querySelectorAll('article.dark-bg'));

  if (!navbar) return;

  const checkOverlap = (element: HTMLElement | null): boolean => {
    if (!element) return false;
    const elementBottom = element.getBoundingClientRect().bottom;
    return darkBgArticles.some(article => {
      const { top, bottom } = article.getBoundingClientRect();
      return elementBottom >= top && elementBottom <= bottom;
    });
  };

  const isNavbarHighlight = checkOverlap(navbar);
  const isButtonsBoxHighlight = buttonsBoxVisible.value ? checkOverlap(buttonsBox) : false;

  navbarHighlight.value = buttonsBoxVisible.value ? isButtonsBoxHighlight : isNavbarHighlight;
};

const toggleButtonsBox = (): void => {
  buttonsBoxVisible.value = !buttonsBoxVisible.value;
};

const toggleLanguage = (): void => {
  locale.value = locale.value === 'en' ? 'pt' : 'en';
};

const handleResize = (): void => {
  if (window.innerWidth > 950) {
    buttonsBoxVisible.value = false;
  }
};

onMounted((): void => {
  const savedTheme: string = localStorage.getItem('theme') || 'light';
  theme.value = savedTheme;
  document.documentElement.setAttribute('data-theme', savedTheme);

  setInterval(updateText, 2000);
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);
  handleResize();
});

watch(theme, (newTheme: string): void => {
  localStorage.setItem('theme', newTheme);
});

watch(buttonsBoxVisible, async (): Promise<void> => {
  await nextTick();
  handleScroll();
});

onUnmounted((): void => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <nav :class="{ small: navbarIsSmall, highlight: navbarHighlight, menuOpen: buttonsBoxVisible}" id="navbar">
    <h1 aria-live="polite">{{ currentText }}</h1>
    <button class="hamburguer" aria-label="Open menu" @click="toggleButtonsBox">
      <Menu />
    </button>
    <div class="buttons-box" id="buttons-box">
      <button @click="toggleLanguage" class="language">{{  locale === "en" ? "Português" : "English" }}</button>
      <button @click="changeTheme" :aria-label="`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`">
        <Moon v-if="theme === 'light'" aria-hidden="true"/>
        <Sun v-else aria-hidden="true"/>
      </button>
    </div>
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
    &.language {
      font-size: 1rem;
    }
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
    color: #1b1a1a;
    .lucide {
      color: #1b1a1a;
    }
    &:hover {
      background-color: #1b1a1a;
      color: #f2d6bd;
      .lucide {
        color: #f2d6bd;
      }
    }
  }
}

.buttons-box {
  display: flex;
  gap: 1rem;
}


button {
  background-color: var(--color-text);
  padding: 1rem;
  border: none;
  cursor: pointer;
  border-radius: var(--common-border-radius);
  transition: transform 0.1s ease-in-out, padding 0.2s ease-in-out, font-size 0.2s ease-in-out;

  .lucide {
    color: var(--color-background);
    stroke-width: 2;
  }

  &.language {
    font-family: Poppins, sans-serif;
    color: var(--color-background);
    font-size: 1.2rem;
  }

  &.hamburguer {
    display: none;
  }

  &:hover {
    background-color: var(--color-highlight);
    color: var(--color-text);
    .lucide {
      color: var(--color-text);
    }
  }
  &:active {
    transform: scale(0.85);
  }
  @media (max-width: 950px) {
    &.hamburguer {
      display: flex;
    }
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

@media (max-width: 950px) {
  .buttons-box {
    padding: 2rem;
    width: 100%;
    position: fixed;
    top: 8rem;
    left: 0;
    transition: top 0.2s ease-in-out, height 0.2s ease-in-out, padding 0.2s ease-in-out, background-color 0.2s ease-in-out;
    background-color: rgba(var(--color-background-rgb), 0.7);
    backdrop-filter: blur(5px);
    border-bottom: 2px solid var(--color-text);
    .language {
      width: 100%;
    }
  }
  nav.highlight {
    .buttons-box {
      border-color: #f2d6bd;
      background-color: rgba(var(--color-section-background-rgb), 0.7);
    }
  }
  nav.small{
    .buttons-box {
      top: 5rem;
    }
  }
  nav:not(.menuOpen) .buttons-box {
    display: none;
  }
}
</style>