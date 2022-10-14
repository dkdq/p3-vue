import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: null,
    cart: [],
    notifications: []
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
      // console.log(state.product)
    },
    ADD_TO_CART(state, { product, quantity }) {
      
      const productInCart = state.cart.find(item => item.product._id === product._id)
      // console.log(productInCart)
      
      if(productInCart) {
        productInCart.quantity++;
      } else {
        state.cart.push({
          product,
          quantity
        })
      }
    },
    REMOVE_PRODUCT_FROM_CART(state, product) {
      state.cart = state.cart.filter(item => item.product._id !== product._id)
    },
    CLEAR_CART_ITEMS(state) {
      state.cart = []
    },
    PUSH_NOTIFICATION(state, notification) {
      state.notifications.push({
        ...notification,
        id: (Math.random().toString(36) + Date.now().toString(36)).substring(2)
      })
    },
    REMOVE_NOTIFICATION(state, notificationToRemove) {
      state.notifications = state.notifications.filter(notification => {
          return notification.id != notificationToRemove.id;
      })
    },
  },
  actions: {
    async getProducts({commit}) {
      // await axios.get('https://tgc-earphone-review-rest-api.herokuapp.com/earphone')
      // .then(response => {
      //   commit('SET_PRODUCTS', response.data.result);
      // })
      try {
        const response = await axios.get('https://tgc-earphone-review-rest-api.herokuapp.com/earphone')
        commit('SET_PRODUCTS', response.data.result)
        }
        catch (error) {
            console.log(error)
        }
    },
    getProduct({commit}, productId) {
      axios.get(`https://tgc-earphone-review-rest-api.herokuapp.com/earphone/${productId}`)
      .then(response => {
        commit('SET_PRODUCT', response.data);
      })
    },
    addProductToCart({commit, dispatch}, { product, quantity }) {
      commit('ADD_TO_CART', { product, quantity });
      dispatch('addNotification', {
        type: 'success',
        message: `${product.brandModel} added to cart.`
      });
    },
    removeProductFromCart({commit, dispatch}, product) {
      commit('REMOVE_PRODUCT_FROM_CART', product);
      dispatch('addNotification', {
        type: 'warning',
        message: `${product.brandModel} removed from cart.`
      });
    },
    clearCartItems({commit, dispatch}) {
      commit('CLEAR_CART_ITEMS');
      dispatch('addNotification', {
        type: 'warning',
        message: 'ALL PRODUCTS removed from cart.'
      });
    },
    addNotification({ commit }, notification) {
      commit('PUSH_NOTIFICATION', notification);
    },
    removeNotification({ commit }, notification) {
      commit('REMOVE_NOTIFICATION', notification);
    },
  },
  modules: {
  }
})
