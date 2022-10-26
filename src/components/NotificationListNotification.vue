<template>
  <div class="notifications-list">
    <div v-for="notification in notifications" :key="notification.id">
        <div :class="'alert-' + notification.type" class="alert alert-dismissible fade show fade-animation rounded-4" role="alert">
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          {{ notification.message }}
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeout: null,
      notification: ''
    }
  },
  methods: {
    removeNotification() {
      return this.$store.dispatch('removeNotofication')
    }
  },
  computed: {
    notifications() {
      return this.$store.state.notifications
    },
  },
  created() {
    this.timeout = setTimeout(() => {
      this.$store.dispatch('removeNotification', this.notification);
    }, 10000);
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
};
</script>

<style>
.notifications-list {
  position: fixed;
  bottom: 0;
  right: 0;
  
  margin-right: 15px;
  width: 320px;
}

.fade-animation {
  animation: fade-in .5s ease, fade-out 5s ease;
  animation-fill-mode: forwards;
  opacity: 1;
}

@keyframes fade-in {
  0% {
    transform: scale(0.4);
    opacity: 1;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes fade-out {
  70% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.4);
    opacity: 0;
  }
}
</style>