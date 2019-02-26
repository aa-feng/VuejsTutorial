<template>
  <div>
    Comments

    **{{ username }}**
  </div>
</template>

<script>
import User from './mixins/user' // use user mixin in Posts component

export default {
  name: 'Comments',
  mixins: [User]
}
</script>

<style scoped>
</style>
