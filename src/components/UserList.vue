<template>
  <div>
    <div v-for="user in users" :key="user._id">
        User: {{user.username}} <button @click="loginUser(user)">Login</button>
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
    },
    methods: {
        loginUser(user) {
            this.$store.dispatch('loginUser', user)
        }
    }
}
</script>

<style>

</style>