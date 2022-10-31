<template>
    <div :class="'alert-' + notification.type" class="alert alert-dismissible fade show fade-animation rounded-4" role="alert">
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
    created() {
        this.timeout = setTimeout(() => {
            this.$store.dispatch('removeNotification', this.notification);
        }, 12000);
    },
    beforeDestroy() {
        clearTimeout(this.timeout);
    },
    methods: {
        removeNotification() {
            return this.$store.dispatch('removeNotification')
        }
    }
};
</script>

<style>
.fade-animation {
    animation: fade-in .5s ease, fade-out 12s ease;
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

.skew {
  transform: skewX(-5deg);
}
</style>