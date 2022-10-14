<template>
  <div id="app">
    <Navigation />
    <div class="container">
      <router-view/>
    </div>
    <NotificationList />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import NotificationList from '@/components/NotificationList.vue'

export default {
  components: {
    Navigation,
    NotificationList
  }
}
</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
