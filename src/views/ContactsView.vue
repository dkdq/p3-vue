<template>
    <div class="contacts">
        Contact Info:
        <span>{{ this.$route.params.id }}</span>

        <ProductAdd />
        <ProductEdit />
    </div>
</template>

<script>
import ProductAdd from '@/components/ProductAdd.vue'
import ProductEdit from '@/components/ProductEdit.vue'
export default {
    components: {
        ProductAdd,
        ProductEdit
    }
}
</script>

<style>

</style>