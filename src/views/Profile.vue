<template>
  <div class="container">
        <Modal @delete-submitted="deleteUser" :defaultValues="currentUser" class="modalProp" :buttonSize="btnSize"/>
        <UserForm @user-form-submitted="update" :defaultValues="currentUser" :buttonText="btnTitle" :title="pageTitle" :hasEdit=true />
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue'
import UserForm from '@/components/UserForm.vue'
export default {
    data() {
        return {
            btnTitle: 'Update',
            btnSize: 'btn-lg',
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

<style scoped>
.modalProp {
    position: absolute;
    right: 21px;
    bottom: 4px;
}
</style>