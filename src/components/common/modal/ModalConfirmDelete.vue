<template>
  <b-modal
    :id="id"
    :ref="id"
    :title="`Bạn có chắc chắn muốn xóa ${title} này không ?`"
    centered
    footer-class="border-top-none"
    header-class="border-bottom-none"
    hide-footer
    size="md"
  >
    <div class="font-size-14">
      <div class="w-100 center" style="display: flex">
        <button @click.prevent="hideModal()" class="btn bg-danger">
          Huỷ
        </button>
        <button @click.prevent="confirm()" class="btn bg-info ml-2">
          Đồng ý
        </button>
      </div>
    </div>
  </b-modal>
</template>

<script>

export default {
  name: 'ModalConfirmDelete',
  props: {
    title: {
      // eslint-disable-next-line vue/require-prop-type-constructor
      type: String | null,
      required: true
    },
    id: {
      type: String,
      default: 'modal-confirm-delete'
    }
  },
  methods: {
    hideModal () {
      this.$bvModal.hide(this.id);
    },
    confirm () {
      this.$emit('confirmed', true);
    }
  }
};
</script>

<style scoped>
#modal-confirm-delete___BV_modal_outer_:nth-child(2) {
  display: none;
}
</style>
