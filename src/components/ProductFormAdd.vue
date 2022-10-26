<template>
  <div>
    <ProductForm @form-submitted="createProduct" :buttonText="btnTitle" :title="pageTitle" :buttonClass="btnClass"/>
  </div>
</template>

<script>
import ProductForm from '@/components/ProductForm.vue'
export default {
  data() {
    return {
      btnTitle: 'Create',
      pageTitle: 'CREATE',
      btnClass: 'btn-success'
    }
  },
  components: {
    ProductForm
  },
  methods: {
    createProduct(product) {
      this.$store.dispatch('createProduct', product);
      this.$router.push('/admin')
    },
  },
  updated() {
    return this.$store.dispatch('getProducts')
  }
}
</script>

<style scoped>

</style>