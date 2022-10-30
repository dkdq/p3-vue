import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFoundView from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    params: true,
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
    beforeEnter(to, from, next) {
      let currentUser = JSON.parse(window.localStorage.currentUser)
      if(currentUser) {
        next()
      } else {
        next('/')
      }
    }
  },
  {
    path: '/userlist',
    name: 'userlist',
    component: () => import(/* webpackChunkName: "userlist" */ '@/components/UserList.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/components/Login.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import(/* webpackChunkName: "registration" */ '@/components/Registration.vue')
  },
  {
    path: '/product/add',
    name: 'add',
    component: () => import(/* webpackChunkName: "add" */ '@/components/ProductFormAdd.vue')
  },
  {
    path: '/product/:id',
    name: 'product',
    props: true,
    component: () => import(/* webpackChunkName: "product" */ '@/views/Product.vue')
  },
  {
    path: '/product/edit/:id',
    name: 'edit',
    params: true,
    component: () => import(/* webpackChunkName: "edit" */ '@/components/ProductFormEdit.vue')
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
