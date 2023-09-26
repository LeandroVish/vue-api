import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../view/Home.vue')
  },
  {
    path: '/filmes',
    name: 'Movies',
    component: () => import('../view/MoviesView.vue')
  },
  {
    path: '/tv',
    name: 'TV',
    component: () => import('../view/TvView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router