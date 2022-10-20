<template>
    <div class="card" v-if="error">
        <h2 class="card-title">
            Error
        </h2>
        <p class="">
            {{ error }}
        </p>
        <div class="">
        <button class="dismiss" @click.prevent="dismiss" aria-label="Dismiss Error">
            Dismiss Error
        </button>
        </div>
    </div>
</template>

<script>
  export default {
    name: "ErrorMessage",
    methods: {
        dismiss() {
            this.$store.state.error = "";
        },
    },
    computed: {
        error() {
            return this.$store.state.error
        }
    }
  };
</script>

<style>

</style>