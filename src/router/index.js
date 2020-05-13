import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bucket-list',
    name: 'List',
    component: () => import('../views/List.vue')
  },
  {
    path: '/addToList',
    name: 'AddToList',
    component: () => import('../views/AddToList.vue')
  },
  {
    path: '/inspire',
    name: 'Inspire',
    component: () => import('../views/Inspire.vue')
  },
  {
    path: '/edit/:todo_id',
    name: 'Edit',
    component: () => import('../views/Edit.vue')
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/login',
    name: 'LogIn',
    component: () => import('../views/LogIn.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
