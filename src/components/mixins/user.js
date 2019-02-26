let steem = require('steem')

export default {
  name: 'User',
  data () {
    return {
      profile: '', // Save user's jsonMetadata to profile
      userdata: '' // User's metadata
    }
  },
  created () {
    let names = [this.username]

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
    },
    username () {
      const defaultUsername = 'aafeng' // default username
      if ((typeof this.$route.params !== 'undefined') && (typeof this.$route.params.username !== 'undefined') && this.$route.params.username.startsWith('@')) {
        return this.$route.params.username.substring(1, this.$route.params.username.length)
      } else {
        return defaultUsername
      }
    }
  }
}
