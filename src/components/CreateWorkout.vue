<template>
  <div>
    <h2>Create Workout</h2>
    <form>
      <input>Workout Name </inpu>
      <input>muscle group</input>
      <button>Create</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CreateWorkout',
  data: function() {
    return {
      workoutName: ''
    }
  }
}
</script>
