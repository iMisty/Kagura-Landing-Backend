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
                titleIconColor: "#29f",
                class: 'fa-video-camera',
                items: [
                    { icon: '@/assets/imgs/youtube.png', link: 'https://www.youtube.com', text: 'Youtube', class: 'icon-youtube' },
                    { icon: 'aaa.gif', link: 'https://www.bilibili.com', text: 'Bilibili' },
                    { icon: 'aaa.gif', link: 'https://www.acfun.com', text: 'ACFun' },
                    { icon: 'aaa.gif', link: 'https://www.youku.com', text: 'Youku' },
                ]
            },
            list2: {
                name: 'Designs',
                class: 'icon-video',
                titleIconColor: "#29f",
                items: [
                    { icon: '@/assets/imgs/youtube.png', link: 'https://www.youtube.com', text: 'Youtube', class: 'fa-youtube' },
                    { icon: 'aaa.gif', link: 'https://www.bilibili.com', text: 'Bilibili' },
                    { icon: 'aaa.gif', link: 'https://www.acfun.com', text: 'ACFun' },
                    { icon: 'aaa.gif', link: 'https://www.youku.com', text: 'Youku' },
                ]
            },
            list3: {
                name: 'Videos',
                titleIconColor: "#29f",
                class: 'fa-video-camera',
                items: [
                    { icon: '@/assets/imgs/youtube.png', link: 'https://www.youtube.com', text: 'Youtube', class: 'icon-youtube' },
                    { icon: 'aaa.gif', link: 'https://www.bilibili.com', text: 'Bilibili' },
                    { icon: 'aaa.gif', link: 'https://www.acfun.com', text: 'ACFun' },
                    { icon: 'aaa.gif', link: 'https://www.youku.com', text: 'Youku' },
                ]
            },
            list4: {
                name: 'Designs',
                class: 'icon-video',
                titleIconColor: "#29f",
                items: [
                    { icon: '@/assets/imgs/youtube.png', link: 'https://www.youtube.com', text: 'Youtube', class: 'fa-youtube' },
                    { icon: 'aaa.gif', link: 'https://www.bilibili.com', text: 'Bilibili' },
                    { icon: 'aaa.gif', link: 'https://www.acfun.com', text: 'ACFun' },
                    { icon: 'aaa.gif', link: 'https://www.youku.com', text: 'Youku' },
                ]
            },
            list5: {
                name: 'Videos',
                titleIconColor: "#29f",
                class: 'fa-video-camera',
                items: [
                    { icon: '@/assets/imgs/youtube.png', link: 'https://www.youtube.com', text: 'Youtube', class: 'icon-youtube' },
                    { icon: 'aaa.gif', link: 'https://www.bilibili.com', text: 'Bilibili' },
                    { icon: 'aaa.gif', link: 'https://www.acfun.com', text: 'ACFun' },
                    { icon: 'aaa.gif', link: 'https://www.youku.com', text: 'Youku' },
                ]
            },
            list6: {
                name: 'Designs',
                class: 'icon-video',
                titleIconColor: "#29f",
                items: [
                    { icon: '@/assets/imgs/youtube.png', link: 'https://www.youtube.com', text: 'Youtube', class: 'fa-youtube' },
                    { icon: 'aaa.gif', link: 'https://www.bilibili.com', text: 'Bilibili' },
                    { icon: 'aaa.gif', link: 'https://www.acfun.com', text: 'ACFun' },
                    { icon: 'aaa.gif', link: 'https://www.youku.com', text: 'Youku' },
                ]
            },
            list7: {
                name: 'Videos',
                titleIconColor: "#29f",
                class: 'fa-video-camera',
                items: [
                    { icon: '@/assets/imgs/youtube.png', link: 'https://www.youtube.com', text: 'Youtube', class: 'icon-youtube' },
                    { icon: 'aaa.gif', link: 'https://www.bilibili.com', text: 'Bilibili' },
                    { icon: 'aaa.gif', link: 'https://www.acfun.com', text: 'ACFun' },
                    { icon: 'aaa.gif', link: 'https://www.youku.com', text: 'Youku' },
                ]
            },
            list8: {
                name: 'Designs',
                class: 'icon-video',
                titleIconColor: "#29f",
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