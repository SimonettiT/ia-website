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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/ia-evolution',
      name: 'timeline',
      component: () => import('../views/TimelineView.vue')
    },
    {
      path: '/blog/:slug',
      component: () => import('../views/BlogPostView.vue')
    },
    {
      path: '/blog/ia-evolution',
      redirect: { name: 'timeline' }
    },
    {
      path: '/generate/images',
      name: 'images',
      component: () => import('../views/ImagesView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: HomeView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { 
      el: '#main',
      behavior: 'smooth',
      top: 0,
    }
  },
})

export default router
