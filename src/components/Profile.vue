<template>
  <div>
    <NavBar />
    <div>Profile Page</div>
    <button v-if="!create" @click="create = !create">Create Workout</button>
    <button v-if="create" @click="create = !create">Close</button>
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
      create: true,
    }
  },  
}
</script>

<style scoped>

</style>
