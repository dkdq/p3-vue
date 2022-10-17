<template>
  <div id="app">
    <NavigationBar />
    <div class="container">
      <router-view/>
    </div>
    <NotificationList />
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue'
import NotificationList from '@/components/NotificationList.vue'

export default {
  components: {
    NavigationBar,
    NotificationList
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Exo+2');
#app {
  background-color: #F8F8F8 !important;
  font-family: 'Exo 2', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
