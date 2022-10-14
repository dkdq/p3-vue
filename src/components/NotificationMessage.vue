<template>
    <div :class="typeClass" class="alert alert-dismissible fade show" role="alert">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    {{ notification.message }}
  </div>
</template>

<script>

export default {
    props: ["notification"],
    data() {
        return {
            timeout: null
        }
    },
    computed: {
        typeClass() {
            return `alert-${this.notification.type}`;
        },
    },
    created() {
        this.timeout = setTimeout(() => {
            this.$store.dispatch('removeNotification', this.notification);
        }, 2500);
    },
    beforeDestroy() {
        clearTimeout(this.timeout);
    },
    methods: {
        removeNotification() {
            return this.$store.dispatch('removeNotofication')
        }
    }
};
</script>

<style>

</style>