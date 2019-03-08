<template>
  <div>
    Default number of posts/comments: **{{ $store.getters.default_number_of_posts }}**
  </div>
</template>

<script>
// import User from './mixins/user' // use user mixin in Posts component

export default {
  name: 'Comments'
  // mixins: [User]
}
</script>

<style scoped>
</style>
