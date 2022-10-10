<template>
    <div class="dropdown-menu p-2">
        <div v-for="item in cart" :key="item.product.id">
            <div class="px-2 d-flex justify-content-between">
                <div>
                    <strong>{{ item.product.brandModel }}</strong>
                    <br />{{ item.quantity }} X ${{ item.product.price }}
                </div>
                <div>
                    <a href="#" class="badge bg-secondary">remove</a>
                </div>
            </div>
        <hr />
        </div>
        <div class="d-flex justify-content-between">
            <span>Total: ${{ cartTotalPrice }}</span>
            <a href="#">clear cart</a>
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