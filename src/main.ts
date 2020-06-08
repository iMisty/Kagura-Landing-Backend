/*
 * @Description: Main
 * @version: 1.0.0
 * @Author: Miya
 * @Date: 2020-05-26 21:59:19
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-08 18:22:03
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store';

import 'font-awesome/css/font-awesome.min.css';

import '@/style/style.less';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
