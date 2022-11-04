<template>
  <div class="container">
    <UserForm @user-form-submitted="update" @delete-submitted="deleteUser" :defaultValues="currentUser" :buttonText="btnTitle" :title="pageTitle" :hasEdit=true />
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
        },
        deleteUser(deleteInfo) {
            
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