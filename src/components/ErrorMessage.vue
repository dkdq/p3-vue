<template>
    <div class="alert alert-danger alert-dismissible fade show alert-animation rounded-4 shadow text-md-center" role="alert" v-if="error">
        <h2>Error</h2>
        <p>{{ error }}</p>
    </div>
</template>

<script>
  export default {
    name: "ErrorMessage",
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