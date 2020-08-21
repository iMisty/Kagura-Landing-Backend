/*
 * @Description: Main
 * @version: 1.0.0
 * @Author: Miya
 * @Date: 2020-05-26 21:59:19
 * @LastEditors: Miya
 * @LastEditTime: 2020-08-09 21:30:45
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store';
// import 'vue-tsx-support/enable-check';
import '@/style/global/style.less';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h: any) => h(App)
}).$mount('#app');
