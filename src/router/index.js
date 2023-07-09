import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Player from '../views/Player.vue'
import About from '../views/About.vue'
import DMCA from '../views/DMCA.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/w/:season/:episode',
    name: 'watch',
    component: Player
  },

  {
    path: '/about',
    name: 'about',
    component: About
  },

  {
    path: '/dmca',
    name: 'dmca',
    component: DMCA,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
