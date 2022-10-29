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
    isActive: true,
    users: []
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
    },
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
      console.log(productInCart)
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
      state.notifications = state.notifications.filter(notification => notification.id != notificationToRemove.id)
    },
    SET_ERROR(state, payload) {
      state.error = payload;
    },
    ADD_PRODUCT(state, product){
      let products = state.products.concat(product)
      state.products = products;
    },
    EDIT_PRODUCT(state, product){
      // let index = state.products.findIndex(p => p._id === product._id)
      // if(index !== -1) state.products.splice(index, 1, product)
      state.products.forEach(p => {
        if(p._id == product._id) p = product
      })
    },
    DELETE_PRODUCT(state, productId){
      let products = state.products.filter(p => p.id != productId)
      state.products = products;
    },
    IS_ACTIVE(state) {
      state.isActive = !state.isActive;
    },
    SET_USERS(state, users) {
      state.users = users;
    }
  },
  actions: {
    async getProducts({commit}) {
      try {
        let response = await API().get('earphone')
        commit('SET_PRODUCTS', response.data.result);
      } catch (error) {
        commit('SET_ERROR', error.message)
      }
    },
    async getProduct({commit}, productId) {
      try {
        commit('SET_PRODUCT')
        let response = await API().get(`earphone/${productId}`)
        commit('SET_PRODUCT', response.data);
      } catch (error) {
        commit('SET_ERROR', error.response.data || error.message)
      }
    },
    async createProduct({commit, dispatch}, product) {
      try {
        await API().post('add', product);
        commit('ADD_PRODUCT', product);
        dispatch('addNotification', {
          type: 'success',
          message: `${product.brandModel} added to Product List.`
        });
      } catch (error) {
        commit('SET_ERROR', error.response.data || error.message)
      }
    },
    async editProduct({commit, dispatch}, product) {
      try {
        let response = await API().put(`earphone/${product._id}`, product);
        let savedProduct = response.data.result;
        commit('EDIT_PRODUCT', savedProduct);
        dispatch('addNotification', {
          type: 'success',
          message: `${product.brandModel} edited to Product List.`
        });
        return savedProduct;
      } catch (error) {
        commit('SET_ERROR', error.response.data || error.message)
      }
    },
    async deleteProduct({commit, dispatch}, product) {
      try {
        await API().delete(`earphone/${product._id}`);
        commit('DELETE_PRODUCT', product._id);
        dispatch('addNotification', {
          type: 'warning',
          message: `${product.brandModel} removed from Product List.`
        });
      } catch (error) {
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
    async loadUsers({commit}) {
      try {
        let response = await API().get('user')
        commit('SET_USERS', response.data);
      } catch (error) {
        commit('SET_ERROR', error.message)
      }
    }
  },
  modules: {
  }
})