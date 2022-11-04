<template>
  <div class="container">
    <h3>{{ title }} PAGE</h3>
    <form>
        <div v-if="!hasEdit" class="form-floating mb-3 mt-3">
            <input type="email" class="form-control" v-model="userInfo.email" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
        </div>
        <div v-if="!hasEdit" class="form-floating mb-3">
            <input :type="showPassword ? 'text' : 'password'" class="form-control" v-model="userInfo.password" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
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
        <button class="btn btn-lg btn-primary rounded-4 shadow skew" @click.prevent="submit">{{ buttonText }}</button>
        <button v-if="!hasEdit" @click.prevent="showPassword = !showPassword" class="btn btn-lg rounded-4 shadow skew ms-2">
            <i v-if="showPassword" class="bi bi-eye"></i>
            <i v-else class="bi bi-eye-slash"></i>
        </button>
        <button class="btn btn-lg btn-danger rounded-4 shadow skew ms-2" @click="modalVisible = true">Delete</button>
        <button @click.prevent="cancel" class="btn btn-lg mb-1 mt-1 ms-1">Cancel</button>
    </form>
    <Modal :defaultValues="defaultValues" @delete-submitted="deleteUser(defaultValues)" :isVisible="modalVisible" @close="modalVisible = false"/>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue'
export default {
    props: ['buttonText', 'title', 'defaultValues', 'hasLogin', 'hasEdit'],
    data() {
        return {
            userInfo: {
                _id: this.defaultValues?._id,
                username: this.defaultValues?.username || '',
                firstname: this.defaultValues?.firstname || '',
                lastname: this.defaultValues?.lastname || '',
                email: this.defaultValues?.email || '',
                password: this.defaultValues?.password || ''
            },
            showPassword: '',
            modalVisible: false
        }
    },
    methods: {
        submit() {
            if(!this.hasLogin && !this.hasEdit) {
                this.$emit("user-form-submitted", {
                    username: this.userInfo.username,
                    firstname: this.userInfo.firstname,
                    lastname: this.userInfo.lastname,
                    email: this.userInfo.email,
                    password: this.userInfo.password
                })
            } else if (!this.hasLogin && this.hasEdit) {
                this.$emit("user-form-submitted", {
                    _id: this.userInfo._id,
                    username: this.userInfo.username,
                    firstname: this.userInfo.firstname,
                    lastname: this.userInfo.lastname,
                })
            } else if (this.hasLogin && !this.hasEdit) {
                this.$emit("user-form-submitted", {
                    email: this.userInfo.email,
                    password: this.userInfo.password
                })
            }
        },
        cancel() {
            this.$router.push('/dashboard')
        },
        deleteUser() {
            this.$emit("delete-submitted", {
                _id: this.userInfo._id,
            })
        }
    },
    components: {
        Modal
    }
}
</script>

<style scoped>
button {
    color: #dbdbdb;
}

.bi {
    color: #dbdbdb;
}

.bi:hover{
    color: #222;
}
</style>