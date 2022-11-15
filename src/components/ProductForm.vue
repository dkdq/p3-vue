<template>
  <div class="container">
    <h3>PRODUCT {{ title }} PAGE</h3>
    <div class="row">
      <div class="col-12 col-md-7">
        <form>
          <div class="form-input mb-3">
            <label class="col-form-label">Brand Model</label>
            <input type="text" class="form-control" v-model="productInfo.brandModel">
          </div>
          <div class="form-input mb-3">
            <label class="col-form-label">Image Link</label>
            <input type="text" class="form-control" v-model="productInfo.image">
          </div>
          <div class="form-input mb-3">
            <label class="col-form-label">Price</label>
            <input type="number" class="form-control" v-model="productInfo.price">
          </div>
          <div class="row">
            <div>
              <label class="col-form-label">Type</label>
              <div>
                <label><input type="radio" value="in-ear" v-model="productInfo.type" class="col-8 form-check-input"/> in-ear</label>
              </div>
              <div>
                <label><input type="radio" value="on-ear" v-model="productInfo.type" class="col-8 form-check-input"/> on-ear</label>
              </div>
              <div>
                <label><input type="radio" value="over-ear" v-model="productInfo.type" class="col-8 form-check-input"/> over-ear</label>
              </div>
            </div><br>
            <div class="mt-3">
              <label><input type="checkbox" value="true" v-model="productInfo.dustWaterproof" class="form-check-input"> Dust&Waterproof</label>
            </div>
            <div class="mt-2">
              <label class="col-4 col-md-3 col-form-label">Connector</label>
              <select v-model="productInfo.connectors" class="form-select-sm">
                <option value="">Please select</option>
                <option value="usb-c">USB-C</option>
                <option value="micro">MICRO-USB</option>
              </select>
            </div>
            <div>
              <label class="col-4 col-md-3 col-form-label">Color</label>
              <select v-model="productInfo.color" class="form-select-sm" multiple>
                  <option disabled>Select one or more</option>
                  <option value="white">White</option>
                  <option value="black">Black</option>
                  <option value="blue">Blue</option>
                  <option value="red">Red</option>
              </select>
            </div>
          </div>
          <button @click.prevent="submit" class="btn rounded-4 shadow mb-1 mt-1 skew" :class="buttonClass">{{ buttonText }}</button>
          <button @click.prevent="cancel" class="btn mb-1 mt-1 ms-1">Cancel</button>
        </form>
      </div>
      <ProductListProduct :product="productInfo"/>
    </div>
  </div>
</template>

<script>
import ProductListProduct from '@/components/ProductListProduct.vue'
export default {
  props: ['buttonText', 'title', 'defaultValues', 'buttonClass'],
  data() {
    return {
      productInfo: {
        _id: this.defaultValues?._id,
        brandModel: this.defaultValues?.brandModel || '',
        price: this.defaultValues?.price || '',
        type: this.defaultValues?.type || '',
        image: this.defaultValues?.image || '',
        dustWaterproof: this.defaultValues?.dustWaterproof || false,
        color: this.defaultValues?.color || [],
        connectors: this.defaultValues?.connectors || ''
      },
    }
  },
  components: {
    ProductListProduct,
  },
  methods: {
    submit() {
      this.$emit("form-submitted", {
        _id: this.productInfo._id,
        brandModel: this.productInfo.brandModel,
        price: this.productInfo.price,
        type: this.productInfo.type,
        image: this.productInfo.image,
        dustWaterproof: this.productInfo.dustWaterproof,
        color: this.productInfo.color,
        connectors: this.productInfo.connectors
      });
    },
    cancel() {
      this.$router.push('/admin')
    }
  },
  updated() {
    return this.$store.dispatch('getProducts')
  }
}
</script>

<style scoped>
button {
  color: #dbdbdb;
}
</style>