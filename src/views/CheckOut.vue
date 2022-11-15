<template>
  <div>
      <stripe-checkout ref="checkoutRef" :pk="publishableKey" :line-items="lineItems" :mode="mode" :success-url="successURL" :cancel-url="cancelURL" @loading="v => loading = v"/>
      <button @click="submit">Pay Now</button>
  </div>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
export default {
    data() {
        this.publishableKey = 'pk_test_51Lxm4ALIpxvUrnQszUbbTuwrhdkk79o4qa8Frr0FfoBeI4Vs6fUL6LdF4Sb33ovNLGKWH2FEGwvFF3QQpDFhlPXm00Z8L8wp5z'
        return {
            loading: false,
            successURL: 'http://localhost:8080/success',
            cancelURL: 'http://localhost:8080/failure',
            lineItems: [
                {
                    price: 'price_1M2cTgLIpxvUrnQsqQHSYzu5',
                    quantity: 1
                }
            ],
            mode: 'payment'
        }
    },
    methods: {
        submit() {
            this.$refs.checkoutRef.redirectToCheckout()
        }
    },
    components: {
        StripeCheckout
    },
}
</script>

<style>

</style>