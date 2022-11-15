<template>
  <div>
    <button class="btn btn-danger rounded-4 shadow skew" @click="toggle" :class="buttonSize">Delete</button>
    <div v-if="isActive">
      <div class="modal-backdrop">
        <div class="modal-wrapper">
          <div class="modal-container rounded-4 p-3">
            <div class="modal-header p-2">
              <h4>Delete Comfirmation</h4>
            </div>

            <div class="modal-body p-2">
              <span v-if="product">
                Are you sure you want to delete {{product.brandModel}}?
              </span>
              <span v-if="defaultValues">
                <strong>Are you sure, {{defaultValues?.username}}?</strong><br>
                We're sorry to see you go.
            </span>
            </div>

            <div class="modal-footer p-2">
              <button class="btn modal-button rounded-4 skew" @click.prevent="submit">
                Confirm
              </button>
              <button class="btn btn-primary rounded-4 shadow skew modal-button me-1" @click.prevent="toggle">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product', 'defaultValues', 'buttonSize'],
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    submit() {
      if(this.product) {
        this.$emit("delete-submitted", {
          _id: this.product._id
        })
      } else {
        this.$emit("delete-submitted", {
          _id: this.defaultValues._id,
        })
      }
    },
    toggle() {
      this.isActive = !this.isActive;
    },
  },
}
</script>

<style>
.modal-backdrop {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: table;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 20rem;
  margin: 0 auto;
  box-shadow: 5px 10px 5px #222;
  background-color: whitesmoke;
  animation: fade-in .5s ease;
}

.modal-header {
  color: #bdbdbd;
}

.modal-button {
  float: right;
  color: #dbdbdb;
}
</style>