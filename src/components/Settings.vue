<template>
  <div>
    <ActivitySettings operations="vote,transfer,comment,reward"></ActivitySettings>
    <hr/>

    <PostSettings @default_number_changed="handleChange"></PostSettings>
  </div>
</template>

<script>
import ActivitySettings from './ActivitySettings'
import PostSettings from './PostSettings'

export default {
  // Name of this component
  name: 'Settings',
  components: {ActivitySettings, PostSettings},
  methods: {
    handleChange: function (number) {
      console.log('Number is changed to: ' + number)
    }
  }
}
</script>

<style scoped>
</style>
