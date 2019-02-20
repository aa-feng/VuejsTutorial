<template>
  <div>
    <Profile></Profile>

    Comments
  </div>
</template>

<script>
import Profile from './Profile'
export default {
  name: 'Comments',
  components: {
    Profile // Profile component is used in this component
  }
}
</script>

<style scoped>
</style>
