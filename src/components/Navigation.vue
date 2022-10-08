<template>
  <nav class="navbar navbar-expand-lg bg-light justify-content-center">
    <div class="container">
      <a class="navbar-brand" href="#">Earphone</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'profile', params: { username: 'mark2021' } }">
        Profile
      </router-link> |
      <!-- <router-link :to="{ name: 'product', params: { id: 'product.id' } }">
        Product
      </router-link> -->

      <div class="dropdown">
        <a class="btn btn-info dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          0 Cart
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
  }
}
</script>

<style scoped>
nav {
  padding: 30px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>