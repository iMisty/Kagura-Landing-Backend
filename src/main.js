import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';
import 'font-awesome/css/font-awesome.min.css';
import store from './store/index'
import './assets/less/normalize.less';

new Vue({
    router,
    Vuex,
    store,
    render: h => h(App)
}).$mount('#app')