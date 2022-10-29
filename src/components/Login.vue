<template>
  <div>
    <div v-for="user in users">
        {{user}}
    </div>
  </div>
</template>

<script>
export default {
    computed: {
        users() {
            return this.$store.state.users
        }
    },
    mounted() {
        this.$store.dispatch('loadUsers')
    }
}
</script>

<style>

</style>