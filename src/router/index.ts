import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useUserStore } from '@/pinia/user'

const basicRouters: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView,
    meta: {title: 'home'}
  }
]
const asyncRouters: Array<RouteRecordRaw> = [
  {
    path: '/form',
    name: 'From',
    component: () => import('@/views/e-form/index.vue'),
    meta: {title: 'form'}
  },
  {
    path: '/table',
    name: 'Table',
    component: () => import('@/views/e-table/index.vue'),
    meta: {title: 'table'}
  }
]
// store.userRouter(routes)
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: basicRouters
})
router.beforeEach(async (to, from) => {
  const store = useUserStore()
  if (store.userRouter.length > 0) {
    return
  } else {
    const allRouters = basicRouters.concat(asyncRouters)
      allRouters.forEach(item => {
      router.addRoute(item)
    })
    // @ts-ignore
    store.userRouter = allRouters
    return to.path
  }
})

export default router
