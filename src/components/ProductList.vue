<template>
    <div class="d-flex flex-wrap">
        <ProductCard v-for="product in products" :key='product._id' :product='product' />
    </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
export default {
    components: {
        ProductCard
    },
    computed: {
        products() {
            return this.$store.state.products
        }
    },
    mounted() {
        this.$store.dispatch('getProducts')
    }
}
</script>

<style>

</style>