<template>
    <div class="col-3 m-2">
        <div class="card h-100 text-start">
            <img :src="product.image" class="w-100" alt="">
            <div class="card-body">
                <h4 class="card-title">
                    <router-link :to="{name: 'product', params: {id: product._id} }">{{ product.brandModel }}</router-link>
                </h4>
                <strong>${{ product.price }}</strong>
                <p class="card-text">{{ product.type }}</p>
            </div>
            <div class="px-3 pb-3">
                <button class="btn btn-secondary rounded-4" @click="addToCart()">Add to Cart</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['product'],
    methods: {
        addToCart() {
            this.$store.dispatch('addProductToCart', {
                product: this.product,
                quantity: 1
            })
        }
    }
}
</script>

<style>

</style>