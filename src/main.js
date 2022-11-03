import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import StyleS from './components/StyleS.vue';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.config.productionTip = false;
Vue.component(StyleS);
Vue.use(VueToast);
export const bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
