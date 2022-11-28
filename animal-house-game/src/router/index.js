import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contatti',
    name: 'contatti',
    component: () => import(/* webpackChunkName: "contatti" */ '../views/ContattiView.vue')
  },
  {
    path: '/newhome',
    name: 'newhome',
    component: () => import(/* webpackChunkName: "newhome" */ '../views/NewHome.vue')
  },
  {
    path: '/prove',
    name: 'prove',
    component: () => import(/* webpackChunkName: "prove" */ '../views/ProveView.vue')
  },
  {
    path: '/mobile',
    name: 'mobile',
    component: () => import(/* webpackChunkName: "mobile" */ '../views/mobileView.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import(/* webpackChunkName: "product" */ '../views/ProductView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
