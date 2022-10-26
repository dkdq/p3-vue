<template>
    <div class="col-12 col-sm-3 col-lg-2 m-2 card-animation">
        <div class="card h-100 shadow text-start border-light">
            <img :src="product.image" class="w-100" alt="">
            <div class="card-body">
                <h4 class="card-title">
                    <router-link :to="{name: 'product', params: {id: product._id} }">{{ product.brandModel | abbreviate }}</router-link>
                </h4>
                <strong>${{ product.price }}</strong>
                <p class="card-text">{{ product.type }}</p>
            </div>
            <div class="px-3 pb-3">
                <button class="btn btn-secondary rounded-4 shadow" @click="addToCart()">Add to Cart</button>
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

<style scoped>
@media (min-width: 1024px) {
    .card{
        transform: scale(1);
        transition: transform 0.5s ease;
    }

    .card:hover{
        transform: scale(1.1)
    }
}

.card {
    max-height: 28rem;
}
.card-animation {
    animation: fade-in 1s ease;
}
</style>