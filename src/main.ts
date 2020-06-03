/*
 * @Description: Main
 * @version: 1.0.0
 * @Author: Miya
 * @Date: 2020-05-26 21:59:19
 * @LastEditors: Miya
 * @LastEditTime: 2020-06-04 00:23:54
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';

import 'font-awesome/css/font-awesome.min.css';

import '@/style/style.less';

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;



new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
