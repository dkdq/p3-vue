<template>
    <div class="container">
        <h1 class="d-inline">Product List</h1>
        <button class="btn btn-success rounded-4 shadow ms-3 mb-3 skew">
            <router-link :to="{name: 'add'}">Add Product</router-link>
        </button>
        <div v-if="products">
            <div class="row p-2 h5">
                <div class="col-4">Brand Model</div>
                <div class="col-2">Type</div>
                <div class="col-2">Price</div>
                <div class="col-4">Action</div>
            </div>
            <div v-for="product in products" :key="product._id" class="row border-top p-2">
                <div class="col-4">{{ product.brandModel }}</div>
                <div class="col-2">{{ product.type }}</div>
                <div class="col-2">{{ product.price }}</div>
                <div class="col-4 skew">
                    <button class="btn btn-info rounded-4 shadow"><router-link :to="{name: 'product', params: {id: product._id} }">Show</router-link></button>
                    <button class="btn btn-primary rounded-4 shadow"><router-link :to="{name: 'edit', params: {id: product._id} }">Edit</router-link></button>
                    <button class="btn btn-danger rounded-4 shadow" @click="modalVisible = true">Delete</button>
                </div>
                <Modal :product="product" @delete-submitted="deleteProduct(product)" :isVisible="modalVisible" @close="modalVisible = false"/>
            </div>
        </div>
        <div v-else class="spinner-grow text-info" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<script>
import Modal from '@/components/Modal.vue'
export default {
    computed: {
        products() {
            return this.$store.state.products
        },
        product() {
            return this.$store.state.product
        }
    },
    methods: {
        deleteProduct(product) {
            this.$store.dispatch('deleteProduct', product)
            this.modalVisible = false
        },
    },
    updated() {
        return this.$store.dispatch('getProducts')
    },
    components: {
        Modal
    },
    data() {
        return {
            modalVisible: false
        }
    },
}
</script>

<style scoped>
button a {
    color: whitesmoke;
    text-decoration: none;
}

.col-4 > button {
    margin: 2px;
}
</style>