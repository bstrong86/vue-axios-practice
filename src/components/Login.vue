
<template>
  <div class="loginPage">
    <h2>Strong Workouts</h2>
    <form class="loginBox">
      <input type="text" v-model="username" placeholder="Username"/>
      <input type="password" v-model="password" placeholder="Password" />
      <!-- <div class="loginButtons"> -->
        <button @click="handleLogin">Login</button>
        <router-link to="/register" >Create a New Account</router-link>
      <!-- </div> -->
    </form>
    <footer>
      <About/>
    </footer>
  </div>
</template>

<script>
import axios from 'axios'
import store from '../store'
import About from './About'

export default {
  store,
  name: 'Login',
  components: {
    About
  },
  data: function() {
    return {
      username: '',
      checkUsername:'',
      password: '',
      checkPassword:'',
      workouts: [],
    }
  },

  methods: {    
    async handleLogin(){
      let user = {
        username: this.username,
        password: this.password}
      let res = await axios.post('/login', user )
      this.handleName(res.data.username)
      this.$router.push('profile')

    },
    async handleGetNames(){
      return axios.get('/api').then(response =>{
        this.users = response.data
      })
    },
     handleName(username){
       store.commit('updateUsername', username)
     }
  
  }
}
</script>

<style scoped>



html {
  width: 100%;
  height: 100%;
}

.loginPage {
  height: 100%;
  align-items: center;
  background: url("../assets/gymbackground.jpg");
  background-size: cover ; 
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed; 
}

.loginBox {
  background: grey;
  width: 50%;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: auto;
}

button {
  width: 50%;
  cursor: pointer;
}

footer {
  position: absolute;
  bottom: 0px;
  background: rgba(146, 146, 146, .7);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
