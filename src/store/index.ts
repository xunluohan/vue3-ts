import { createStore } from 'vuex'

export default createStore({
  state: {
    userRouter: []
  },
  getters: {
  },
  mutations: {
    USER_ROUTER(state, data) {
      state.userRouter = data
    }
  },
  actions: {
    userRouter({ commit }, data) {
      sessionStorage.setItem('user_router', JSON.parse(data))
      commit('USER_ROUTER', data)
    }
  },
  modules: {
  }
})
