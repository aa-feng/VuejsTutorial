<template>
  <div id="app">
    <Profile></Profile>
    <b-nav tabs>
      <b-nav-item active><router-link to="/">Posts</router-link></b-nav-item>
      <b-nav-item><router-link to="/comments">Comments</router-link></b-nav-item>
      <b-nav-item><router-link to="/activities">Activities</router-link></b-nav-item>
    </b-nav>
    <router-view/>
  </div>
</template>

<script>
import Profile from './components/Profile'

export default {
  name: 'App', // The main component's name
  components: {
    Profile // Profile component is used in this component
  }
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
