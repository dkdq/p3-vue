<template>
    <div class="container">
        <h1>Product List</h1>
        <button class="btn btn-success rounded-4 shadow">
            <router-link to="/product/add">Add Product</router-link>
        </button>
        <div v-if="products">
        <div class="row p-2">
            <div class="col-5">Brand Model</div>
            <div class="col-2">Type</div>
            <div class="col-1">Price</div>
            <div class="col-4">Action</div>
        </div>
        <div v-for="product in products" :key="product._id" class="row border-top p-2">
            <div class="col-5">{{ product.brandModel }}</div>
            <div class="col-2">{{ product.type }}</div>
            <div class="col-1">{{ product.price }}</div>
            <div class="col-4">
                <router-link :to="{name: 'product', params: {id: product._id} }">Show</router-link>
                <router-link :to="{name: 'edit', params: {id: product._id} }">Edit</router-link>
                <button class="btn btn-danger rounded-4" @click="deleteProduct(product)">Delete</button>
            </div>
        </div>

        </div>
            <div v-else class="spinner-grow text-info" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    </div>
</template>

<script>
export default {
    computed: {
        products() {
            return this.$store.state.products
        }
    },
    methods: {
        deleteProduct(product) {
            // let response = prompt(`Are you sure you want to delete ${product.brandModel}`)
            // if(response) 
            this.$store.dispatch('deleteProduct', product)
        }
    },
    updated() {
        return this.$store.dispatch('getProducts')
    }
}
</script>

<style scoped>
button a {
    color: whitesmoke;
    text-decoration: none;
}
</style>