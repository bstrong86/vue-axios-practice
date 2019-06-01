import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    profile_pic: '',
    weight_lifted: '',
    workouts_finished:'',
    userId:0

  },
  plugins: [
    createPersistedState()
  ],

  mutations: {
    updateUsername (state, name) {
      state.username = name   
    },
    clearUser (state) {
      state.username = '',
      state.userId = 0
    },
    updateUserId (state, id) {
      state.userId = id
    }

  }
})