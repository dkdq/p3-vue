<template>
  <div class="container">
    <UserForm @user-form-submitted="register" :buttonText="btnTitle" :title="pageTitle" />
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'
export default {
     data() {
        return {
            btnTitle: 'Register',
            pageTitle: 'REGISTRATION',
        }
    },
    components: {
        UserForm
    },
    methods: {
        register(registerInfo) {
            this.$store.dispatch('signUp', registerInfo)
        }
    }
}
</script>

<style>

</style>