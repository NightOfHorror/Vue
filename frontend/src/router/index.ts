import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Creators from '../components/Creators.vue'
import FlipCard from '../components/FlipCard.vue'
import Bomberman from '../components/Bomberman.vue'
import MainMenu from '../components/MainMenu.vue'
import HomeView from '../views/HomeView.vue'; 

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'MainMenu',
    component: MainMenu,
  },
  {
    path: '/creators',
    name: 'creators',
    component: Creators
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
