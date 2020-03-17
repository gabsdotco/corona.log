<template>
  <div class="home">
    <div class="welcome-title">
      <h1 id="strong-title">Hello,</h1>
      <h1 id="light-title">select your region to see</h1>
    </div>
    <div class="search">
      <input v-model="search" type="text" placeholder="Insert the country">
    </div>
    <div class="countries">
      <div class="country-slot" v-for="(country, index) in filter" :key="index">
        {{ country }}
      </div>
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

  .search {
    width: 100%;
    margin: 30px 0px;

    input {
      width: 100%;
      padding: 25px 0px;
      font-size: 24px;
      text-align: center;
      border: none;
      border-bottom: 1px solid rgb(245, 245, 245);
      color:rgb(212, 212, 212);
      outline: none;

      &::placeholder {
        color:rgb(212, 212, 212);
      }
    }
  }

  .countries {
    width: 100%;
    height: 200px;
    overflow-y: auto;
    overflow-x: hidden;

    .country-slot {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgb(245, 245, 245);
      margin: 15px 0px;
      padding-bottom: 15px;
    }
  }
}
</style>
