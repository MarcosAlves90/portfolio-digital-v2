import './assets/main.css'

import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import i18n from './i18n';
import router from './router';

const app = createApp(App)
const head = createHead()

app.use(head).use(i18n).use(router).mount('#app')

// Remova o loader após o Vue ser montado
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.style.display = 'none';
    }
  });