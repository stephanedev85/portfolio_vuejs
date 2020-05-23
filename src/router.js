import Vue from 'vue'
import VueRouter from 'vue-router'
import Cv from './portfolio/Cv.vue'
import Contact from './portfolio/Contact.vue'
import Projet from './portfolio/Projet.vue'

Vue.use(VueRouter)

const routes = [
   {
        path: '/',
        component: Cv

   },
   {
        path: '/Projet',
        component: Projet

   },
   {
        path: '/Contact',
        component: Contact

   }

]

export default new VueRouter({mode: 'history', routes})