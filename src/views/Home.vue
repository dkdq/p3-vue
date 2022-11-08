<template>
  <div class="container">
    <header class="text-center rounded-4">
      <h1>ALL PRODUCTS</h1>
    </header>
    <div class="row">
      <div class="col-md-2">
        <aside>
          <div class="search mt-1">
            <input type="text" v-model="search" placeholder="Search by title.." class="form-control"/>
          </div>
          <hr>
          <div>
            <h6>TYPES</h6>
            <div v-for="(type, index) in types" :key="index">
              <label class="form-check-label">
              <input class="form-check-input" type="checkbox" v-model="checkedTypes" :value="type">
                {{ type }}
              </label>
            </div>
          </div>
          <hr>
          <div>
            <h6>Dust & Waterproof</h6>
              <label><input type="radio" value="true" v-model="radioDustWaterproof" class="col-8 form-check-input"/> Yes</label>
              <label><input type="radio" value="false" v-model="radioDustWaterproof" class="col-8 form-check-input ms-1"/> No</label>
          </div>
          <hr>
          <h6>Connector</h6>
              <select v-model="selectedConnectors" class="form-select">
                <option :value="null" selected disabled>Select</option>
                <option v-for="c in categoryFilter" :key="c._id" :value="c._id">{{c.color}}</option>
              </select>
        </aside>
      </div>
      <div class="col">
        <section class="overflow-auto">
          <div class="col-8-md d-flex flex-wrap justify-content-evenly">
            <div v-if="!categoryFilter">
              Loading
            </div>
            <div v-else-if="!categoryFilter.length">
              <h2 class="mt-5 skew">
                No results
              </h2>
            </div>
            <ProductListProduct v-else v-for="product in categoryFilter" :key="product._id" :product="product"/>
          </div>
        </section>
      </div>
    </div>
    <footer class="d-flex sticky-bottom justify-content-end align-items-center">
      <div>
        <a href="#"><i class="bi bi-facebook"></i></a>
        <a href="#"><i class="bi bi-instagram"></i></a>
        <a href="#"><i class="bi bi-twitter"></i></a>
        <a href="#"><i class="bi bi-telegram"></i></a>
      </div>
      <div>Vue2 2022</div>
      <div class="form-check form-switch">
        <input @click="toggle" class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
        <label class="form-check-label" for="flexSwitchCheckChecked"><i class="bi bi-hand-index"></i></label>
      </div>
    </footer>
  </div>
</template>

<script>
import ProductListProduct from '@/components/ProductListProduct.vue'
export default {
  components: {
    ProductListProduct
  },
  computed: {
    products() {
      return this.$store.state.products
    },
    errors() {
      return this.$store.state.errors
    },
    filteredList() {
      return this.products.filter(p => p.brandModel.toLowerCase().includes(this.search.toLowerCase()))
    },
    categoryFilter() {
      if (this.checkedTypes.length === 0) return this.filteredList;
      // return this.filteredList.filter(p => this.checkedTypes.includes(p.type));
      return this.filteredList.filter(p => p.dustWaterproof.includes(this.radioDustWaterproof))
    }
  },
  methods: {
    toggle() {
      this.$store.commit('IS_ACTIVE')
    },
  },
  data() {
    return {
      search: '',
      types: ['in-ear', 'on-ear', 'over-ear'], 
      checkedTypes: [] ,
      radioDustWaterproof: '',
      selectedConnectors: ''
    }
  }
}
</script>

<style scoped>
container {
  height: 100vh;
}

header {
  position: relative;
  max-width: 95vw;
  height: 11vh;
  padding: 1rem;
  
  color: whitesmoke;
  background: linear-gradient(to right, rgb(67, 124, 205), rgb(69, 214, 202));
}

section {
  height: 73vh;
}

.d-inline-flex {
  gap: 15px;
}

footer i, footer div {
  color: #dbdbdb !important;
  margin-right: 12px;
}

a i:hover {
  color: #333 !important;
}

.form-check-input {
  cursor: pointer;
}
</style>