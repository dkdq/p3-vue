import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import(/* webpackChunkName: "products" */ '../views/ProductView.vue')
  },
  {
    path: '/add',
    name: 'add',
    component: () => import(/* webpackChunkName: "add" */ '@/components/ProductAdd.vue')
  },
  {
    path: '/product/:id',
    name: 'product',
    props: true,
    component: () => import(/* webpackChunkName: "product" */ '@/components/Product.vue')
  },
  {
    path: '/product/edit',
    name: 'edit',
    component: () => import(/* webpackChunkName: "edit" */ '@/components/ProductEdit.vue')
  },
  {
    path: '/contacts/:id',
    name: 'contacts',
    params: true,
    component: () => import(/* webpackChunkName: "contacts" */ '../views/ContactsView.vue')
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
