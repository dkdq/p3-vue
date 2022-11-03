<template>
  <div class="container">
    <UserForm @user-form-submitted="update" :defaultValues="currentUser" :buttonText="btnTitle" :title="pageTitle" />
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'
export default {
    data() {
        return {
            btnTitle: 'Update',
            pageTitle: 'USER PROFILE',
        }
    },
    components: {
        UserForm
    },
    methods: {
        update(updateInfo) {
            this.$store.dispatch('editUser', updateInfo)
        }
    },
    computed: {
        currentUser() {
            return this.$store.state.currentUser
        }
    }
}
</script>

<style>

</style>