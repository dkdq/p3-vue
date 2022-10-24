<template>
  <div class="home">
    <header class="container fs-1 text-center rounded-4 align-middle">
      ALL PRODUCTS
    </header>
    <section class="col-8-md d-inline-flex flex-wrap justify-content-evenly">
      <ProductListProduct v-for="product in products" :key="product._id" :product="product" />
    </section>
  </div>
</template>

<script>
import ProductListProduct from '@/components/ProductListProduct.vue'
export default {
  components: {
      ProductListProduct
  },
  computed: {
      products() {
        return this.$store.state.products
      },
      errors() {
        return this.$store.state.errors
      }
  }
}
</script>

<style scoped>
.container {
  position: relative;
  width: 90vw;
  height: 10vh;
  padding: 1rem;

  color: whitesmoke;
  background: linear-gradient(to right, rgb(67, 124, 205), rgb(69, 214, 202));;
}

.d-flex {
    gap: 15px;
}
</style>
