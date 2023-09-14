import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import { useUserStore } from '@/pinia/user'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {title: 'home'}
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {title: 'about'}

  },
  {
    path: '/form',
    name: 'From',
    component: () => import('@/views/e-form/index.vue'),
    meta: {title: 'form'}
  }
]
// const store = useUserStore()
// store.userRouter(routes)
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
