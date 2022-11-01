import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://tgc-earphone-review-rest-api.herokuapp.com/';

// store.dispatch('loggedIn', localStorage.getItem('loggedIn'))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
