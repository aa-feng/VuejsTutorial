<template>
  <div>
    <Profile></Profile>

    Posts
  </div>
</template>

<script>
import Profile from './Profile'
export default {
  name: 'Posts',
  components: {
    Profile // Profile component is used in this component
  }
}
</script>

<style scoped>
</style>
