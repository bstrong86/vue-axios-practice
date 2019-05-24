<template>
  <div class="navbar">
    <div>{{username}}</div>
    <button @click="handleLogout">Logout</button>
    <div>workouts finished</div>
    <div>weight lifted</div>
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
      store.commit('clearUsername')
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
