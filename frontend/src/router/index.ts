import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Creators from '../components/Creators.vue'
import FlipCard from '../components/FlipCard.vue'
import tictactoe from '../components/tictactoe.vue'
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
    path: '/tictactoe',
    name: 'tictactoe',
    component: tictactoe
  },
]

const router = new VueRouter({
  routes
})

export default router
