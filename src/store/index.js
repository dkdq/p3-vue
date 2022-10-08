import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: null,
    cart: []
  },
  getters: {
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    SET_PRODUCT(state, product) {
      state.product = product
    },
    ADD_TO_CART(state, { product, quantity }) {
      const productInCart = state.cart.find(item => {
        return item.product.id === product.id;
      })

      if(productInCart) {
        productInCart.quantity += quantity;
      }

      state.cart.push({
        product, quantity
      })
    }
  },
  actions: {
    getProducts({commit}) {
      axios.get('https://tgc-earphone-review-rest-api.herokuapp.com/earphone')
      .then(response => {
        commit('SET_PRODUCTS', response.data);
      })
    },
    getProduct({commit}, productId) {
      axios.get(`https://tgc-earphone-review-rest-api.herokuapp.com/earphone/${productId}`)
      .then(response => {
        commit('SET_PRODUCT', response.data);
      })
    },
    addProductToCart({commit}, { product, quantity }) {
      commit('ADD_TO_CART', { product, quantity });
    }
  },
  modules: {
  }
})
