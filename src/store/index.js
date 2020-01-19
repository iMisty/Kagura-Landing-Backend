import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    // data
    state: {
        // hitokoto
        hitokoto: '加载中',
        list: {
            list1: {
                name: 'Videos',
                items: [
                    { icon: '@/assets/imgs/youtube.png', link: 'https://www.youtube.com', text: 'Youtube', class: 'icon-youtube' },
                    { icon: 'aaa.gif', link: 'https://www.bilibili.com', text: 'Bilibili' },
                    { icon: 'aaa.gif', link: 'https://www.acfun.com', text: 'ACFun' },
                    { icon: 'aaa.gif', link: 'https://www.youku.com', text: 'Youku' },
                ]
            },
            list2: {
                name: 'Designs',
                items: [
                    { icon: '@/assets/imgs/youtube.png', link: 'https://www.youtube.com', text: 'Youtube', class: 'fa-youtube' },
                    { icon: 'aaa.gif', link: 'https://www.bilibili.com', text: 'Bilibili' },
                    { icon: 'aaa.gif', link: 'https://www.acfun.com', text: 'ACFun' },
                    { icon: 'aaa.gif', link: 'https://www.youku.com', text: 'Youku' },
                ]
            }
        }
    },
    // computed
    getters: {

    },
    // Change
    mutations: {

    },
    // Methods
    action: {

    }
});

export default store;