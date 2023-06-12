import { createStore } from 'vuex'

export default createStore({
  state: {
    users:[],
    loading: false,
    isAuth: false
  },
  getters: {
    getAllUser(state) {
      return state.users
    },
    getLoadingStatus(state) {
      return state.loading
    },
    getAuthStatus(state) {
      return state.isAuth
    }
  },
  mutations: {
    addUser(state, payload) {
      console.log('payload',payload)
        state.users.push(payload)
    },
    setLoadingState(state, payload) {
      state.loading = payload.status
    },
    setAuth(state, payload) {
      state.isAuth = payload.isAuth
    }
  },
  actions: {
    signUp(context,payload){
      context.commit("addUser", payload)
    },
    login(context) {
      context.commit("setAuth", { isAuth: true })
    },
    logout(context) {
      context.commit("setAuth", { isAuth: false })
    },
  }
})
