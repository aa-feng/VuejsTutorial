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
      path: '/', // match path '/' to Posts component
      name: 'Posts',
      component: Posts
    },
    {
      path: '/comments', // match path '/comments' to Comments component
      name: 'Comments',
      component: Comments
    },
    {
      path: '/activities', // match path '/activities' to Activities component
      name: 'Activities',
      component: Activities
    },
    {
      path: '/*', // For all other paths, just display the default component, e.g. 'Posts'
      name: 'Posts',
      component: Posts
    }
  ]
})
