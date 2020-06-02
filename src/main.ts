/*
 * @Description: Main
 * @version: 1.0.0
 * @Author: Miya
 * @Date: 2020-05-26 21:59:19
 * @LastEditors: Miya
 * @LastEditTime: 2020-06-03 00:09:32
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'font-awesome/css/font-awesome.min.css';

import '@/style/style.less';

Vue.config.productionTip = false;



new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
