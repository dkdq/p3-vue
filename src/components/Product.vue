<template>
  <div class="container">
    <div class="row mt-5" v-if="product">
      <div class="col-4">
        <span :src="product.image" class="w-100 shadow" alt="" />
      </div>
      <div class="col-8">
        <h1>{{ product.brandModel }} {{ colorText }}</h1>
        <h3>${{ product.price }}</h3>
        <input type="text" class="text-center col-1 me-2 p-1" @keyup.enter="addToCart()" v-model.number="quantity"/>
        <button class="btn btn-info rounded-4 shadow" @click="addToCart()">Add to Cart</button>
        <p class="mt-4">{{ product.type }}</p>
        <div v-for="(c, index) in product.color" :key="index" class="d-inline-flex me-2">
          <div @mouseenter="selectedColor(index)" @mouseleave="selectedColor" class="colorCircle" :style="{backgroundColor: c}"></div>
        </div>
        <div><i class="bi bi-battery-charging"></i> {{ product.connectors }}</div>
        <div v-if="product.dustWaterproof == true"><i class="bi bi-shield-check"></i>Dust & Waterproof</div>
        <div v-else><i class="bi bi-shield-x"></i>Dust & Waterproof</div>
      </div>
    </div>
    <div v-else class="spinner-grow text-info" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      quantity: 1,
      colorCircle: '',
      colorText: ''
    };
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  mounted() {
    this.$store.dispatch("getProduct", this.id);
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addProductToCart", {
        product: this.product,
        quantity: this.quantity,
      });
    },
    selectedColor(index) {
      this.colorText = this.product.color[index]
    }
  },
};
</script>

<style scoped>
button {
  color: whitesmoke;
}

.spinner-grow {
  margin: 50%;
}

.colorCircle {
  width: 3rem;
  height: 3rem;
  border: 2px solid #bdbdbd;
  border-radius: 50%;
  cursor: pointer;
}

.bi {
  font-size: 3rem;
}
</style>