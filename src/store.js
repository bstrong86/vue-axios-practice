import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    profile_pic: '',
    weight_lifted: '',
    workouts_finished:''

  },
  plugins: [
    createPersistedState()
  ],

  mutations: {
    updateUsername (state, name) {
      state.username = name   
    },
    clearUsername (state) {
      state.username = ''
    }

  }
})