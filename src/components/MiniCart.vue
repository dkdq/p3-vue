<template>
    <div class="dropdown-menu p-3 rounded-4 shadow-lg border-light">
        <div v-for="item in cart" :key="item.product._id">
            <div class="px-2 grid">
                <div>
                    <img :src="item.product.image" class="cartImage">
                </div>
                <div>
                    <strong>{{ item.product.brandModel }}</strong>
                    <br/> ${{ item.product.price }} X {{ item.quantity }}
                </div>
                <div>
                    <a href="#" @click.prevent="removeProductFromCart(item.product)">remove</a>
                </div>
            </div>
        <hr />
        </div>
        <div class="d-flex justify-content-between">
            <button v-if="cart.length" class="btn rounded-4 skew" @click="checkout">Checkout (${{ cartTotalPrice }})</button>
            <a :class="{disabled: cart.length === 0 }" href="#" @click.prevent="clearCartItems()" class="me-2">clear cart</a>
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
        },
        currentUser() {
            return this.$store.state.currentUser
        }
    },
    methods: {
        removeProductFromCart(product) {
            this.$store.dispatch('removeProductFromCart', product)
        },
        clearCartItems() {
            this.$store.dispatch('clearCartItems')
        },
        checkout() {
            if(!this.currentUser) {
                this.$router.push('/login');
                this.$store.dispatch('addNotification', {
                    type: 'warning',
                    message: `Please login to checkout.`
                });
            }
        }
    }
}
</script>

<style scoped>
.dropdown-menu {
    max-height: 90vh;
    min-width: 18.5rem;
    right: 0;
    left: auto !important;
    overflow-x: hidden;
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

.grid {
    display: grid;
    grid-template-columns: 1fr 1fr min-content;
    align-items: center;
    justify-content: center;
}

.grid > div {
    padding: 5px;
    /* place-self: center; */
}

.btn {
    background: linear-gradient(to right, rgb(67, 124, 205), rgb(69, 214, 202));
    color: whitesmoke;
    border: none;
}

@media (min-width: 768px) {
    .dropdown-menu {
        min-width: 30rem;
        right: 0;
        left: auto !important;
    }
}
</style>