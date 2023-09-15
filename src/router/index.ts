import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import { useUserStore } from '@/pinia/user'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {title: 'home'}
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
