<template>
  <div>
    Activities

    **{{ username }}**
  </div>
</template>

<script>
import User from './mixins/user' // use user mixin in Posts component

export default {
  name: 'Activities',
  mixins: [User]
}
</script>

<style scoped>
</style>
