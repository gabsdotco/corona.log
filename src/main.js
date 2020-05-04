import Vue from 'vue';
import * as moment from 'moment';

import App from './App.vue';

import i18n from './utils/translation';
import router from './router';

Vue.prototype.$moment = moment;

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
