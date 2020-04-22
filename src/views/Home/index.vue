<template>
  <div class="container">
    <div class="welcome">
      <h1 class="welcome-text--strong">{{ $t('home.strong') }},</h1>
      <p class="welcome-text--light">{{ $t('home.light') }}</p>
    </div>
    <div class="search">
      <input type="text" :placeholder="$t('home.input')" class="search-input" v-model="search" />
    </div>
    <div class="filter" v-if="search">
      <template v-if="hasResults">
        <div
          class="filter-card"
          v-for="(country, index) in filter"
          :key="index"
          @click="onClick(country)"
        >{{ country }}</div>
      </template>
      <template v-else>
        <div class="filter-empty-state">
          <p>{{ $t('home.empty_state') }}</p>
        </div>
      </template>
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
        .includes(this.search.toLowerCase()));

      return filter?.splice(0, 3);
    },

    hasResults() {
      return this.filter.length > 0;
    },
  },

  methods: {
    async getCountries() {
      this.countries = await fetch(
        'https://pomber.github.io/covid19/countries.json',
      )
        .then((response) => response.json())
        .then((data) => Object.keys(data));
    },

    onClick(country) {
      this.$router.push({
        name: 'log',
        params: { country: country.toLowerCase() },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

@keyframes filter {
  from {
    height: 120px;
  }
  to {
    height: 150px;
  }
}

.container {
  max-width: 600px;
  height: 100vh;
  padding: 50px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation-name: fade;
  animation-duration: 4s;

  .welcome {
    width: 100%;
    line-height: 35px;

    .welcome-text--strong {
      font-size: 28px;
      font-weight: 700;
      color: $primary;
    }

    .welcome-text--light {
      font-size: 26px;
      font-weight: 400;
    }
  }

  .search {
    width: 100%;

    .search-input {
      width: 100%;
      margin: 40px 0px;
      padding: 20px 0px;
      font-size: 24px;
      text-align: center;
      outline: none;
      border: none;
      border-bottom: 1px solid #f5f5f5;
      color: #d8d8d8;

      &::placeholder {
        color: #e4e4e4;
      }
    }
  }

  .filter {
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    animation-name: filter;
    animation-duration: 1.5s;

    .filter-card {
      padding: 15px;
      font-size: 18px;
      text-align: center;
      color: #d8d8d8;
      transition: 1s;
      animation-name: fade;
      animation-duration: 1.5s;
      cursor: pointer;

      &:hover {
        color: $primary;
      }
    }

    .filter-empty-state {
      padding: 15px;
      font-size: 18px;
      text-align: center;
      color: #d8d8d8;
      transition: 1s;
      animation-name: fade;
      animation-duration: 1.5s;
    }
  }
}
</style>
