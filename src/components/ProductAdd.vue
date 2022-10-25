<template>
  <div>
    <ProductForm @form-submitted="createProduct" :button="button" :title="title"/>
  </div>
</template>

<script>
import ProductForm from '@/components/ProductForm.vue'
export default {
  data() {
    return {
      button: 'Create',
      colorAdd: {'btn-success': true},
      title: 'CREATE'
    }
  },
  components: {
    ProductForm
  },
  methods: {
    createProduct(product) {
      this.$store.dispatch('createProduct', product);
    },
  },
  updated() {
    return this.$store.dispatch('getProducts')
  }
}
</script>

<style scoped>

</style>