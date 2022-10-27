<template>
  <div class="container">
    <header class="text-center rounded-4">
      <h1>ALL PRODUCTS</h1>
    </header>
    <section class="overflow-auto">
      <div class="col-8-md d-inline-flex flex-wrap justify-content-evenly">
        <ProductListProduct v-for="product in products" :key="product._id" :product="product" />
      </div>
    </section>
    <footer class="d-flex sticky-bottom justify-content-end align-items-center">
      <div>
        <a href="#"><i class="bi bi-facebook"></i></a>
        <a href="#"><i class="bi bi-instagram"></i></a>
        <a href="#"><i class="bi bi-twitter"></i></a>
        <a href="#"><i class="bi bi-telegram"></i></a>
      </div>
      <div>Vue2 2022</div>
      <div class="form-check form-switch">
        <input @click="toggle" class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
        <label class="form-check-label" for="flexSwitchCheckChecked"><i class="bi bi-hand-index"></i></label>
      </div>
    </footer>
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
  },
  methods: {
    toggle() {
      this.$store.commit('IS_ACTIVE')
    },
  }
}
</script>

<style scoped>
container {
  height: 100vh;
}

header {
  position: relative;
  max-width: 95vw;
  height: 10vh;
  padding: 1rem;
  
  color: whitesmoke;
  background: linear-gradient(to right, rgb(67, 124, 205), rgb(69, 214, 202));
}

section {
  height: 73vh;
}

.d-inline-flex {
  gap: 15px;
}

footer i, footer div {
  color: #dbdbdb !important;
  margin-right: 12px;
}

a i:hover {
  color: #333 !important;
}

.form-check-input {
  cursor: pointer;
}
</style>
