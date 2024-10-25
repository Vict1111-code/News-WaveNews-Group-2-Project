import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
    path: '/newsdetails/:uuid',
    name: 'newsdetails',
    component: () => import('../views/NewsDetailsView.vue')
    },
    {
      path: '/category/:categories',
      name: 'category',
      component:()=> import ( '../views/CategoryView.vue')
    },
  ]
})

export default router
