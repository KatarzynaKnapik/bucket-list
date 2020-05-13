import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from '../firebase/init'

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
    component: () => import('../views/List.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/addToList',
    name: 'AddToList',
    component: () => import('../views/AddToList.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/edit/:todo_id',
    name: 'Edit',
    component: () => import('../views/Edit.vue'),
    meta: {
      requiresAuth: true
    }
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

router.beforeEach((to,from,next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!firebase.auth().currentUser){
      next({
        path: 'login',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else {
      next()
  }
 
})


export default router
