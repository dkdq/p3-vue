<template>
  <div class="container">
    <h3>{{ title }} PAGE</h3>
    <form>
        <div class="form-floating mb-3 mt-3">
            <input type="email" class="form-control" v-model="userInfo.email" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating mb-3">
            <input :type="showPassword ? 'text' : 'password'" class="form-control" v-model="userInfo.password" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
        </div>
        <div v-if="!hasLogin" class="form-floating mb-3">
            <input :type="showPassword ? 'text' : 'password'" class="form-control" v-model="userInfo.comfimPassword" id="floatingPassword1" placeholder="Password">
            <label for="floatingPassword1">Comfirm Password</label>
        </div>
        <div v-if="!hasLogin" class="form-floating mb-3 mt-3">
            <input type="text" class="form-control" v-model="userInfo.username" id="floatingInput1" placeholder="name name">
            <label for="floatingInput1">Username</label>
        </div>
        <div v-if="!hasLogin" class="form-floating mb-3 mt-3">
            <input type="text" class="form-control" v-model="userInfo.firstname" id="floatingInput2" placeholder="name">
            <label for="floatingInput2">First Name</label>
        </div>
        <div v-if="!hasLogin" class="form-floating mb-3 mt-3">
            <input type="text" class="form-control" v-model="userInfo.lastname" id="floatingInput3" placeholder="name">
            <label for="floatingInput3">Last Name</label>
        </div>
        <button class="btn btn-lg btn-success rounded-4 shadow skew" @click.prevent="submit">{{ buttonText }}</button>
        <button @click.prevent="showPassword = !showPassword" class="btn btn-lg rounded-4 shadow skew ms-2">
            <i v-if="showPassword" class="bi bi-eye"></i>
            <i v-else class="bi bi-eye-slash"></i>
        </button>
        <button v-if="!hasLogin" @click.prevent="cancel" class="btn btn-lg mb-1 mt-1 ms-1">Cancel</button>
    </form>
  </div>
</template>

<script>
export default {
    props: ['buttonText', 'title', 'defaultValues', 'hasLogin'],
    data() {
        return {
            userInfo: {
                username: this.defaultValues?.username || '',
                firstname: this.defaultValues?.firstname || '',
                lastname: this.defaultValues?.lastname || '',
                email: this.defaultValues?.email || '',
                password: this.defaultValues?.password || '',
                comfimPassword: this.defaultValues?.comfirmPassword || ''
            },
            showPassword: ''
        }
    },
    methods: {
        submit() {
            if(!this.hasLogin) {
                this.$emit("user-form-submitted", {
                    username: this.userInfo.username,
                    firstname: this.userInfo.firstname,
                    lastname: this.userInfo.lastname,
                    email: this.userInfo.email,
                    password: this.userInfo.password,
                    comfirmPassword: this.userInfo.comfirmPassword
                })
            } else {
                this.$emit("user-form-submitted", {
                    email: this.userInfo.email,
                    password: this.userInfo.password
                })
            }
        },
        cancel() {
            this.$router.push('/dashboard')
        }
    }
}
</script>

<style scoped>
button {
  color: whitesmoke !important;
}

.bi {
    color: #dbdbdb;
}
</style>