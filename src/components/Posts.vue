<template>
  <div class="post_container">
    <div class="row post" v-for="post in posts" :key="post.post_id">
      <div class="row post_header">
        <div class="col-sm-12">
          {{username}}({{reputation}}) Category: {{ post.category }}
          Post time: {{ post.created }}
        </div>
      </div>

      <div class="row post_content">
        <div class="col-sm-2 col-xs-12 post_image">
          <img class="post_thumbnail" v-bind:src="firstImage(post)"/>
        </div>
        <div  class="col-sm-10 col-xs-12 post_image">
          <a v-bind:target="'_blank'" v-bind:href="'https://steemit.com'+post.url">{{ post.title }}</a><br/>

          Payout: ${{ payout(post) }}
          Votes: {{ post.active_votes.length }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from './mixins/user' // use user mixin in Posts component
import Post from './mixins/post' // use post mixin in Posts component
let steem = require('steem')

export default {
  name: 'Posts',
  data () {
    return {
      posts: [] // user's posts
    }
  },
  mixins: [User, Post],
  created () {
    let postComponent = this // Store current component (Post) to postComponent
    // cal steem api to retrieve user's posts
    steem.api.getDiscussionsByAuthorBeforeDate(this.username, null, new Date().toISOString().split('.')[0], 10, function (err, result) {
      if (err) {
        console.log(err.stack)
      }
      // save user's posts information to 'posts' attribute
      postComponent.posts = result
    })
  }
}
</script>

<style scoped>
  .post_container {
    text-align: center;
  }
  .post {
    width: 90%;
    display: inline-block;
    padding-top: 20px;
    padding-bottom: 5px;
    border-bottom: 1px solid;
    border-color: rgb(160,160,255);
  }
  .post_header {
    text-align: left;
  }
  .post_content {
    text-align: left;
  }
  .post_thumbnail {
    width: 120px;
    height: 80px;
  }
</style>
