import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Home.vue'
import Kontakt from '../Kontakt.vue'
import Playground from '../playground.vue'
import PageNotFound from '../pagenotfound.vue'

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/playground', name: 'Playground', component: Playground},
    {path: '/kontakt', name: 'Kontakt', component: Kontakt},
    {path: '/:pathMatch(.*)*', component: PageNotFound}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router