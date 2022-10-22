<template>
  <div id="app">
    <NavigationBar />
    <router-view/>
    <NotificationList />
    <ErrorMessage />
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue'
import NotificationList from '@/components/NotificationList.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'

export default {
  components: {
    NavigationBar,
    NotificationList,
    ErrorMessage
  },
  created() {
    this.$store.dispatch('getProducts')
  },
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Exo+2');
#app {
  background-color: linear-gradient(rgb(67, 124, 205), rgb(69, 214, 202)) !important;
  font-family: 'Exo 2', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */

  top: 6rem;
  position: relative;

  /* height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  flex-wrap: wrap; */
  /* padding: 40px 20px; */
  /* max-width: 720px; */
  /* margin: 0 auto; */
}

/* #app::before {
  content: "";
  display: block;
  position: fixed;
  width: 300%;
  height: 100%;
  top: 50%;
  left: 50%;
  border-radius: 100%;
  transform: translateX(-50%) skewY(-8deg);
  background: linear-gradient(to right, rgb(67, 124, 205), rgb(69, 214, 202));
  z-index: -1;
  animation: wave 8s ease-in-out infinite alternate;
}

@keyframes wave {
  0% {
    transform: translateX(-50%) skew(0deg, -8deg);
  }

  100% {
    transform: translateX(-30%) skew(8deg, -4deg);
  }
} */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
