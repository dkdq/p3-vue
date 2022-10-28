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
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue')
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
