<template>
    <div class="d-inline-flex">
        <aside class="col-4-md d-flex">
            
        </aside>
        <aside class="col-8-md d-flex flex-wrap justify-content-evenly">
            <ProductCard v-for="product in products" :key='product._id' :product='product' />
        </aside>
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
      }
  },
  created() {
      this.$store.dispatch('getProducts')
  },
}
</script>

<style scoped>
.d-flex {
    gap: 15px;
}

@media (min-width: 768px) {
    div > aside:first-child {
        padding: 8px;
        border: 4px solid tomato;
        border-radius: 6px;
        width: 300px;
        height: 500px;
    
        background-color: #fff;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
    }
}
</style>