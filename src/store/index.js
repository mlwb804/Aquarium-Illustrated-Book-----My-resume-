import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: [],
    searchKey:"",
    rearing:[],
  },
  mutations: {
    fetchArticles: (state, payload) => {
      state.articles = payload
    },
    changeSearchKey: (state, payload) => {
      state.searchKey = payload
    },
    fetchRearing: (state, payload) => {
      state.rearing = payload
    },
  },
  actions: {
    fetchArticles: async ( { commit } ) => {
      const result = await (await axios.get('../../static/demo.json'))
      const payload = result.data.data
      commit('fetchArticles', payload)
    },
    changeSearchKey: ( { commit }, payload ) => {
      commit ( 'changeSearchKey', payload )
    },
    fetchRearing: async ({ commit }) => {
      const result = await (await axios.get('../../static/rearingArticles.json'))
      const payload = result.data.data
      commit('fetchRearing', payload)
    },
  },
  getters:{
    filterBySearchKey: (state) => {
      if(state.searchKey === "") {
        return state.articles
      } else{
        return state.articles.filter(art => {
          if(art.id.includes(state.searchKey)) {
            return art
          }
        })
      }
    }
  }
})
