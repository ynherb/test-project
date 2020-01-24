import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import userGuard from './userGuard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/News.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/profile.vue'),
    beforeEnter: userGuard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
