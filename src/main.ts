/*
 * @Description: Main
 * @version: 1.0.0
 * @Author: Miya
 * @Date: 2020-05-26 21:59:19
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-12 15:52:15
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store';
import '@/style/style.less';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
