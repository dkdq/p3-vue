<template>
  <div class="row mt-5" v-if="product">
    <div class="col-4">
        <img src="https://via.placeholder.com/150x100" class="w-100" alt="">
    </div>
    <div class="col-8">
        <h1>{{ product.brandModel }}</h1>
        <h3>${{ product.price }}</h3>
        <input type="text" class="text-center col-1 me-2 p-1">
        <button class="btn btn-primary">Add to Cart</button>
        <p class="mt-4">{{ product.type }}</p>
    </div>
  </div>
</template>

<script>
export default {
    props: ['id'],
    computed: {
      product() {
        return this.$store.state.product
      }
    },
    mounted() {
      this.$store.dispatch('getProduct', this.id);
    }
}
</script>

<style>

</style>