<template>
  <div  class="profile_header" v-bind:style="{backgroundImage: 'url(' + profile.cover_image + ')'}">
      <img class="profile_avatar" v-bind:src="profile.profile_image"/> {{profile.name}} <br/>
      <div>About: {{ profile.about }}</div>
      <div>Location: {{ profile.location }}</div>
  </div>
</template>

<script>
let steem = require('steem')

export default {
  name: 'Profile',
  data () {
    return {
      profile: ''
    }
  },
  created: function () {
    let names = ['aafeng']
    let currentComponent = this
    steem.api.getAccounts(names, function (err, result) {
      if (err) {
        console.log(err.stack)
      }
      var jsonMetadata = JSON.parse(result[0].json_metadata)
      currentComponent.profile = jsonMetadata.profile
    })
  }
}
</script>

<style scoped>
.profile_header {
  padding: 10px;
}
.profile_avatar {
  height: 30px;
  width: 30px;
}
</style>
