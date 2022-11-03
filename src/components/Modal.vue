<template>
  <div>
    <div v-if="isVisible">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container rounded-4 shadow">
            <div class="modal-header">
              <h3>Delete Comfirmation</h3>
            </div>

            <div class="modal-body">
              Are you sure you want to delete?
            </div>

            <div class="modal-footer">
              <button class="btn btn-primary rounded-4 shadow skew modal-button me-1" @click="$emit('close')">
                  Cancel
              </button>
              <button class="btn btn-danger rounded-4 shadow skew modal-button" @click.prevent="submit">
                  OK
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
.modal-mask {
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
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: whitesmoke;
  animation: fade-in .5s ease;
}

.modal-header {
  margin-top: 0;
  color: #bdbdbd;
}

.modal-body {
  margin: 20px 0;
}

.modal-button {
  float: right;
}
</style>