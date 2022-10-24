<template>
    <div class="container">
    <div class="row">
      <div class="col-12 col-md-7">
        <form>
          <div class="form-input mb-3">
            <label class="col-form-label">Brand Model</label>
            <input type="text" class="form-control" v-model="product.brandModel">
          </div>
          <div class="form-input mb-3">
            <label class="col-form-label">Image Link</label>
            <input type="text" class="form-control" v-model="product.image">
          </div>
          <div class="form-input mb-3">
            <label class="col-form-label">Price</label>
            <input type="number" class="form-control" v-model="product.price">
          </div>
          <div class="row">
            <div>
              <label class="col-form-label">Type</label>
              <div>
                <input type="radio" value="in-ear" v-model="product.type" class="col-8 form-check-input"/>
                <label class="ms-1">in-ear</label>
              </div>
              <div>
                <input type="radio" value="on-ear" v-model="product.type" class="col-8 form-check-input"/>
                <label class="ms-1">on-ear</label>
              </div>
              <div>
                <input type="radio" value="over-ear" v-model="product.type" class="col-8 form-check-input"/>
                <label class="ms-1">over-ear</label>
              </div>
            </div><br>
            <div class="mt-3">
              <input type="checkbox" value="true" v-model="product.dustWaterproof" class="form-check-input">
              <label class="ms-1">Dust&Waterproof</label>
            </div>
            <div class="mt-2">
              <label class="col-4 col-md-3 col-form-label">Connector</label>
              <select v-model="product.connectors" class="form-select-sm">
                <option value="">Please select</option>
                <option value="usb-c">USB-C</option>
                <option value="micro">MICRO-USB</option>
              </select>
            </div>
            <div>
              <label class="col-4 col-md-3 col-form-label">Color</label>
              <select v-model="product.color" class="form-select-sm" multiple>
                  <option disabled>Select one or more</option>
                  <option value="white">White</option>
                  <option value="black">Black</option>
                  <option value="blue">Blue</option>
                  <option value="red">Red</option>
              </select>
            </div>
          </div>
          <button @click.prevent="submit" class="btn rounded-4 shadow mb-1 mt-1" :class="{colorChange}">{{ button }}</button>
        </form>
      </div>
      <ProductListProduct :product="product"/>
    </div>
  </div>
</template>

<script>
import ProductListProduct from '@/components/ProductListProduct.vue'
export default {
    props: ['button', 'defaultValues', 'buttonColor'],
    data() {
        return {
            product: {
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
                _id: this.product._id,
                brandModel: this.product.brandModel,
                price: this.product.price,
                type: this.product.type,
                image: this.product.image,
                dustWaterproof: this.product.dustWaterproof,
                color: this.product.color,
                connectors: this.product.connectors
            });
        }
    },
    computed: {
      colorChange() {
        return this.buttonColor
      }
    }
}
</script>

<style>
button {
  color: whitesmoke !important;
}
</style>