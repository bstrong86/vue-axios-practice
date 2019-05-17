<template>
  <div>
    <h2>Register</h2>
    <input placeholder="Username" v-model="username"/>
    <input type="password" placeholder="Password" v-model="password"/>
    <input type="password" placeholder="Password" v-model="checkPassword"/>
    <!-- <h2 v-if="!passwordMatch">password doesn't match</h2> -->
    <button :disabled="!passwordMatch">Register Account</button>
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
    }      
  },
  watch: {
        checkPassword: function(val) {
          console.log(this.checkPassword)
          this.password === this.checkPassword && this.checkPassword.length > 0 ? this.passwordMatch = true : this.passwordMatch = false
          console.log(this.passwordMatch)
        }
      }


}
</script>
<style scoped>
h2 {
  margin: 50px;
  background: grey;
}
</style>
