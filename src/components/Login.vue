
<template>
  <div>
    <h2 v-if="!register">Login</h2>
    <h2 v-if="register">Create New Account</h2>
    <input type="text" v-model="username" placeholder="Username"/>
    <input v-if="register" type="text" v-model="username" placeholder="Username"/>
    <input type="password" v-model="password" placeholder="Password" />
    <input v-if="register" type="password" v-model="password" placeholder="Password" />
    <button @click="handleLogin">Login to your account</button>
    <button >Register new account</button>
    <button @click="handleRegister">Or Create a New Account</button>
    <!-- <div>{{workouts}}</div> -->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data: function() {
    return {
      username: '',
      checkUsername:'',
      password: '',
      checkPassword:'',
      register: false,
      workouts: []
    }
  },

  // async created(){
  //   console.log('created')
  //   await axios.get('/getRecentWorkouts').then(response =>{
  //     this.workouts = response.data
  //     console.log(response.data)
  //   })
  // },

  methods: {    
    async handleLogin(){
      let user = {
        username: this.username,
        password: this.password}

      await axios.post('/login', user )
    },
    async handleGetNames(){
      return axios.get('/api').then(response =>{
        this.users = response.data
      })
    },
     handleRegister(){
       console.log(this.register)
       this.register = !this.register
       console.log(this.register)
     },
  
  }
}
</script>