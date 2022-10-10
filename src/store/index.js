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
    cartItemCount(state) {
      return state.cart.length;
    },
    cartTotalPrice(state) {
      let total = 0;
      state.cart.forEach(item =>
        total += item.product.price * item.quantity
      )
      return total;
    }
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    SET_PRODUCT(state, product) {
      state.product = product
    },
    ADD_TO_CART(state, { product, quantity }) {
      state.cart.push({
        product,
        quantity
      })

      let productInCart = state.cart.find(item => 
        item.product.id === product.id
        )
      
        if(productInCart) {
          productInCart.quantity++;
          return;
        }
        
      console.log(productInCart);

      
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
