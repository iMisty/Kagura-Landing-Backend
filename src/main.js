import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';
import store from './store/index';
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';
import './assets/less/normalize.less';
import './assets/less/global.less';

Vue.prototype.$axios = axios;

new Vue({
    router,
    axios,
    Vuex,
    store,
    render: h => h(App)
}).$mount('#app')