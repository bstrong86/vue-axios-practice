
<template>
  <div>
    <h2>Login</h2>
    <input type="text" v-model="username" placeholder="Username"/>
    <input type="password" v-model="password" placeholder="Password" />
    <button @click="handleSubmit">Submit</button>
    <button @click="handleGetNames">get names</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data: function() {
    return {
      username: '',
      password: '',
      users: []
    }
  },
  methods: {    
    async handleSubmit(){
      console.log('button')
      let res = await axios.post('/api', this.username)
      console.log(res)
    },
    async handleGetNames(){
     return axios.get('/api').then(response =>{
        this.users = response.data
      })
      console.log(response.data)
    }
  }
}
</script>