<template>
    <div class="alert alert-danger alert-dismissible fade show alert-animation rounded-4 shadow text-md-center" role="alert" v-if="error" :error="error">
        <h2>Error</h2>
        <p>{{ error }}</p>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
</template>

<script>
  export default {
    computed: {
        error() {
            return this.$store.state.error;
        }
    },
  };
</script>

<style scoped>
.alert {
    position: relative;
    margin: 0 auto;
    width: 90vw;
}

.alert-animation {
    animation: fade-in .5s ease;
}
</style>