<template>
  <div>
    <div class="row mt-5" v-if="product">
      <div class="col-4">
          <img :src="product.image" class="w-100" alt="">
      </div>
      <div class="col-8">
          <h1>{{ product.brandModel }}</h1>
          <h3>${{ product.price }}</h3>
          <input type="text" class="text-center col-1 me-2 p-1" @keyup.enter="addToCart()" v-model.number="quantity">
          <button class="btn btn-secondary rounded-4" @click="addToCart()">Add to Cart</button>
          <p class="mt-4">{{ product.type }}</p>
          {{ product.color }}
          {{ product.connectors }}
          <div v-for="user in product.review" :key="user._id">
            Email:{{ user.email }}
            Comments:{{ user.comments }}
            Rating:{{ user.rating }}
            Date:{{ user.date }}
          </div>
      </div>
    </div>
    <div v-else class="spinner-grow text-info" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
      return {
        quantity: 1,
      }
    },
    computed: {
      product() {
        return this.$store.state.product
      }
    },
    mounted() {
      this.$store.dispatch('getProduct', this.id);
    },
    methods: {
        addToCart() {
            this.$store.dispatch('addProductToCart', {
                product: this.product,
                quantity: this.quantity
            })
        }
    }
}
</script>

<style scoped>
.spinner-grow {
  margin: 50%
}
</style>