<template>
  <div>
    <NavBar />
    <div>Profile Page</div>
    <div v-if="create">
      <CreateWorkout/>
    </div>
  </div>
</template>

<script>

import NavBar from './NavBar'
// import axios from 'axios'
import CreateWorkout from './CreateWorkout'

export default {
  name: 'Profile',
  components: {
    NavBar,
    CreateWorkout
  },
  data: function(){
    return {
      create: false
    }
  }
  
}
</script>

<style scoped>

</style>
