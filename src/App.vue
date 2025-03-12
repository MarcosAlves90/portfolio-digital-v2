<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import MainPage from "@/components/MainPage.vue";
import {provide, ref} from "vue";

const theme = ref<string>('light');
provide('theme', theme);

const changeTheme = (): void => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme.value);
};

provide('changeTheme', changeTheme);
</script>

<template>
  <NavBar/>
  <MainPage/>
</template>

<style scoped>

</style>