<template>
  <div>
    <el-table
      v-loading="loading2"
      element-loading-text="Loading"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      empty-text="No data"
      :data="comments"
      style="width: 100%">
      <el-table-column
        prop="created"
        label="Date"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="parent_author"
        label="Parent author"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="root_title"
        label="Post"
        width="180">
      </el-table-column>
      <el-table-column
        prop="body"
        label="Comment">
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
import User from './mixins/user' // use user mixin in Posts component
let steem = require('steem')

export default {
  name: 'Comments',
  data () {
    return {
      comments: [] // user's comments
    }
  },
  mixins: [User],
  created () {
    let commentsComponent = this // Store current component (Comments) to commentsComponent
    steem.api.getDiscussionsByComments({'start_author': this.username, 'limit': this.$store.getters.default_number_of_posts}, function (err, result) {
      if (err) {
        console.log(err.stack)
      }
      // save user's comments information to 'comments' attribute
      commentsComponent.comments = result
    })
  }
}
</script>

<style scoped>
</style>
