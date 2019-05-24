<template>
  <div>
    <h3 @click="handleShow">About</h3>
    <section>
      <p class="paragraph" v-if="showAbout">
        This site was created to assist people in creating and tracking workouts as well as their progress.
      <button @click="handleShow">Close</button>
      </p>   
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
  data: function(){
    return {
      showAbout: false
    }
  },
  methods: {
    handleShow() {
      this.showAbout = !this.showAbout
    }
  }
}
</script>

<style scoped>
  .paragraph{
    /* background:red  */
  }

  h3 {
    text-decoration: underline;
    cursor: pointer;
    margin-right: 5px;
  }

  button {
    background: none;
    border: none;
    text-decoration: underline;
    cursor: pointer;
  }
</style>
