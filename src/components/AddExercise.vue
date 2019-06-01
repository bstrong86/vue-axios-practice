<template>
  <div>
    <div>add exercise</div>
    <input type="text" placeholder="Exercise Name" />
    <div class="setsBox">
      Add sets
      <input placeholder="0" type="number" min=0 v-model="sets"/>
      <div> Optional 
        <input placeholder="Muscle Group" type="text" v-model="muscleGroup"/>
        <textarea placeholder="Exercise Description 250 character max" type="text" maxlength="250" v-model="description"/>
      </div>
      <button @click="saveExercise">Save Exercise</button>
    </div>
  </div>
</template>

<script>

import store from '../store'

export default {
  name: 'AddExercise',
  data: function(){
    return {
      exerciseName: '',
      sets: 0,
      muscleGroup:'',
      description: ''
    }
  },

  methods: {
    async saveExercise(){
      const newExercise = {
        exercise_name: this.exerciseName.toUpperCase(),
        sets: this.sets,
        muscleGroup: this.muscleGroup,
        description: this.description
      }

    }
  }
}
</script>

<style scoped>

</style>

