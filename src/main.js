import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

Vue.config.productionTip = false;

// axios.defaults.baseURL = 'https://tgc-earphone-review-rest-api.herokuapp.com/';
axios.defaults.baseURL = 'https://p2-product-reviews-rest-api.onrender.com/';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
