<template>
    <div class="dropdown-menu p-2">
        <div v-for="item in cart" :key="item.product._id">
            <div class="px-2 d-flex justify-content-between">
                <div>
                    <strong>{{ item.product.brandModel }}</strong>
                    <br /> ${{ item.product.price }}
                    <button class="qty-button btn btn-sm btn-secondary" @click="minusQty()">-</button>
            x {{ item.quantity }}
            <button class="qty-button btn btn-sm btn-secondary" @click="addQty()">+</button>
                </div>
                <div>
                    <a href="#" class="badge bg-secondary" @click.prevent="removeProductFromCart(item.product)">remove</a>
                </div>
            </div>
        <hr />
        </div>
        <div class="d-flex justify-content-between">
            <span>Total: ${{ cartTotalPrice }}</span>
            <a href="#" @click.prevent="clearCartItems()">clear cart</a>
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
    // mounted() {
    //     this.$store.dispatch('getCartItems')
    // },
    methods: {
        removeProductFromCart(product) {
            this.$store.dispatch('removeProductFromCart', product)
        },
        clearCartItems() {
            this.$store.dispatch('clearCartItems')
        },
        addQty() {
            this.$store.dispatch('addQty')
        },
        minusQty() {
            this.$store.dispatch('minusQty')
        }
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

@media (min-width: 768px) {
    .dropdown-menu {
        min-width: 320px;
        right: 0;
        left: auto !important;
    }
}
</style>