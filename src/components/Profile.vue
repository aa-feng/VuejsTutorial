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
let steem = require('steem')

export default {
  name: 'Profile',
  data () {
    return {
      profile: '', // Save user's jsonMetadata to profile
      userdata: '' // User's metadata
    }
  },
  created () {
    let names = ['aafeng'] // Use a hardcoded username, will change it later
    let currentComponent = this // Store this of current component (Profile) to currentComponent
    steem.api.getAccounts(names, function (err, result) { // retrieve data from Steem
      if (err) {
        console.log(err.stack)
      }
      currentComponent.userdata = result[0] // save the first user's data to userdata property
      var jsonMetadata = JSON.parse(result[0].json_metadata) // convert user's json_metadata to JSON
      currentComponent.profile = jsonMetadata.profile // save user's json_metadata to user's profile property
    })
  },
  computed: {
    voting_power () {
      return parseFloat(this.userdata.voting_power) / 100 // return a user friendly format of voting power
    },
    reputation () {
      return steem.formatter.reputation(this.userdata.reputation) // return a user friendly format of reputation
    }
  }
}
</script>

<style scoped>
.profile_header {
  padding: 10px;
  background-size: auto 100%;
  background-repeat: no-repeat;
}
.profile_avatar {
  height: 30px;
  width: 30px;
}
</style>
