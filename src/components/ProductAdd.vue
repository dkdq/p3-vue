<template>
  <div>
    <h1>PRODUCT CREATE PAGE</h1>
    <ProductForm @form-submitted="createProduct" :button="button" :class="buttonColor"/>
  </div>
</template>

<script>
import ProductForm from '@/components/ProductForm.vue'
export default {
  data() {
    return {
      button: 'Create',
      buttonColor: 'btn-success'
    }
  },
  components: {
    ProductForm
  },
  methods: {
    createProduct(product) {
      this.$store.dispatch('createProduct', product);
    }
  },
  updated() {
    return this.$store.dispatch('getProducts')
  }
}
</script>

<style scoped>

</style>