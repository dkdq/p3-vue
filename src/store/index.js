import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: null,
    cart: [],
    notifications: [],
    isActive: true,
    // users: [],
    currentUser: null,
    token: null
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
    // SET_USERS(state, users) {
    //   state.users = users;
    // },
    LOGOUT_USER(state) {
      state.currentUser = {}
      window.localStorage.currentUser = JSON.stringify({});
    },
    SET_CURRENT_USER(state, user) {
      state.currentUser = user
      window.localStorage.currentUser = JSON.stringify(user);
    },
    SET_TOKEN(state, token) {
      state.token = token
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
        let p = await axios.post('add', {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        }, product);
        commit('ADD_PRODUCT', p);
        dispatch('addNotification', {
          type: 'success',
          message: `${product.brandModel} added to Product List.`
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
        let response = await axios.put(`earphone/${product._id}`, product);
        let savedProduct = response.data.result;
        commit('EDIT_PRODUCT', savedProduct);
        dispatch('addNotification', {
          type: 'success',
          message: `${product.brandModel} edited to Product List.`
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
        await axios.delete(`earphone/${product._id}`);
        commit('DELETE_PRODUCT', product._id);
        dispatch('addNotification', {
          type: 'warning',
          message: `${product.brandModel} removed from Product List.`
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
    // async loadUsers({commit}) {
    //   try {
    //     let response = await axios.get('user')
    //     commit('SET_USERS', response.data);

    //     let user = JSON.parse(window.localStorage.currentUser)
    //     commit('SET_CURRENT_USER', user)
    //   } catch (error) {
    //     dispatch('addNotification', {
    //       type: 'warning',
    //       message: error.response.data
    //     });
    //   }
    // },
    logoutUser({commit}) {
      commit('LOGOUT_USER')
    },
    async signIn({commit}, loginInfo) {
      try {
        let response = await axios.post('login', loginInfo)
        commit('SET_CURRENT_USER', response.data.username)
        console.log(response.data)
        commit('SET_TOKEN', response.data.token)
        // dispatch('attempt', response.data)
      } catch (error) {
        dispatch('addNotification', error);
      }
    },
    // async attempt({commit}, token) {
    //   commit('SET_TOKEN', token)
    //   try {
    //     let response = await axios.post('https://tgc-earphone-review-rest-api.herokuapp.com/add', {
    //       headers: {
    //         'Authorization': 'Bearer ' + token
    //       }
    //     })
    //     commit('SET_CURRENT_USER', response.data)
    //   } catch(error) {
    //     console.log(error)
    //   }
    // }
  },
  modules: {
  }
})