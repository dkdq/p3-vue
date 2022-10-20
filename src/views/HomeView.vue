<template>
  <div class="home">
    <header class="container">
      ALL PRODUCTS
    </header>
    <section class="col-8-md d-inline-flex flex-wrap justify-content-evenly">
      <ProductCard v-for="product in products" :key='product._id' :product='product' />
    </section>
    <ul v-if="errors && errors.length">
      <!-- <li v-for="error of errors"> -->
        {{error.message}}
      </li>
    </ul>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
export default {
  components: {
      ProductCard
  },
  computed: {
      products() {
        return this.$store.state.products
      },
      errors() {
        return this.$store.state.errors
      }
  },
  created() {
      this.$store.dispatch('getProducts')
  },
}
</script>

<style scoped>
.container {
  padding: 2rem;
  background: linear-gradient(to right, rgb(67, 124, 205), rgb(69, 214, 202));;
  border-radius: 15px;
  position: relative;
  height: 5vh;
  line-height: 0.9;
  width: 100%;
}

.d-flex {
    gap: 15px;
}
</style>
