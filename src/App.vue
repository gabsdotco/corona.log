<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer>
      <template slot="right">
        <Select
          label="name"
          v-model="selected"
          :options="options"
        />
      </template>
    </Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Select from '@/components/Select.vue';

export default {
  components: {
    Navbar,
    Footer,
    Select,
  },

  data: () => ({
    selected: {},
    options: [
      {
        name: 'Portuguese',
        value: 'pt_BR',
        moment: 'pt-br',
      },
      {
        name: 'English',
        value: 'en',
        moment: 'en',
      },
    ],
  }),

  watch: {
    selected(value) {
      if (value) this.changeLocale(value);
    },
  },

  methods: {
    changeLocale({ value, moment }) {
      this.$i18n.locale = value;
      this.$moment.locale(moment);
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,500,500i,600,700,800,900&display=swap');

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

#app {
  height: 100vh;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
