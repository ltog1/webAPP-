import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home'),
      // children: [{
      //   path: 'product/:id',
      //   name: 'homeProduct',
      //   component: () => import(/* webpackChunkName: "homeProduct" */ '@/views/product'),
      // }]
  },
  {
    path: '/personal',
    name: 'personal',
    component: () => import(/* webpackChunkName: "personal" */ '@/views/personal')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import(/* webpackChunkName: "order" */ '@/views/order')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import(/* webpackChunkName: "product" */ '@/views/product')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
