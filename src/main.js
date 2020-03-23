import Vue from 'vue';
import VueI18n from 'vue-i18n';

import App from './App.vue';
import messages from './translation/messages';
import router from './router';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'pt_BR',
  messages,
});

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
