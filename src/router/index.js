import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Posts'
import Comments from '@/components/Comments'
import Activities from '@/components/Activities'
import Settings from '@/components/Settings'
import NewPost from '../components/NewPost'
import SteemPrice from '../components/SteemPrice'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/', // match path '/' to Comments component
      name: 'Root',
      component: Posts
    },
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
    },
    {
      path: '/:username/settings/', // match path '/settings' to Settings component
      name: 'Settings',
      component: Settings
    },
    {
      path: '/:username/new_post/', // match path '/new_post' to NewPost component
      name: 'New post',
      component: NewPost
    },
    {
      path: '/system/steem_price', // match path '/system/steem_price' to SteemPrice component
      name: 'Steem price',
      component: SteemPrice
    }
  ]
})
