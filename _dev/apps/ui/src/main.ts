import {createApp} from 'vue';
import {BootstrapVue} from 'bootstrap-vue';
import {VueShowdownPlugin} from 'vue-showdown';
import router from './router';
import store from './store';
import App from './App.vue';
import i18n from './lib/i18n';
import './assets/scss/app.scss';
import './utils/Filters';
// import showdown extension
import '../showdown.js';
import '@/utils/Sentry';
import CampaignStatus from '@/enums/reporting/CampaignStatus';
import VueSegment from '@/lib/segment';

/* Vue.config.productionTip = false;
Vue.config.ignoredElements = ['prestashop-accounts'];
Vue.use(BootstrapVue);
Vue.use(VueShowdown);
Vue.use(VueSegment, {
  // @ts-ignore
  id: global.psxMktgWithGoogleSegmentId,
  router,
  debug: process.env.NODE_ENV !== 'production',
  pageCategory: '[GGL]',
}); */

const app = createApp(App)
  .use(store);

app.use(router);
app.use(i18n);
app.use(BootstrapVue);
app.use(VueShowdownPlugin);
app.mount('#psxMktgWithGoogleApp');

/* new Vue({
  router,
  store,
  i18n,
  methods: {
    identifySegment
    },
  },
  render: (h) => h(App),
}).$mount('#psxMktgWithGoogleApp'); */

console.error('#################################################');
console.error('### SHOP ID:  ', window.shopIdPsAccounts, '  ###');
console.error('#################################################');
