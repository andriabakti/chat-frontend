import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/auth/login/Login.vue'
import Register from '../views/auth/register/Register.vue'
import Forgot from '../views/auth/forgot/Forgot.vue'
import Main from '../views/main/index.vue'
import Chat from '../views/main/chat/Chat.vue'
import Profile from '../views/main/profile/Profile.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresVisitor: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { requiresVisitor: true }
  },
  {
    path: '/forgot',
    name: 'Forgot',
    component: Forgot,
    meta: { requiresVisitor: true }
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'profile',
        name: 'Profile',
        component: Profile
      },
      {
        path: '/',
        name: 'Chat',
        component: Chat
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLogin) {
      next({
        name: 'Login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        name: 'Chat'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
