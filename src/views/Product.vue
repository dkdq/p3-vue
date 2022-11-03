<template>
  <div class="container">
    <div v-if="!product" class="spinner-grow text-info" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div v-else class="row mt-2">
      <div class="col-sm-6 col-lg-5 img-animation">
        <img :src="product.image" class="w-100 rounded-4 shadow mb-3" alt="" />
      </div>
      <div class="col-sm-6 col-lg-7">
        <h1>{{ product.brandModel }} <span :style="{color: colorText}">{{ colorText }}</span></h1>
        <h3>${{ product.price }}</h3>

        <div>
          <input type="text" class="text-center col-1 me-2 p-1" @keyup.enter="addToCart()" v-model.number="quantity"/>
          <button class="btn btn-info rounded-4 shadow skew" @click="addToCart()">Add to Cart</button>
        </div>

        <div v-for="(c, index) in product.color" :key="index" class="d-inline-flex me-2 mt-3 scale">
          <div @mouseenter="selectedColor(index)" @mouseleave="selectedColor" class="colorCircle shadow" :style="{backgroundColor: c}"></div>
        </div>

        <div><i class="bi bi-ear"></i>{{ product.type }}</div>
        <div><i class="bi bi-battery-charging"></i> {{ product.connectors }}</div>

        <div v-if="product.dustWaterproof == true"><i class="bi bi-shield-check"></i>Dust & Waterproof</div>
        <div v-else><i class="bi bi-shield-x"></i>Dust & Waterproof</div>
      </div>
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
  created() {
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
  display: block;
  margin: 0 auto;
}

.img-animation {
  animation: fade-in .5s ease;
}

span {
  text-transform: uppercase;
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

.bi-shield-x {
  color: red;
}

.bi-shield-check {
  color: olive;
}
</style>