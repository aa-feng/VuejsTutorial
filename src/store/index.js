import Vuex from 'vuex'
import Vue from 'vue'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'vuedemo',
  storage: localStorage
})

export default new Vuex.Store({

  // Declare the states need to be managed
  state: {
    default_number_of_posts: 10
  },
  mutations: {
    change (state, number) {
      state.default_number_of_posts = number
    }
  },
  getters: {
    default_number_of_posts: state => state.default_number_of_posts
  },
  plugins: [vuexPersist.plugin]
})
