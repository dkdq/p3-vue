<template>
    <div class="dropdown-menu p-2">
        <div v-for="item in cart" :key="item.product._id">
            <div class="px-2 d-flex">
                <div>
                    <img :src="item.product.image" class="cartImage" alt="">
                </div>
                <div>
                    <strong>{{ item.product.brandModel }}</strong>
                    <br /> ${{ item.product.price }} X {{ item.quantity }}
                </div>
                <div>
                    <a href="#" class="badge bg-secondary" @click.prevent="removeProductFromCart(item.product)">remove</a>
                </div>
            </div>
        <hr />
        </div>
        <div class="d-flex justify-content-between">
            <button v-if="cart.length" class="btn btn-sm btn-block btn-success" >Checkout (${{ cartTotalPrice }})</button>
            <a :class="{disabled: cart.length === 0 }" href="#" @click.prevent="clearCartItems()">clear cart</a>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        cart() {
            return this.$store.state.cart
        },
        cartTotalPrice() {
            return this.$store.getters.cartTotalPrice
        }
    },
    methods: {
        removeProductFromCart(product) {
            this.$store.dispatch('removeProductFromCart', product)
        },
        clearCartItems() {
            this.$store.dispatch('clearCartItems')
        },
    }
}
</script>

<style scoped>
.dropdown-menu {
    min-width: 320px;
    right: 0;
    left: auto !important;
}

a {
    text-decoration: none
}

.disabled {
   pointer-events: none;
   opacity: .5;
}

.cartImage {
    width: 100%;
}

.d-flex > div {
    padding: 5px;
}

@media (min-width: 768px) {
    .dropdown-menu {
        min-width: 320px;
        right: 0;
        left: auto !important;
    }
}
</style>