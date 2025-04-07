import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n';

createApp(App).use(i18n).mount('#app')

// Remova o loader após o Vue ser montado
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.style.display = 'none';
    }
  });