import Vue from 'vue';
import VueMoment from 'vue-moment';
import App from './App.vue';

import i18n from './utils/translation';
import router from './router';

Vue.use(VueMoment);
Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
