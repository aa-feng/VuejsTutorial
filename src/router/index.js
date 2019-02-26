import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Posts'
import Comments from '@/components/Comments'
import Activities from '@/components/Activities'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/:username/', // match path '/' to Posts component
      name: 'Posts',
      component: Posts
    },
    {
      path: '/:username/comments/', // match path '/comments' to Comments component
      name: 'Comments',
      component: Comments
    },
    {
      path: '/:username/activities/', // match path '/activities' to Activities component
      name: 'Activities',
      component: Activities
    }
  ]
})
