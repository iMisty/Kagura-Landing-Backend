import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './less/ystyle.less';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
