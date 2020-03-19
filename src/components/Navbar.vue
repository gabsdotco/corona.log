<template>
  <div class="container">
    <div class="navbar">
      <div class="navbar-left">
        <div class="navbar-left-item" v-if="!isHomePage" @click="goBack">
          <i class="fas fa-arrow-left"></i>
        </div>
      </div>
      <div class="navbar-right">
        <div class="navbar-right-item">
          <p>corona.<span>log</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',

  computed: {
    isHomePage() {
      return this.$route.path === '/';
    },
  },

  methods: {
    goBack() {
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

@keyframes fade {
  from {opacity: 0;}
  to {opacity: 1;}
}

.container {
  width: 100%;
  height: 98px;
  position: absolute;

  .navbar {
    width: 100%;
    height: 100%;
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .navbar-left,
    .navbar-right {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding: 0px 20px;
    }

    .navbar-left {
      width: 58px;
      color: rgb(189, 189, 189);

      .navbar-left-item {
        cursor: pointer;
        animation-name: fade;
        animation-duration: 2s;
      }
    }

    .navbar-right {
      color: $primary;
      font-weight: 600;

      span {
        font-weight: 400;
      }
    }
  }
}
</style>
