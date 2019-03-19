<template>
  <div id="app">
    <Profile></Profile>
    <b-nav tabs>
      <b-nav-item :active="tabSelected === 1" v-on:click="tabSelected=1"><router-link :to="'/@'+username">Posts</router-link></b-nav-item>
      <b-nav-item :active="tabSelected === 2" v-on:click="tabSelected=2"><router-link :to="'/@'+username+'/comments'">Comments</router-link></b-nav-item>
      <b-nav-item :active="tabSelected === 3" v-on:click="tabSelected=3"><router-link :to="'/@'+username+'/activities'">Activities</router-link></b-nav-item>
      <b-nav-item :active="tabSelected === 4" v-on:click="tabSelected=4"><router-link :to="'/@'+username+'/settings'">Settings</router-link></b-nav-item>
      <b-nav-item :active="tabSelected === 5" v-on:click="tabSelected=5"><router-link :to="'/system/steem_price'">Price</router-link></b-nav-item>
    </b-nav>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import Profile from './components/Profile'
import User from './components/mixins/user' // use user mixin in Posts component

export default {
  name: 'App', // The main component's name
  mixins: [User],
  components: {
    Profile // Profile component is used in this component
  },
  data: function () {
    return {
      tabSelected: 1
    }
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
