<template>
  <div class="container">
    <form>
        <div class="form-floating mb-3 mt-3">
            <input type="text" class="form-control" v-model="registerInfo.username" id="floatingInput" placeholder="js">
            <label for="floatingInput">Username</label>
        </div>
        <div class="form-floating mb-3 mt-3">
            <input type="text" class="form-control" v-model="registerInfo.firstname" id="floatingInput1" placeholder="john">
            <label for="floatingInput1">First Name</label>
        </div>
        <div class="form-floating mb-3 mt-3">
            <input type="text" class="form-control" v-model="registerInfo.lastname" id="floatingInput2" placeholder="snow">
            <label for="floatingInput2">Last Name</label>
        </div>
        <div class="form-floating mb-3 mt-3">
            <input type="email" class="form-control" v-model="registerInfo.email" id="floatingInput3" placeholder="name@example.com">
            <label for="floatingInput3">Email address</label>
        </div>
        <div class="form-floating mb-3">
            <input :type="showPassword ? 'text' : 'password'" class="form-control" v-model="registerInfo.password" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
        </div>
        <button class="btn btn-lg btn-success rounded-4 shadow skew" @click.prevent="login">Register</button>
        <button @click.prevent="showPassword = !showPassword" class="btn btn-lg rounded-4 shadow skew ms-2">
            <i v-if="showPassword" class="bi bi-eye"></i>
            <i v-else class="bi bi-eye-slash"></i>
        </button>
    </form>
  </div>
</template>

<script>
export default {
     data() {
        return {
            registerInfo: {
                username: '',
                firstname: '',
                lastname: '',
                email: '',
                password: ''
            },
            showPassword: ''
        }
    },
    methods: {
        login() {
            this.$store.dispatch('signUp', this.registerInfo)
        }
    }
}
</script>

<style>

</style>