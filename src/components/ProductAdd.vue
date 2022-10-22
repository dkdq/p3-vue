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
            <input type="number" class="col-8 col-md-9" v-model="product.price">
          </div>
          <div>
            <label class="col-4 col-md-3">Type</label>
              <input type="radio" value="in-ear" v-model="product.type" /><label>in-ear</label>
              <input type="radio" value="on-ear" v-model="product.type" /><label>on-ear</label>
              <input type="radio" value="over-ear" v-model="product.type" /><label>over-ear</label>
          </div>
          <!-- <div>
            <label class="col-4 col-md-3">Hours</label>
              <input type="checkbox" value="music" v-model="product.hours.music"><label>Music</label>
              <input type="checkbox" value="cableCharging" v-model="product.hours.cableCharging"><label>Cable Charging</label>
              <input type="checkbox" value="boxCharging" v-model="product.hours.boxCharging"><label>Box Charging</label>
          </div> -->
          <div>
            <label class="col-4 col-md-3">Connector</label>
            <select v-model="product.connectors">
              <option value="">Select a connector</option>
              <option value="usb-c">USB-C</option>
              <option value="micro">MICRO-USB</option>
            </select>
          </div>
          <div>
            <label class="col-4 col-md-3">Color</label>
            <select v-model="product.color" multiple>
                <option value="white">White</option>
                <option value="black">Black</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
            </select>
          </div>
          <button @click.prevent="createProduct" class="btn btn-info rounded-4 mb-1 mt-1">Create</button>
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
      product: {
        brandModel: '',
        price: '',
        type: '',
        image: '',
        // hours: {},
        color: [],
        connectors: ''
      },
    }
  },
  components: {
    ProductList
  },
  methods: {
    createProduct() {
      this.$store.dispatch('createProduct', this.product)
      // this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>