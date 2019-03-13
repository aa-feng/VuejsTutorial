// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  store, // declare the 'store' will be used for state management
  router, // default router
  components: { App }, // the main component
  template: '<App/>' // This will load the template defined in App.vue
})
