import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import VueScrollProgress from "vue-scroll-progress"


createApp(App)
.use(VueScrollProgress)
.use(router)
.mount('#app')
