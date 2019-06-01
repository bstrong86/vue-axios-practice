<template>
  <div class="navbar">
    <div>{{username}}</div>
    <div>workouts finished</div>
    <div>weight lifted</div>
    <button @click="handleLogout">Logout</button>
  </div>
</template>


<script>
import store from '../store'
import axios from 'axios'

export default {
  name: 'NavBar',
  data: function() {
    return {
      username: store.state.username
    }
  },
  methods: {
    async handleLogout(){
      await axios.post('logout')
      store.commit('clearUser')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  .navbar {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>
