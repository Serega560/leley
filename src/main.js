import './assets/styles/main.scss'
import './assets/styles/reset.scss'
import './assets/styles/fonts.scss'
import 'swiper/css';
import 'swiper/css/autoplay';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

createApp(App)
    .use(router)
    .mount('#app')
