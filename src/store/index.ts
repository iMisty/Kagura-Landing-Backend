/*
 * @Description: Vuex
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-05-25 22:54:11
 * @LastEditors: Miya
 * @LastEditTime: 2020-06-05 00:01:43
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    link: [
      {
        name: '工具',
        titleIconColor: '#29f',
        class: 'iconfont icon-gongju',
        items: [
          {
            icon: 'undefined',
            link: 'https://www.youtube.com',
            text: 'Youtube',
            class: 'iconfont icon-youtube',
          },
          {
            icon: '',
            link: 'https://www.bilibili.com',
            text: 'Bilibili',
            class: 'iconfont icon-bilibili',
          },
          {
            icon: '',
            link: 'https://www.acfun.com',
            text: 'ACFun',
            class: 'iconfont icon-acfun',
          },
          {
            icon: '',
            link: 'https://www.youku.com',
            text: 'Youku',
            class: 'iconfont icon-youku',
          },
        ],
      },
      {
        name: '开发',
        class: 'iconfont icon-zhongduan',
        titleIconColor: '#29f',
        items: [
          {
            icon: '',
            link: 'https://www.youtube.com',
            text: 'Youtube',
            class: 'fa-youtube',
          },
          {
            icon: '',
            link: 'https://www.bilibili.com',
            text: 'Bilibili',
          },
          {
            icon: '',
            link: 'https://www.acfun.com',
            text: 'ACFun',
          },
          {
            icon: '',
            link: 'https://www.youku.com',
            text: 'Youku',
          },
        ],
      },
      {
        name: '影视动画',
        titleIconColor: '#29f',
        class: 'fa fa-video-camera',
        items: [
          {
            icon: 'undefined',
            link: 'https://www.youtube.com',
            text: 'Youtube',
            class: 'icon-youtube',
          },
          {
            icon: 'undefined',
            link: 'https://www.bilibili.com',
            text: 'Bilibili',
            class: 'icon-bilibili',
          },
          {
            icon: 'undefined',
            link: 'https://www.acfun.com',
            text: 'ACFun',
          },
          {
            icon: 'undefined',
            link: 'https://www.youku.com',
            text: 'Youku',
          },
        ],
      },
      {
        name: '搜索引擎',
        class: 'fa fa-search',
        titleIconColor: '#29f',
        items: [
          {
            icon: 'undefined',
            link: 'https://www.youtube.com',
            text: 'Youtube',
            class: 'fa-youtube',
          },
          {
            icon: 'undefined',
            link: 'https://www.bilibili.com',
            text: 'Bilibili',
          },
          {
            icon: 'undefined',
            link: 'https://www.acfun.com',
            text: 'ACFun',
          },
          {
            icon: 'undefined',
            link: 'https://www.youku.com',
            text: 'Youku',
          },
        ],
      },
      {
        name: '社交',
        titleIconColor: '#29f',
        class: 'fa fa-commenting-o',
        items: [
          {
            icon: 'undefined',
            link: 'https://www.youtube.com',
            text: 'Youtube',
            class: 'icon-youtube',
          },
          {
            icon: 'undefined',
            link: 'https://www.bilibili.com',
            text: 'Bilibili',
          },
          {
            icon: 'undefined',
            link: 'https://www.acfun.com',
            text: 'ACFun',
          },
          {
            icon: 'undefined',
            link: 'https://www.youku.com',
            text: 'Youku',
          },
        ],
      },
      {
        name: '剁手',
        class: 'fa fa-shopping-cart',
        titleIconColor: '#29f',
        items: [
          {
            icon: 'undefined',
            link: 'https://www.youtube.com',
            text: 'Youtube',
            class: 'fa-youtube',
          },
          {
            icon: 'undefined',
            link: 'https://www.bilibili.com',
            text: 'Bilibili',
          },
          {
            icon: 'undefined',
            link: 'https://www.acfun.com',
            text: 'ACFun',
          },
          {
            icon: 'undefined',
            link: 'https://www.youku.com',
            text: 'Youku',
          },
        ],
      },
      {
        name: '设计视觉',
        titleIconColor: '#29f',
        class: 'iconfont icon-caijian',
        items: [
          {
            icon: 'undefined',
            link: 'https://www.youtube.com',
            text: 'Youtube',
            class: 'icon-youtube',
          },
          {
            icon: 'undefined',
            link: 'https://www.bilibili.com',
            text: 'Bilibili',
          },
          {
            icon: 'undefined',
            link: 'https://www.acfun.com',
            text: 'ACFun',
          },
          {
            icon: 'undefined',
            link: 'https://www.youku.com',
            text: 'Youku',
          },
        ],
      },
      {
        name: '邮箱',
        class: 'iconfont icon-xinfeng',
        titleIconColor: '#29f',
        items: [
          {
            icon: 'undefined',
            link: 'https://www.youtube.com',
            text: 'Youtube',
            class: 'fa-youtube',
          },
          {
            icon: 'undefined',
            link: 'https://www.bilibili.com',
            text: 'Bilibili',
          },
          {
            icon: 'undefined',
            link: 'https://www.acfun.com',
            text: 'ACFun',
          },
          {
            icon: 'undefined',
            link: 'https://www.youku.com',
            text: 'Youku',
          },
        ],
      },
    ],
  },
});
