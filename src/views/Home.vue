<template>
  <div class="container">
    <header class="text-center rounded-4">
      <h1>ALL PRODUCTS</h1>
    </header>
      <div class="dropdown d-flex justify-content-end">
        <div class="dropdown-toggle" data-bs-toggle="dropdown">
          Search Filter
        </div>
        <ul class="dropdown-menu p-3 shadow-lg rounded-4 border border-light" @click="$event.stopPropagation()">
          <div>
            <div class="search mt-1">
              <input type="text" v-model="search" placeholder="Title search.." class="form-control"/>
            </div>
            <hr>
            <div>
              <h6>TYPES</h6>
              <div v-for="(type, index) in types" :key="index">
                <label class="form-check-label">
                <input class="form-check-input" type="checkbox" v-model="checkedTypes" :value="type" >
                  {{ type }}
                </label>
              </div>
            </div>
            <hr>
            <div>
              <h6>EARBUDS</h6>
                <label><input type="radio" :value="null" v-model="radioEarbuds" class="col-8 form-check-input"/> All</label>
                <label><input type="radio" :value="true" v-model="radioEarbuds" class="col-8 form-check-input ms-1"/> Yes</label>
                <label><input type="radio" :value="false" v-model="radioEarbuds" class="col-8 form-check-input ms-1"/> No</label>
            </div>
            <hr>
            <h6>CONNECTOR</h6>
              <select v-model="selectedConnectors" class="form-select">
                <option :value="null" selected disabled>Select</option>
                <option v-for="(connector, index) in connectors" :key="index" :value="connector">{{connector}}</option>
              </select>
            <hr>
            <button class="btn btn-danger  rounded-4 shadow skew scale" @click="reset">Reset</button>
          </div>
        </ul>
      </div>
      <section class="overflow-auto">
        <div class="col-8-md d-flex flex-wrap justify-content-evenly">
          <div v-if="!categoryFilter">
            Loading
          </div>
          <div v-else-if="!categoryFilter.length">
            <h2 class="mt-5 skew">
              No Results Found!
            </h2>
          </div>
          <ProductListProduct v-else v-for="product in categoryFilter" :key="product._id" :product="product"/>
        </div>
      </section>
    <footer class="d-flex sticky-bottom justify-content-end align-items-center">
      <div>
        <a href="#"><i class="bi bi-facebook"></i></a>
        <a href="#"><i class="bi bi-instagram"></i></a>
        <a href="#"><i class="bi bi-twitter"></i></a>
        <a href="#"><i class="bi bi-telegram"></i></a>
      </div>
      <div>Vue2 2022</div>
      <div>
        <a href="#" @click="toggle"><i class="bi bi-toggles2"></i></a>
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
      if(this.checkedTypes.length === 0 && this.radioEarbuds === null && this.selectedConnectors === null) return this.filteredList;
      if(this.checkedTypes.length !== 0 && this.radioEarbuds === null && this.selectedConnectors === null) return this.filteredList.filter(p => this.checkedTypes.includes(p.type));
      if(this.checkedTypes.length !== 0 && this.radioEarbuds !== null && this.selectedConnectors === null) return this.filteredList.filter(p => this.checkedTypes.includes(p.type)).filter(p => p.earbuds === this.radioEarbuds);
      if(this.checkedTypes.length !== 0 && this.radioEarbuds === null && this.selectedConnectors !== null) return this.filteredList.filter(p => this.checkedTypes.includes(p.type)).filter(p => p.connectors === this.selectedConnectors);
      if(this.checkedTypes.length !== 0 && this.radioEarbuds !== null && this.selectedConnectors !== null) return this.filteredList.filter(p => this.checkedTypes.includes(p.type)).filter(p => p.connectors === this.selectedConnectors).filter(p => p.earbuds === this.radioEarbuds);
      if(this.checkedTypes.length === 0 && this.radioEarbuds !== null && this.selectedConnectors === null) return this.filteredList.filter(p => p.earbuds === this.radioEarbuds);
      if(this.checkedTypes.length === 0 && this.radioEarbuds !== null && this.selectedConnectors !== null) return this.filteredList.filter(p => p.earbuds === this.radioEarbuds).filter(p => p.connectors === this.selectedConnectors);
      if(this.checkedTypes.length === 0 && this.radioEarbuds === null && this.selectedConnectors !== null) return this.filteredList.filter(p => p.connectors === this.selectedConnectors);
    }
  },
  methods: {
    toggle() {
      this.$store.commit('IS_ACTIVE')
    },
    reset() {
      this.search = '',
      this.checkedTypes = [],
      this.radioEarbuds = null,
      this.selectedConnectors = null
    }
  },
  data() {
    return {
      search: '',
      types: ['in-ear', 'on-ear', 'over-ear'], 
      checkedTypes: [],
      radioEarbuds: null,
      connectors: ['usb-c', 'micro-usb'],
      selectedConnectors: null
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
  height: 10vh;
  padding: 1rem;
  
  color: whitesmoke;
  background: linear-gradient(to right, rgb(67, 124, 205), rgb(69, 214, 202));
}

section {
  height: 69vh;
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

.dropdown-toggle:hover {
  cursor: pointer;
}

.dropdown-menu {
  opacity: 0.9;
}
</style>