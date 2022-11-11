import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'
import authHeader from '@/auth-header';

Vue.use(Vuex)

let cart = window.localStorage.getItem('cart')
let currentUser = window.localStorage.getItem('currentUser')

export default new Vuex.Store({
  state: {
    products: [],
    product: null,
    cart: cart ? JSON.parse(cart) : [],
    notifications: [],
    isActive: true,
    currentUser: currentUser ? JSON.parse(currentUser) : null,
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

      window.localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    REMOVE_PRODUCT_FROM_CART(state, product) {
      state.cart = state.cart.filter(item => item.product._id !== product._id)
      window.localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    CLEAR_CART_ITEMS(state) {
      state.cart = []
      window.localStorage.removeItem('cart')
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
    SET_CURRENT_USER(state, user) {
      state.currentUser = user
      localStorage.setItem("currentUser", JSON.stringify(user))
      // window.localStorage.currentUser = JSON.stringify(user);
    },
    LOGOUT_USER(state) {
      state.currentUser = null
      // localStorage.setItem("currentUser", JSON.stringify({}))
      localStorage.removeItem("currentUser")
    }
  },
  actions: {
    async getProducts({commit}) {
      try {
        let response = await axios.get('earphone')
        commit('SET_PRODUCTS', response.data.result);
      } catch (error) {
        commit('PUSH_NOTIFICATION', {
          type: 'warning',
          message: error.message
        });
      }
    },
    async getProduct({commit}, productId) {
      try {
        commit('SET_PRODUCT')
        let response = await axios.get(`earphone/${productId}`)
        commit('SET_PRODUCT', response.data);
      } catch (error) {
        dispatch('addNotification', {
          type: 'warning',
          message: error.response.data
        });
      }
    },
    async createProduct({commit, dispatch}, product) {
      try {
        let response = await axios.post('add', product, { headers: authHeader() });
        commit('ADD_PRODUCT', response);
        dispatch('getProducts');
        dispatch('addNotification', {
          type: 'success',
          message: `${product.brandModel} has been added to product list`
        });
        router.push('/admin')
      } catch (error) {
        dispatch('addNotification', {
          type: 'warning',
          message: error.response.data
        });
      }
    },
    async editProduct({commit, dispatch}, product) {
      try {
        let response = await axios.put(`earphone/${product._id}`, product, { headers: authHeader() });
        let savedProduct = response.data.result;
        commit('EDIT_PRODUCT', savedProduct);
        dispatch('addNotification', {
          type: 'success',
          message: `${product.brandModel} has been edited to product list`
        });
        router.push('/admin')
      } catch (error) {
        dispatch('addNotification', {
          type: 'warning',
          message: error.response.data
        });
      }
    },
    async deleteProduct({commit, dispatch}, product) {
      try {
        await axios.delete(`earphone/${product._id}`, { headers: authHeader() });
        commit('DELETE_PRODUCT', product._id);
        dispatch('addNotification', {
          type: 'warning',
          message: `${product.brandModel} has been removed from product list`
        });
      } catch (error) {
        dispatch('addNotification', {
          type: 'warning',
          message: error.response.data
        });
      }
    },
    addProductToCart({commit, dispatch}, { product, quantity }) {
      commit('ADD_TO_CART', { product, quantity });
      dispatch('addNotification', {
        type: 'success',
        message: `${product.brandModel} has been added to cart.`
      });
    },
    removeProductFromCart({commit, dispatch}, product) {
      commit('REMOVE_PRODUCT_FROM_CART', product);
      dispatch('addNotification', {
        type: 'warning',
        message: `${product.brandModel} has been removed from cart`
      });
    },
    clearCartItems({commit, dispatch}) {
      commit('CLEAR_CART_ITEMS');
      dispatch('addNotification', {
        type: 'warning',
        message: 'All products have removed from cart.'
      });
    },
    addNotification({ commit }, notification) {
      commit('PUSH_NOTIFICATION', notification);
    },
    removeNotification({ commit }, notification) {
      commit('REMOVE_NOTIFICATION', notification);
    },
    async signIn({commit, dispatch}, loginInfo) {
      try {
        let response = await axios.post('login', loginInfo)
        commit('SET_CURRENT_USER', response.data);
        dispatch('addNotification', {
          type: 'success',
          message: `Thank you for signing in, ${response.data.username}. Have a nice day ahead!`
        });
        router.push('/admin');
      } catch (error) {
        console.log(error)
        dispatch('addNotification', {
          type: 'warning',
          message: error.response.data
        });
      }
    },
    signOut({commit, dispatch}) {
      commit('LOGOUT_USER');
      dispatch('addNotification', {
        type: 'warning',
        message: `You're logged out successfully`
      });
      router.push('/');
    },
    loggedIn({commit, state}, currentUser) {
      if(currentUser) commit('SET_CURRENT_USER', currentUser)
      if(!state.currentUser) return
    },
    async signUp({dispatch}, registerInfo) {
      try {
        let response = await axios.post('signup', registerInfo)
        dispatch('addNotification', {
          type: 'success',
          message: `Thank you for the registration. ${response.data.message}.`
        });
        router.push('/login')
      } catch (error) {
        dispatch('addNotification', {
          type: 'warning',
          message: error.response.data
        });
      }
    },
    async editUser({commit, dispatch}, updateInfo) {
      try {
        await axios.put(`user/${updateInfo._id}`, updateInfo, { headers: authHeader() });
        commit('LOGOUT_USER');
        dispatch('addNotification', {
          type: 'warning',
          message: `Please relog for security purpose. Thank you.`
        });
        router.push('/login')
      } catch (error) {
        dispatch('addNotification', {
          type: 'warning',
          message: error.response.data
        });
      }
    },
    async deleteUser({commit, dispatch}, deleteInfo) {
      try {
        await axios.delete(`user/${deleteInfo._id}`, { headers: authHeader() });
        commit('LOGOUT_USER');
        dispatch('addNotification', {
          type: 'warning',
          message: `You are most welcome to join us again. See you.`
        });
        router.push('/')
      } catch (error) {
        dispatch('addNotification', {
          type: 'warning',
          message: error.response.data
        });
      }
    },
  },
  modules: {
  }
})