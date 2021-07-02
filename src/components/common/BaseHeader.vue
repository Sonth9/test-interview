<template>
  <div class="header">
    <div class="position-relative content">
      <div class="logo-text">
        <a class="header-logo">
          <b-link :to="{ path: '/' }">
            <!-- <img src="../../assets/logo.png" /> -->
          </b-link>
        </a>
        <div class="header-title">Test interview Sota Tek</div>
        <div class="header-sologan">Trần Hồng Sơn</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseHeader"
};
</script>

<style scoped>
</style>
