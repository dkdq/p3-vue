<template>
    <div class="col-5 col-sm-3 col-lg-2 m-2 card-animation">
        <div class="card h-100 shadow text-start border-light scale">
            <img :src="product.image">
            <div class="card-body">
                <h4 class="card-title">
                    <router-link :to="{name: 'product', params: {id: product._id} }">{{ product.brandModel | abbreviate }}</router-link>
                </h4>
                <strong>${{ product.price }}</strong>
                <p class="card-text">{{ product.type }}</p>
            </div>
            <div class="px-3 pb-3">
                <button class="btn btn-secondary rounded-4 shadow skew" @click="addToCart()">Add to Cart</button>
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
    },
    filters: {
        abbreviate(title) {
            if(title.length >= 20) {
                return title && title.slice(0, 27) + '...'
            } else {
                return title
            }
        }
    }
}
</script>

<style>
.scale {
    transition: transform 0.5s ease;
}

.scale:hover{
    transform: scale(1.1)
}

.card {
    max-width: 23rem;
    max-height: 34rem;
}

img {
    width: 100%;
}

.card-animation {
    animation: fade-in 1s ease;
}
</style>