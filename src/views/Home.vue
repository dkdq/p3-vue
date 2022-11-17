<template>
  <div class="container">
    <!-- -----Hero----- -->
    <main class="row">
      <div class="col-md-4 p-3">
        <h2 class="pb-2">Product News</h2>
        <aside class="accordion shadow" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                In-ear Earphone
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                New in!! <strong>Pixel Buds Pro</strong> is available now.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                On-ear Earphone
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>1MORE Comfobuds</strong> is always our best seller!
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Over-ear Earphone
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                Come on, something new please? Try <strong>SHOKZ S803MBK OpenRun Mini Bone Conduction Sport</strong>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <div class="col-md-8 p-3">
        <aside id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>
          <div class="carousel-inner rounded-4">
            <div class="carousel-item active" data-bs-interval="4000">
              <img src="@/assets/transports.jpeg">
              <div class="carousel-caption">
                <h5>Kill time on travel</h5>
                <p>Music or videos always my great companion on any transports.</p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="4000">
              <img src="@/assets/gym.jpg" style="filter: brightness(95%)">
              <div class="carousel-caption">
                <h5>Focus on gym time</h5>
                <p>My music keep me moving and focus sharp till the end.</p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="4000">
              <img src="@/assets/work.webp" style="filter: brightness(90%)">
              <div class="carousel-caption">
                <h5>Make our works great</h5>
                <p>We alwasy can make the difference from others. No doubt!</p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="4000">
              <img src="@/assets/leisure.jpg">
              <div class="carousel-caption">
                <h5>Enjoy on me time</h5>
                <p>Music is always my best relaxation technique on all time.</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>

    <!-- -----Banner----- -->
    <header class="text-center rounded-4 shadow">
      <h2>ALL PRODUCTS</h2>
    </header>

    <!-- -----Search & Filter Bar----- -->
    <aside class="dropdown d-flex justify-content-end">
      <div class="dropdown-toggle" data-bs-toggle="dropdown">
        Search Filter
      </div>
      <ul class="dropdown-menu p-3 shadow-lg rounded-4 border-light" @click="$event.stopPropagation()">
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
    </aside>

    <!-- -----Products Listing----- -->
    <section class="overflow-auto">
      <div class="col-8-md d-flex flex-wrap justify-content-evenly">
        <div v-if="!categoryFilter.length">
          <h2 class="mt-5 skew">
            No Data Found!
          </h2>
        </div>
        <ProductListProduct v-else v-for="product in categoryFilter" :key="product._id" :product="product"/>
      </div>
    </section>

    <!-- -----Social Link & Switch----- -->
    <footer class="d-flex sticky-bottom justify-content-end align-items-center">
      <div>
        <a href="#"><i class="bi bi-facebook"></i></a>
        <a href="#"><i class="bi bi-instagram"></i></a>
        <a href="#"><i class="bi bi-twitter"></i></a>
        <a href="#"><i class="bi bi-telegram"></i></a>
      </div>
      <div>Vue2 2022</div>
      <div>
        <a @click="toggle"><i class="bi bi-toggles2"></i></a>
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
  height: 67vh;
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

@media (min-width: 768px) {
  section {
    height: 73vh;
  }
}

@media (min-width: 1024px) {
  section {
    height: 70vh;
  }
}

img {
  max-height: 60vh;
  object-fit: cover;
  object-position: top;
}

.shadow {
  border-radius: 6px;
}

.carousel-inner {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.bi-toggles2 {
  cursor: pointer;
}

.carousel {
  z-index: 0;
}
</style>