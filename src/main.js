import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
/* import the fontawesome core */
import { library } from '../node_modules/@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '../node_modules/@fortawesome/vue-fontawesome'

/* import specific icons */
import { faLocationDot } from '../node_modules/@fortawesome/free-solid-svg-icons'
import { faPhone } from '../node_modules/@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '../node_modules/@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '../node_modules/@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faLocationDot)
library.add(faPhone)
library.add(faEnvelope)
library.add(faArrowDown)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.use(createPinia())
.mount('#app')
