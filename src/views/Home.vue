<template>
  <div class="home">
    <div class="welcome-title">
      <h1 id="strong-title">Hello,</h1>
      <h1 id="light-title">let's start to see the statistics</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data: () => ({
    country: null,
    countries: null,
    search: null,
  }),

  async created() {
    await this.getCountries();
  },

  computed: {
    filter() {
      const filter = this.countries?.filter((country) => country
        .toLowerCase()
        .includes(this.search?.toLowerCase()));

      return filter?.splice(0, 3);
    },
  },

  methods: {
    async getCountries() {
      this.countries = await fetch('https://pomber.github.io/covid19/countries.json')
        .then((response) => response.json())
        .then((data) => Object.keys(data));
    },
  },
};
</script>

<style lang="scss" scoped>
$primary: rgb(255, 206, 70);

.home {
  margin: auto;
  max-width: 600px;
  padding: 50px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .welcome-title {
    width: 100%;
    line-height: 35px;

    #strong-title {
      font-size: 28px;
      font-weight: 700;
      color: $primary;
    }

    #light-title {
      font-size: 26px;
      font-weight: 400;
    }
  }
}
</style>
