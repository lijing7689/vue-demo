import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/memorandum',
    name:'memorandum',
    component:() => import(/* webpackChunkName: "memorandum" */ '../views/MemorandumView.vue')
  },
  {
    path:'/shoppingCart',
    name:'shoppingCart',
    component:() => import(/* webpackChunkName: "memorandum" */ '../views/ShoppingCartView/ShoppingCartView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
