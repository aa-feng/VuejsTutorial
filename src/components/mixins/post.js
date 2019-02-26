export default {
  name: 'Post',

  methods: {
    // return pending payout or paid awards value
    payout (post) {
      if (post.pending_payout_value !== '0.000 SBD') { // If pending payout
        return post.pending_payout_value.replace(' SBD', '')
      } else { // if past payout, use total_payout_value
        return post.total_payout_value.replace(' SBD', '')
      }
    },
    firstImage (post) { // return first image URL from page content
      const regex = /(https?:\/\/.*\.(?:png|jpg|gif))/g // only check jpg/png/gif for now
      let img = regex.exec(post.body)
      if (img instanceof Array) {
        return img[0] // return first image
      }
      return ''
    }
  }
}
