<template>
  <div id="app">
    <nav>
      <router-link to="/">Posts</router-link>
      <router-link to="/comments">Comments</router-link>
      <router-link to="/activities">Activities</router-link>
    </nav>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App' // The main component's name
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>

<style lang="scss">

</style>
