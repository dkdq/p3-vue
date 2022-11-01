<template>
  <div id="app" :style="[isActive ? backgroundAnimation : '']">
    <NavigationBar />
    <router-view />
    <NotificationList />
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue'
import NotificationList from '@/components/NotificationList.vue'
export default {
  data() {
    return {
      backgroundAnimation: {
        '--content': '""',
        '--display': 'block',
        '--position': 'fixed',
        '--width': '300%',
        '--100': '100%',
        '--50': '50%',
        '--transform': 'translateX(-50%) skewY(-8deg)',
        '--background': 'linear-gradient(to right, rgb(67, 124, 205), rgb(69, 214, 202))',
        '--z-index': '-1'
      },
    }
  },
  components: {
    NavigationBar,
    NotificationList,
  },
  created() {
    this.$store.dispatch('getProducts')
  },
  mounted() {
    this.$store.dispatch('loggedIn', localStorage.getItem('loggedIn'))
  },
  computed: {
    isActive() {
      return this.$store.state.isActive
    },
    addNotification() {
      return this.$store.dispatch('addNotification')
    },
  }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Exo+2');
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css");

#app {
  background-color: linear-gradient(rgb(67, 124, 205), rgb(69, 214, 202)) !important;
  font-family: 'Exo 2', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  top: 6rem;
  position: relative;
}

#app::before {
  content: var(--content);
  display: var(--display);
  position: var(--position);
  width: var(--width);
  height: var(--100);
  top: var(--50);
  left: var(--50);
  border-radius: var(--100);
  transform: var(--transform);
  background: var(--background);
  z-index: var(--z-index);
  /* animation: wave 8s ease-in-out infinite alternate */
}

@keyframes wave {
  0% {
    transform: translateX(-50%) skew(0deg, -8deg);
  }

  100% {
    transform: translateX(-30%) skew(8deg, -4deg);
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
