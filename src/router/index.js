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
      path: '/crear-producto',
      name: 'crear-producto',
      component: () => import('../views/CreateProductoView.vue')
    
    }
    
  ]
})

export default router
