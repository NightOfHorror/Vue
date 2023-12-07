import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import MainMenu from '../components/MainMenu.vue'
import FlipCard from '../components/FlipCard.vue'
import Bomberman from '../components/Bomberman.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: MainMenu
  },
  {
    path: '/play',
    name: 'Play',
    component: FlipCard
  },
  {
    path: '/bomberman',
    name: 'bomberman',
    component: Bomberman
  },
]

const router = new VueRouter({
  routes
})

export default router
