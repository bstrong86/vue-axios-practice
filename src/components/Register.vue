<template>
  <div>
    <h2>Register</h2>
    <input placeholder="Username" v-model="username"/>
    <input type="password" placeholder="Password"/>
    <input type="password" placeholder="Password" v-on:input="handleInputs"/>
    <button @click="showState">Register Account</button>
    <p>{{this.username}}</p>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'Register',
  data: function() {
    return {
      username: '',
      password:'',
      checkPassword:''
    }
  },
  
  methods: {
    showState(){
      console.log(this.username)
    }
  }

}
</script>
