<template>
  <div  class="profile_header" v-bind:style="{backgroundImage: 'url(' + profile.cover_image + ')'}">
    <img class="profile_avatar" v-bind:src="profile.profile_image"/> {{profile.name}} <br/>
    <div>About: {{ profile.about }}</div>
    <div>Location: {{ profile.location }}</div>
    <div>VP: {{ voting_power }}</div>
    <div>Reputation: {{ reputation }}</div>
  </div>
</template>

<script>
import User from './mixins/user'

export default {
  name: 'Profile',
  mixins: [User] // use user mixin
}
</script>

<style scoped>
.profile_header {
  padding: 10px;
  background-size: 100%;
}
.profile_avatar {
  height: 30px;
  width: 30px;
}
</style>
