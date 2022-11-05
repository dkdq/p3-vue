<template>
  <div class="container">
    <UserForm @user-form-submitted="update" :defaultValues="currentUser" :buttonText="btnTitle" :title="pageTitle" :hasEdit=true />
    <Modal @delete-submitted="deleteUser"/>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue'
import UserForm from '@/components/UserForm.vue'
export default {
    data() {
        return {
            btnTitle: 'Update',
            pageTitle: 'USER PROFILE',
        }
    },
    components: {
        UserForm,
        Modal
    },
    methods: {
        update(updateInfo) {
            this.$store.dispatch('editUser', updateInfo)
        },
        deleteUser(deleteInfo) {
            this.$store.dispatch('deleteUser', deleteInfo)
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