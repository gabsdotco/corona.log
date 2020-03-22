<template>
  <div class="container">
    <div class="stats">
      <div class="stats-title">
        <div class="stats-title--head">{{ capitalizedCountry }},</div>
        <div class="stats-title--date">Log from {{ logCalendar }}, {{ logDate }}</div>
      </div>
      <div class="stats-wrapper" v-if="lastLog">
        <div class="stats-wrapper-item">
          {{ lastLog.confirmed }}
          <span>Confirmed</span>
        </div>
        <div class="stats-wrapper-item">
          {{ newCases }}
          <span>New cases</span>
        </div>
        <div class="stats-wrapper-item">
          {{ lastLog.deaths }}
          <span>{{ lastLog.deaths > 1 ? 'Deaths' : 'Death' }}</span>
        </div>
        <div class="stats-wrapper-item">
          {{ lastLog.recovered }}
          <span>Recovered</span>
        </div>
      </div>
      <empty-state v-else />
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import EmptyState from '@/components/EmptyState.vue';

export default {
  name: 'Log',

  components: {
    EmptyState,
  },

  props: {
    country: String,
  },

  data: () => ({
    logs: null,
  }),

  async created() {
    await this.getLog();
  },

  computed: {
    lastLog() {
      return this.logs?.slice(-1)[0];
    },

    previousLog() {
      return this.logs?.slice(-2)[0];
    },

    newCases() {
      return this.lastLog?.confirmed - this.previousLog?.confirmed;
    },

    logDate() {
      return moment(this.lastLog?.date).format('MM/DD/YYYY');
    },

    logCalendar() {
      return moment(this.lastLog?.date).format('dddd');
    },

    capitalizedCountry() {
      return this.country.replace(/\w\S*/g, (txt) => txt
        .charAt(0)
        .toUpperCase() + txt.substr(1)
        .toLowerCase());
    },
  },

  methods: {
    async getLog() {
      this.logs = await fetch('https://pomber.github.io/covid19/timeseries.json')
        .then((response) => response.json())
        .then((data) => data[this.capitalizedCountry]);
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
  margin: auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: fade;
  animation-duration: 4s;

  .stats {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .stats-title {
      margin-bottom: 40px;

      .stats-title--head {
        color: $primary;
        font-size: 26px;
        font-weight: 700;
      }

      .stats-title--date {
        color: rgb(78, 78, 78);
      }
    }

    .stats-wrapper {
      width: 100%;
      max-width: 320px;
      height: 250px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;

      .stats-wrapper-item {
        width: 50%;
        height: 125px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        font-weight: 700;
        color: $primary;

        &:first-child {
          border-bottom: 0.5px solid $border;
          border-right: 0.5px solid $border;
        }

        &:nth-child(2) {
          border-bottom: 0.5px solid $border;
          border-left: 0.5px solid $border;
        }

        &:nth-child(3) {
          border-top: 0.5px solid $border;
          border-right: 0.5px solid $border;
        }

        &:last-child {
          border-top: 0.5px solid $border;
          border-left: 0.5px solid $border;
        }

        span {
          font-weight: 400;
          font-size: 16px;
          color: rgb(156, 156, 156);
        }
      }
    }
  }
}
</style>
