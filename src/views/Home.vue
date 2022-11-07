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
          <section>
            <h6>COLOR</h6>
            <div>
              <!-- <div v-for="(stack,index) in stacks" :key="index" class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" v-model="stack.checked" @change="getfilteredData">
                <label class="form-check-label">
                  {{ stack.value }}
                </label>
              </div> -->
              <div v-for="(color, index) in colors" :key="index">
                <input class="form-check-input" type="checkbox" v-model="colors" @click.prevent="setActive(color)">
                <label class="form-check-label">
                  {{ color }}
                </label>
              </div>
            </div>
          </section>
        </aside>
      </div>
      <div class="col">
        <section class="overflow-auto">
          <div class="col-8-md d-flex flex-wrap justify-content-evenly">
            <ProductListProduct v-for="product in filteredList" :key="product._id" :product="product" />
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
    // filteredList() {
    //   return this.products.filter( product => {
    //     return this.filtersAppied.every(filterAppied => {
    //       if (product.color.includes(filterAppied)) {
    //         return product.color.includes(filterAppied);
    //       }
    //     });
    //   });
    // },
  },
  methods: {
    toggle() {
      this.$store.commit('IS_ACTIVE')
    },
    setActive(element) {
      if(this.filtersAppied.indexOf(element) > -1){
        this.filtersAppied.pop(element)
      }else{
        this.filtersAppied.push(element)
      }
    },
  },
  data() {
    return {
      search: '',
      // stacks: [
      //   {
      //     checked: false,
      //     value: 'white'
      //   },
      //   {
      //     checked: false,
      //     value: 'black'
      //   },
      //   {
      //     checked: false,
      //     value: 'blue'
      //     },
      //   {
      //     checked: false,
      //     value: 'red'
      //   },
      // ]
      colors: ['white', 'black', 'red', 'blue'],
      filtersAppied: [],
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