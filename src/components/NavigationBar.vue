<template>
  <nav class="navbar navbar-expand-md bg-light justify-content-center fixed-top shadow">
    <div class="container">
      <router-link to="/" class="navbar-brand scale">Earphone</router-link>
      
      <div class="offcanvas offcanvas-end p-2" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header p-2">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Earphone</h5>
          <button ref="offcanvasButton" type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div class="offcanvas-body">
          <div class="container text-center">
            <div class="row row-cols-1 row-cols-md-2 align-items-baseline">
              <div class="col-md-2 me-4">
                <router-link to="/" @click.native="$refs.offcanvasButton.click()">Home</router-link>
              </div>
              <div class="col-md-8">
                <div v-if="currentUser != null" class="row row-cols-3">
                  <div class="col-md-4">
                    <router-link to="/dashboard" @click.native="$refs.offcanvasButton.click()" class="">Dashboard</router-link>
                  </div>
                  <div class="col-md-4">
                    <router-link :to="{name: 'profile', params: {id: currentUser._id}}" @click.native="$refs.offcanvasButton.click()" class=""><i class="bi bi-file-person"></i>{{ currentUser.username | abbreviate }}</router-link>
                  </div>
                  <div class="col-md-4" @click="logout">
                    <router-link to="/" @click.native="$refs.offcanvasButton.click()">Logout</router-link>
                  </div>
                </div>
                <div v-else class="row row-cols-3">
                  <div class="col">
                    <router-link to="/login" @click.native="$refs.offcanvasButton.click()" class="">Login</router-link>
                  </div>
                  <div class="col">
                    <router-link to="/registration" @click.native="$refs.offcanvasButton.click()" class="">Register</router-link>
                  </div>
                  <div class="col">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <button class="navbar-toggler skew" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="dropdown">
        <a class="btn dropdown-toggle rounded-4 shadow scale skew" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {{ cartItemCount }} <i class="bi bi-cart2"></i>
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
  },
  filters: {
    abbreviate(title) {
      if(title.length > 4) {
        return title && title.slice(0, 4) + '...'
      } else {
        return title
      }
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
  color: #222;
}

nav a.router-link-exact-active {
  color: #9a9a9a;
}

.offcanvas-body > button {
  color: #222;
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