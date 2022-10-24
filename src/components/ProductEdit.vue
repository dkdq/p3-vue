<template>
    <div class="container">
      <ProductForm @form-submitted="editProduct" :defaultValues="product" :button="button"/>
    </div>
</template>

<script>
import ProductForm from '@/components/ProductForm.vue'
export default {
  data() {
    return {
      button: 'Save'
    }
  },
  computed: {
    products() {
      return this.$store.state.products
    },
    product() {
      return this.products.find(p => p._id == this.$route.params.id )
    }
  },
  components: {
    ProductForm
  },
  methods: {
    async editProduct(updatedProduct) {
      await this.$store.dispatch('editProduct', updatedProduct);
    }
  },
  updated() {
    return this.$store.dispatch('getProducts')
  }
}
</script>

<style>

</style>