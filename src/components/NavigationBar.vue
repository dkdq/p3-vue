<template>
  <nav class="navbar navbar-expand-md bg-light justify-content-center fixed-top shadow">
    <div class="container">
      <router-link to="/" class="navbar-brand scale">Earphone</router-link>
      
      <div class="offcanvas offcanvas-end p-2" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header p-2">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Earphone</h5>
          <button ref="offcanvasButton" type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div class="offcanvas-body align-items-center justify-content-evenly justify-content-lg-evenly">
          <router-link to="/" @click.native="$refs.offcanvasButton.click()" class="scale">Home</router-link> | 
          <div v-if="currentUser != null">
            {{currentUser.username}}
            <button class="btn rounded-4 shadow skew scale" @click="logout">
              <router-link to="/" @click.native="$refs.offcanvasButton.click()">Log out</router-link>
            </button>
            <router-link to="/dashboard" @click.native="$refs.offcanvasButton.click()">Dashboard</router-link> | 
            <router-link :to="{name: 'profile', params: {id: currentUser._id}}" @click.native="$refs.offcanvasButton.click()">Profile</router-link>
          </div>
          <div v-else>
            <router-link to="/login" @click.native="$refs.offcanvasButton.click()">Login</router-link> | 
            <router-link to="/registration" @click.native="$refs.offcanvasButton.click()">Register</router-link>
          </div>
        </div>
      </div>
      
      <button class="navbar-toggler skew" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="dropdown">
        <a class="btn dropdown-toggle rounded-4 shadow scale skew" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
    currentUser() {
      return this.$store.state.currentUser
    }
  },
  methods: {
    logout() {
      return this.$store.dispatch('signOut')
    }
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

.offcanvas-body > button {
  color: #2c3e50;
}

.dropdown a {
  background: linear-gradient(to right, rgb(67, 124, 205), rgb(69, 214, 202));
  color: #dbdbdb;
  border: none;
}

.navbar-brand, .offcanvas-title {
  width: 8.7rem;
  font-size: 2rem;
  background: linear-gradient(to right, rgb(67, 124, 205), rgb(69, 214, 202));
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fade-in 1s ease;
}

@media (max-width: 320px) {
  .navbar-brand {
    width: 7rem;
    margin: 5px;
    font-size: 1.6rem;
  }
  
  .container {
    margin-inline-start: 1px;
  }
}
</style>