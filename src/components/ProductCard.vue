<template>
    <div class="col-3 m-2">
        <div class="card h-100 text-start">
            <img src="https://via.placeholder.com/150x100" class="w-100" alt="">
            <div class="card-body">
                <h4 class="card-title">
                    <router-link :to="{name: 'about', params: {id: 34} }">Product Title</router-link>
                </h4>
                <strong>$23</strong>
                <p class="card-text">Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="px-3 pb-3">
                <button class="btn btn-secondary">Add to Cart</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>