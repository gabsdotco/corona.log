<template>
  <div class="container">
    <div class="footer">
      <div class="footer-left">
        <div class="footer-left-item">
          <slot name="left" />
        </div>
      </div>
      <div class="footer-right">
        <div class="footer-right-item">
          <slot name="right" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.container {
  width: 100%;
  height: 98px;
  position: fixed;
  bottom: 0;

  .footer {
    width: 100%;
    height: 100%;
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .footer-left,
    .footer-right {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding: 0px 20px;
    }
  }
}
</style>
