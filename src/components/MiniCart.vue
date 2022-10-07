<template>
    <div class="dropdown-menu p-2">
        <div>
            <div class="px-2 d-flex justify-content-between">
                <div>
                    <strong>Product Title</strong>
                    <br />1 X $23
                </div>
                <div>
                    <a href="#" class="badge bg-secondary">remove</a>
                </div>
            </div>
        </div>
        <hr />
        <div class="d-flex justify-content-between">
            <span>Total: $23</span>
            <a href="#">clear cart</a>
        </div>
    </div>
</template>

<script>
export default {

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