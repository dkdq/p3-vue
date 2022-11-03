<template>
  <div class="container">
    <UserForm @user-form-submitted="login" :buttonText="btnTitle" :title="pageTitle" :hasLogin=true />
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'
export default {
    data() {
        return {
            btnTitle: 'Login',
            pageTitle: 'LOGIN',
        }
    },
    components: {
        UserForm
    },
    methods: {
        login(loginInfo) {
            this.$store.dispatch('signIn', loginInfo)
        }
    }
}
</script>

<style>

</style>