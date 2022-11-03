import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFoundView from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import(/* webpackChunkName: "registration" */ '@/views/Registration.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    params: true,
    component: () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue'),
    // beforeEnter(to, from, next) {
    //   let currentUser = JSON.parse(window.localStorage.getItem('currentUser'))
    //   if(currentUser && currentUser.token) {
    //     next()
    //   } else {
    //     next('/')
    //   }
    // },
  },
  {
    path: '/product/add',
    name: 'add',
    component: () => import(/* webpackChunkName: "add" */ '@/views/ProductFormAdd.vue')
  },
  {
    path: '/product/edit/:id',
    name: 'edit',
    params: true,
    component: () => import(/* webpackChunkName: "edit" */ '@/views/ProductFormEdit.vue')
  },
  {
    path: '/product/:id',
    name: 'product',
    props: true,
    component: () => import(/* webpackChunkName: "product" */ '@/views/Product.vue')
  },
  {
    path: '/profile/edit/:id',
    name: 'profile',
    params: true,
    component: () => import(/* webpackChunkName: "profile" */ '@/views/Profile.vue')
  },
  {
    path: '*',
    component: NotFoundView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
