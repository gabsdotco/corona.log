<template>
  <div class="container">
    <div class="footer">
      <div class="footer-left">
        <div class="footer-left-item">
        </div>
      </div>
      <div class="footer-right">
        <div class="footer-right-item">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',

  methods: {
    onChangeLocale() {
      // Do Something
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes fade {
  from {opacity: 0;}
  to {opacity: 1;}
}

.container {
  width: 100%;
  height: 98px;
  position: absolute;

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

    .footer-left {
      width: 58px;
    }

    .footer-right {
    }
  }
}
</style>
