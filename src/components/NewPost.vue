<template>
  <div class="post_form">
    <h4>New post</h4>

    <div v-if="errors.length" class="row error_field">
      <div class="col-sm-12 col-xs-12">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </div>
    </div>

    <div class="row post_field">
      <div class="col-sm-3 col-xs-12">
        Username
      </div>
      <div class="col-sm-9 col-xs-12">
        {{username}}
      </div>
    </div>
    <br/>
    <div class="row post_field">
      <div class="col-sm-3 col-xs-12">
        Posting key
      </div>
      <div class="col-sm-9 col-xs-12">
        <input v-model="posting_key" type="password" class="form-control" id="postingKey">
      </div>
    </div>
    <br/>
    <div class="row post_field">
      <div class="col-sm-3 col-xs-12">
        Title
      </div>
      <div class="col-sm-9 col-xs-12">
        <input v-model="title" type="text" class="form-control" id="postTitle" placeholder="Enter post title">
      </div>
    </div>
    <br/>
    <div class="row post_field">
      <div class="col-sm-3 col-xs-12">
        Content
      </div>
      <div class="col-sm-9 col-xs-12">
        <textarea v-model="content" class="form-control" id="postContent" row="10"></textarea>
      </div>
    </div>
    <br/>
    <div class="row post_field">
      <div class="col-sm-3 col-xs-12">
        Category
      </div>
      <div class="col-sm-9 col-xs-12">
        <input v-model="category" type="text" class="form-control" id="category">
      </div>
    </div>
    <br/>
    <div class="row">
      <div class="col-sm-12 col-xs-12">
        <button v-on:click="submit">Submit</button>
      </div>
    </div>
    <br/>
  </div>
</template>

<script>
import User from './mixins/user'

let steem = require('steem')

export default {
  name: 'NewPost',
  mixins: [User],
  data () {
    return {
      posting_key: '',
      title: '',
      content: '',
      category: 'test',
      errors: []
    }
  },
  methods: {
    submit () {
      let valid = true

      if (!this.username) {
        this.errors.push('Username required.')
        valid = false
      }
      if (!this.posting_key) {
        this.errors.push('Posting key required.')
        valid = false
      }
      if (!this.title) {
        this.errors.push('Title required.')
        valid = false
      }
      if (!this.content) {
        this.errors.push('Content required.')
        valid = false
      }
      if (valid === false) {
        return
      }

      steem.broadcast.comment(
        this.posting_key,
        '',
        this.category,
        this.username,
        new Date().toISOString().replace(/[^a-zA-Z0-9]+/g, '').toLowerCase(),
        this.title,
        this.content,
        { tags: [this.category], app: 'utopian-test/aafeng' },
        function (err, result) {
          if (err) {
            alert('Failure! ' + err)
          } else {
            alert('Success!')
          }
        }
      )
    }
  }
}
</script>

<style scoped>
  .post_form {
    width: 90%;
    padding-left: 30px;
    padding-right: 30px;
  }
  .post_field {
    text-align: left;
  }
  .error_field {
    text-align: left;
    color: red;
  }
</style>
