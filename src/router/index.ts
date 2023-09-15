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
    name: 'Home',
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
// router.beforeEach(async (to, from, next) => {
//     if (!sessionStorage.getItem('user_routers')) {
//         debugger
//         await store.dispatch('userRouters')
//     }
//     console.log(router)
//     // const hasUserInfo = !! Object.keys(store.state.userInfo).length
//     // if (hasUserInfo) {
//     //     try{
//     //         await store.dispatch('userInfo')
//     //         next({ ...to, replace: true })
//     //     } catch(err){
//     //         // Message.error(err || 'Has Error')
//     //         next(`/login?redirect=${to.path}`)
//     //     }
//     // }else {
//     //     if (whiteList.indexOf(to.path) !== -1) {
//     //     // In the free login whitelist, go directly
//     //         next()
//     //     }else {
//     //         next()
//     //     }
//     // }
// })

export default router
