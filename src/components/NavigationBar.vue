<template>
  <nav class="navbar navbar-expand-md bg-light justify-content-center fixed-top shadow">
    <div class="container">
      <router-link to="/" class="navbar-brand">Earphone</router-link>
      
      <div class="offcanvas offcanvas-end p-2" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header p-2">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Earphone</h5>
          <button ref="offcanvasButton" type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div class="offcanvas-body align-items-center justify-content-lg-evenly">
          <router-link to="/" @click.native="$refs.offcanvasButton.click()">Home</router-link>|
          <router-link to="/products" @click.native="$refs.offcanvasButton.click()">Products</router-link>|
          <router-link to="/admin" @click.native="$refs.offcanvasButton.click()">Admin</router-link>

          <form class="d-flex p-2" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="dropdown">
        <a class="btn dropdown-toggle rounded-4 shadow" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {{ cartItemCount }} Cart
        </a>
        <div @click="$event.stopPropagation()">
          <MiniCart />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import MiniCart from '@/components/MiniCart.vue'

export default {
  components: {
    MiniCart
  },
  computed: {
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    },
  }
}
</script>

<style scoped>
nav {
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.dropdown a {
  background: linear-gradient(to right, rgb(67, 124, 205), rgb(69, 214, 202));
  color: whitesmoke;
}

.navbar-brand, .offcanvas-title {
  width: 8.7rem;
  font-size: 2rem;
  background: linear-gradient(to right, rgb(67, 124, 205), rgb(69, 214, 202));
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fade-in 1s ease;
}

@media (min-width: 320px) {
  .navbar-brand {
    width: 8.5rem;
    font-size: 1.9rem;
  }
  .container {
    padding: 1px;
  }
}
</style>