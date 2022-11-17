<template>
  <div>
    <ProductForm @form-submitted="createProduct" :buttonText="btnTitle" :title="pageTitle" :buttonClass="btnClass" :sampleImage="sampleImage"/>
  </div>
</template>

<script>
import ProductForm from '@/components/ProductForm.vue'
export default {
  data() {
    return {
      btnTitle: 'Create',
      pageTitle: 'CREATE',
      btnClass: 'btn-success',
      sampleImage: 'https://via.placeholder.com/800/ffffff?text=Sample Image'
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

<style>

</style>