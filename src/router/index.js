import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Home.vue'
import Kontakt from '../Kontakt.vue'
import Statut from '../Statut.vue'
import Darczyncy from '../Darczyncy.vue'
import Playground from '../playground.vue'
import Raport from '../Raport.vue'
import Wspomoz from '../Wspomoz.vue'
import SingleNews from '../SingleNews.vue'
import PageNotFound from '../pagenotfound.vue'


const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/playground', name: 'Playground', component: Playground},
    {path: '/kontakt', name: 'Kontakt', component: Kontakt},
    {path: '/Statut', name: 'Statut', component: Statut},
    {path: '/darczyncy', name: 'Darczyncy', component: Darczyncy},
    {path: '/raport', name: 'Raport', component: Raport},
    {path: '/wspomoz', name: 'wspomoz', component: Wspomoz},
    {path: '/news/:id', name: 'news', component: SingleNews},
    {path: '/:pathMatch(.*)*', component: PageNotFound}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
          return {
            el: to.hash,
            behavior: 'smooth',
          }
        }
        if (savedPosition) {
          return savedPosition
        } 
        else {
            return { top: 0 }
        }
        
        },
})

export default router