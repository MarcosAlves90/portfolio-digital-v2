<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import MainPage from "@/components/MainPage.vue";
import Footer from "@/components/Footer.vue";
import {provide, ref} from "vue";

const theme = ref<string>('light');
provide('theme', theme);

const changeTheme = (): void => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme.value);
};

provide('changeTheme', changeTheme);

const pageIsOpen = ref<boolean>(false);
provide('pageIsOpen', pageIsOpen);

const changePageIsOpen = (): void => {
  pageIsOpen.value = !pageIsOpen.value;
};

provide('changePageIsOpen', changePageIsOpen);
</script>

<template>
  <NavBar/>
  <MainPage/>
  <Footer/>
</template>

<style scoped>

</style>