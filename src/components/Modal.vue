<template>
  <div>
    <div v-if="isVisible">
      <div class="modal-backdrop">
        <div class="modal-wrapper">
          <div class="modal-container rounded-4 shadow p-3">
            <div class="modal-header p-2">
              <h4>Delete Comfirmation</h4>
            </div>

            <div class="modal-body p-2">
              Are you sure you want to delete?
            </div>

            <div class="modal-footer p-2">
              <button class="btn skew modal-button" @click.prevent="submit">
                OK
              </button>
              <button class="btn btn-primary rounded-4 shadow skew modal-button me-1" @click="$emit('close')">
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
  props: ['product', 'isVisible'],
  methods: {
    submit() {
      this.$emit("delete-submitted")
    },
  }
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
  background-color: rgba(0, 0, 0, 0.03);
  display: table;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 20rem;
  margin: 0 auto;
  background-color: whitesmoke;
  animation: fade-in .5s ease;
}

.modal-header {
  color: #bdbdbd;
}

.modal-button {
  float: right;
}
</style>