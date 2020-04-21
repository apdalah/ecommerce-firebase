<template>
  <div class="header-section">
    <h3 class="title">
      <slot name="title"></slot>
    </h3>
    <div class="actions">
      <ve-button type="button" color="success" @click="fireAddModalEvent">
      	<slot name="actionName"></slot>
      </ve-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    fireAddModalEvent() {
      this.$emit("addModalEvent");
    }
  }
};
</script>

<style lang="scss" scoped>
.header-section {
  border-bottom: 1px solid #eee;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  .title {
    margin: 0;
  }
}
</style>