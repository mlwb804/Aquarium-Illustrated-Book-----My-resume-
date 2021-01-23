import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: [],
  },
  mutations: {
    fetchArticles: (state, payload) => {
      state.articles = payload
    }
  },
  actions: {
    fetchArticles: async ( { commit } ) => {
      const result = await (await axios.get('../../static/demo.json'))
      const payload = result.data.data
      commit('fetchArticles', payload)
    }
  },
  modules: {
  }
})
