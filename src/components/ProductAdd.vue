<template>
  <div class="container">
    <h1>PRODUCT CREATE PAGE</h1>
    <div class="row">
      <div class="col-12 col-md-8">
        <form>
          <div class="form-input mb-3">
            <label class="col-4 col-md-3">Brand Model</label>
            <input type="text" class="col-8 col-md-9" v-model="product.brandModel">
          </div>
          <div class="form-input mb-3">
            <label class="col-4 col-md-3">Image Link</label>
            <input type="text" class="col-8 col-md-9" v-model="product.image">
          </div>
          <div class="form-input mb-3">
            <label class="col-4 col-md-3">Price</label>
            <input type="text" class="col-8 col-md-9" v-model="product.price">
          </div>
          <div class="form-input mb-3">
            <label class="col-4 col-md-3">Image Link</label>
            <input type="text" class="col-8 col-md-9" v-model="product.image">
          </div>
          <div class="form-input mb-3">
            <label class="col-4 col-md-3">Image Link</label>
            <input type="text" class="col-8 col-md-9" v-model="product.image">
          </div>
          <div>
            <label class="col-4 col-md-3">Type</label>
              <input type="radio" value="in-ear" v-model="product.type" /><label>in-ear</label>
              <input type="radio" value="on-ear" v-model="product.type" /><label>on-ear</label>
              <input type="radio" value="over-ear" v-model="product.type" /><label>over-ear</label>
          </div>
          <div>
            <label class="col-4 col-md-3">Interests</label>
                <input type="checkbox" :value="music" v-model="music"><label>Music</label>
                <input type="checkbox" :value="cableCharging" v-model="cableCharging"><label>Cable Charging</label>
                <input type="checkbox" :value="boxCharging" v-model="boxCharging"><label>Box Charging</label>
          </div>
          <div>
            <label class="col-4 col-md-3">How did you hear about us</label>
            <select v-model="hearAbout">
                <option value="friends">From friends</option>
                <option value="facebook">From facebook</option>
                <option value="email">From email</option>
            </select>
          </div>
        </form>
      </div>
      <div class="col-md-4">
        <ProductList :product="product"/>
      </div>
    </div>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue'
export default {
  data() {
    return {
      product: {},
    }
  },
  components: {
    ProductList
  }
}
</script>

<style scoped>

</style>