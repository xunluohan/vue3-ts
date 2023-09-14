import { defineStore } from 'pinia'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const useUserStore = defineStore('user', {
  state: () => {
    return { 
      userInfo: {},
      userRouter: []
    }
  },
  // 也可以这样定义
  // state: () => ({ count: 0 })
  actions: {
    
    userRouter(data: Array<RouteRecordRaw>) {
      // @ts-ignore
      this.userRouter = data
    }
  },
})