import Vue from 'vue'
import VueRouter from 'vue-router'
import Cv from './portfolio/Cv.vue'
import Contact from './portfolio/Contact.vue'
import Commentaires from './portfolio/Commentaires.vue'

Vue.use(VueRouter)

const routes = [
   {
        path: '/',
        component: Cv

   },
   {
        path: '/Commentaires',
        component: Commentaires

   },
   {
        path: '/Contact',
        component: Contact

   }

]

export default new VueRouter({mode: 'history', routes})