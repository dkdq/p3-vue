<template>
    <div class="product">
        Product Page
        <div>Looking for Product: {{ $route.params.id }}</div>
        <!-- <ul class="list-group">
            <li class="list-group-item" v-for="r in this.earphone" v-bind:key="r._id">
        {{ r.title }}
            </li>
        </ul> -->
    </div>
    <!-- <section class="product">
        <h1>{{ product.name }}</h1>
        <div>
            <img :src="`/images/${destination.image}`" :alt="product.name">
            <p>{{ product.description }}</p>
        </div>
    </section> -->
</template>

<script>
// import sourceData from '@/data.json'
// import axios from 'axios';
// const baseAPIUrl = "https://tgc-earphone-review-rest-api.herokuapp.com/"

export default {
//     data() {
//         return {
//             earphone: []
//         }
//     },
//      async created() {
//         const response = await axios.get(baseAPIUrl + "earphone");
//         this.recipes = response.data;
//   }
    // data() {
    //     return {
    //         product: null
    //     }
    // },
    // methods: {
    //     async initData() {
    //         const response = await fetch(`.../${this.$route.params.slug}`)
    //         this.product = await response.json()
    //     }
    // },
    // computed: {
    //     productId() {
    //         return parseInt(this.$route.params.id)
    //     },
    // },
    // async created() {
    //     this.initData()
    // }
}
</script>

<style>

</style>