<template>
  <div>
    <h4>Post Settings</h4>
    <label for="number">Default number of posts/comments</label>
    <input @input="changed" name="number">
  </div>
</template>

<script>
export default {
  // Name of this component
  name: 'PostSettings',
  methods: {
    // changed event handler will send the new value to Vuex store
    changed: function (event) {
      // store data to Vuex
      this.$store.commit('change', event.target.value)

      // Below is used to demonstrate how to pass data from child to parent
      // this.$emit('default_number_changed', event.target.value)
    }
  }
}
</script>

<style scoped>
</style>
