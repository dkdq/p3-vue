<template>
  <div class="container">
    <form>
        <div class="form-floating mb-3 mt-3">
            <input type="email" class="form-control" v-model="loginInfo.email" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating mb-3">
            <input type="password" class="form-control" v-model="loginInfo.password" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
        </div>
        <button class="btn btn-lg btn-success rounded-4 shadow skew" @click.prevent="login">Login</button>
    </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            loginInfo: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            this.$store.dispatch('signIn', this.loginInfo)
        }
    }
}
</script>

<style>

</style>