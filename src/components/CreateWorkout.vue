<template>
  <div>
    <h2>Create Workout</h2>
    <form>
      <input type="text" v-model="workoutName" placeholder="Workout Name"/>
      <button @click="createWorkout">Create</button>
      <button v-if="!addExercise" @click="addExercise = !addExercise">Add Excercises</button>
      <button v-if="addExercise" @click="addExercise = !addExercise">Close</button>
    </form>
    <div class="addExerciseBox">
      <AddExercise />
    </div>
    <ul>
      <li v-for="exercise in exercises" v-bind:key="exercise.exerciseName">
        <AddExercise/>
      </li>
    </ul>
  </div>
</template>

<script>
import AddExercise from './AddExercise'
// const mappedExercises = this.exercises.map((exercise) => {

// })
export default {
  props: [workoutName],
  components: {
    AddExercise
  },
  name: 'CreateWorkout',
  data: function() {
    return {
      workoutName: '',
      addExercise: true,
      exercises: []
    }
  },

  // render(h) {
  //   return h('ul', this.exercises.map(exercise => h('li', exercise)))
  // },
  methods: {
    async createWorkout(){
     let newWorkout =this.workoutName

    }
  }
}
</script>
