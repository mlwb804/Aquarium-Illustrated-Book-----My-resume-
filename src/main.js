import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TheBanner from './components/layout/TheBanner'

Vue.config.productionTip = false

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "reset-css"

Vue.use(BootstrapVue)

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

Vue.component('TheBanner', TheBanner);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
