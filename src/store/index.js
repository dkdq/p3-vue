import Vue from 'vue'
import Vuex from 'vuex'
import API from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: null,
    cart: [],
    notifications: [],
    error: '',
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
      return total.toFixed(2);
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
      
      const productInCart = state.cart.find(item => item.product._id === product._id)
      
      if(productInCart) {
        productInCart.quantity += quantity;
      } else {
        state.cart.push({
          product,
          quantity
        })
      }
      // console.log(productInCart)
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
    SET_ERROR(state, payload) {
      state.error = payload;
    },
  },
  actions: {
    async getProducts({commit}) {
      try {
        let response = await API().get('earphone')
        commit('SET_PRODUCTS', response.data.result);
      } catch (error) {
        // console.log(error.response.data || error.message)
        commit('SET_ERROR', error.response.data || error.message)
      }
    },
    async getProduct({commit}, productId) {
      try {
        commit('SET_PRODUCT')
        let response = await API().get(`earphone/${productId}`)
        commit('SET_PRODUCT', response.data);
      } catch (error) {
        // console.log(error.response.data || error.message)
        commit('SET_ERROR', error.response.data || error.message)
      }
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