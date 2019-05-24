<template>
  <div>
    <NavBar/>
    <h2>Register</h2>
    <input placeholder="Username" v-model="username"/>
    <input type="password" placeholder="Password" v-model="password"/>
    <input type="password" placeholder="Password" v-model="checkPassword"/>
    <button :disabled="!passwordMatch" @click="handleRegister">Register Account</button>
  </div>
</template>

<script>
import axios from 'axios'
import NavBar from './NavBar'

export default {
  name: 'Register',
  components: {
    NavBar
  },
  data: function() {
    return {
      username: '',
      password:'',
      checkPassword:'',
      passwordMatch:false
    }
  },
  
  methods: {
    async handleRegister(){
      let user = {
        username: this.username,
        password: this.password
      }
      try {
        console.log(user)
        let res = await axios.post('/register', user)
        console.log(res.data, 99)
      } catch (err) {
          alert('username taken')
      }
    },
    handlePasswordCheck(){
          if(this.password === this.checkPassword){
            if(this.password.length>0){
              if(this.checkPassword.length){
              this.passwordMatch = true
            }}
          } else{this.passwordMatch = false}
        }      
  },
  watch: {
        checkPassword: function() {this.handlePasswordCheck()},
        password: function() {this.handlePasswordCheck()}
      }


}
</script>
<style scoped>
h2 {
  margin: 50px;
  background: grey;
}
</style>
