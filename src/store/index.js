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
      console.log(state.product)
    },
    ADD_TO_CART(state, { product, quantity }) {
      
      let productInCart = state.cart.find(item => item.product._id === product._id)
      console.log(productInCart)
      
      if(productInCart) {
        productInCart.quantity++;
      } else {
        state.cart.push({
          product,
          quantity
        })
      }
      
      console.log(state.cart)
    },
    ADD_QTY(state, _id) {
      const productInCart = state.cart.find((product) => product._id === _id);
      productInCart.quantity++;
    },
    MINUS_QTY(state, _id) {
      const productInCart = state.cart.find((product) => product._id === _id);
      if (productInCart.quantity > 1) {
        productInCart.quantity--;
      } else {
        state.cart.splice(state.cart.indexOf(productInCart, 1));
      }
    },
    // SET_CART(state, cartItems) {
    //   state.cart = cartItems
    // },
    REMOVE_PRODUCT_FROM_CART(state, product) {
      state.cart = state.cart.filter(item => item.product._id !== product._id)
    },
    CLEAR_CART_ITEMS(state) {
      state.cart = []
    }
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
            alert(error)
            console.log(error)
        }
    },
    async getProduct({commit}, productId) {
      await axios.get(`https://tgc-earphone-review-rest-api.herokuapp.com/earphone/${productId}`)
      .then(response => {
        commit('SET_PRODUCT', response.data);
      })
    },
    addProductToCart({commit}, { product, quantity }) {
      commit('ADD_TO_CART', { product, quantity });

      // axios.post('https://tgc-earphone-review-rest-api.herokuapp.com/cart', {
      //   _id: product._id,
      //   quantity,
      // })
    },
    addQty({ commit }, id) {
      commit("ADD_QTY", id);
    },
    minusQty({ commit }, id) {
      commit("MINUS_QTY", id);
    },
    // getCartItems({commit}) {
    //   axios.get('https://tgc-earphone-review-rest-api.herokuapp.com/cart')
    //   .then(response => {
    //     commit('SET_CART', response.data.result);
    //   })
    // },
    removeProductFromCart({commit}, product) {
      commit('REMOVE_PRODUCT_FROM_CART', product);

      // axios.delete(`https://tgc-earphone-review-rest-api.herokuapp.com/cart/${productId}`)
    },
    clearCartItems({commit}) {
      commit('CLEAR_CART_ITEMS')
    }
  },
  modules: {
  }
})
