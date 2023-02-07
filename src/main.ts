import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './style.css';
import App from './App.vue';
import { i18n } from './locales';

createApp(App).use(ElementPlus).use(i18n).mount('#app');
