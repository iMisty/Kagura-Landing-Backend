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
				name: '工具',
				titleIconColor: "#29f",
				class: 'iconfont icon-gongju',
				items: [
					{ icon: '', link: 'https://www.youtube.com', text: 'Youtube', class: 'iconfont icon-youtube' },
					{ icon: '', link: 'https://www.bilibili.com', text: 'Bilibili',class:'iconfont icon-bilibili' },
					{ icon: '', link: 'https://www.acfun.com', text: 'ACFun',class:'iconfont icon-acfun' },
					{ icon: '', link: 'https://www.youku.com', text: 'Youku',class:'iconfont icon-youku' },
				]
			},
			list2: {
				name: '开发',
				class: 'iconfont icon-zhongduan',
				titleIconColor: "#29f",
				items: [
					{ icon: '', link: 'https://www.youtube.com', text: 'Youtube', class: 'fa-youtube' },
					{ icon: '', link: 'https://www.bilibili.com', text: 'Bilibili' },
					{ icon: '', link: 'https://www.acfun.com', text: 'ACFun' },
					{ icon: '', link: 'https://www.youku.com', text: 'Youku' },
				]
			},
			list3: {
				name: '影视动画',
				titleIconColor: "#29f",
				class: 'fa fa-video-camera',
				items: [
					{ icon: '', link: 'https://www.youtube.com', text: 'Youtube', class: 'icon-youtube' },
					{ icon: '', link: 'https://www.bilibili.com', text: 'Bilibili',class: 'icon-bilibili' },
					{ icon: '', link: 'https://www.acfun.com', text: 'ACFun' },
					{ icon: '', link: 'https://www.youku.com', text: 'Youku' },
				]
			},
			list4: {
				name: '搜索引擎',
				class: 'fa fa-search',
				titleIconColor: "#29f",
				items: [
					{ icon: '', link: 'https://www.youtube.com', text: 'Youtube', class: 'fa-youtube' },
					{ icon: '', link: 'https://www.bilibili.com', text: 'Bilibili' },
					{ icon: '', link: 'https://www.acfun.com', text: 'ACFun' },
					{ icon: '', link: 'https://www.youku.com', text: 'Youku' },
				]
			},
			list5: {
				name: '社交',
				titleIconColor: "#29f",
				class: 'fa fa-commenting-o',
				items: [
					{ icon: '', link: 'https://www.youtube.com', text: 'Youtube', class: 'icon-youtube' },
					{ icon: '', link: 'https://www.bilibili.com', text: 'Bilibili' },
					{ icon: '', link: 'https://www.acfun.com', text: 'ACFun' },
					{ icon: '', link: 'https://www.youku.com', text: 'Youku' },
				]
			},
			list6: {
				name: '剁手',
				class: 'fa fa-shopping-cart',
				titleIconColor: "#29f",
				items: [
					{ icon: '', link: 'https://www.youtube.com', text: 'Youtube', class: 'fa-youtube' },
					{ icon: '', link: 'https://www.bilibili.com', text: 'Bilibili' },
					{ icon: '', link: 'https://www.acfun.com', text: 'ACFun' },
					{ icon: '', link: 'https://www.youku.com', text: 'Youku' },
				]
			},
			list7: {
				name: '设计视觉',
				titleIconColor: "#29f",
				class: 'iconfont icon-caijian',
				items: [
					{ icon: '', link: 'https://www.youtube.com', text: 'Youtube', class: 'icon-youtube' },
					{ icon: '', link: 'https://www.bilibili.com', text: 'Bilibili' },
					{ icon: '', link: 'https://www.acfun.com', text: 'ACFun' },
					{ icon: '', link: 'https://www.youku.com', text: 'Youku' },
				]
			},
			list8: {
				name: '邮箱',
				class: 'iconfont icon-xinfeng',
				titleIconColor: "#29f",
				items: [
					{ icon: '', link: 'https://www.youtube.com', text: 'Youtube', class: 'fa-youtube' },
					{ icon: '', link: 'https://www.bilibili.com', text: 'Bilibili' },
					{ icon: '', link: 'https://www.acfun.com', text: 'ACFun' },
					{ icon: '', link: 'https://www.youku.com', text: 'Youku' },
				]
			},

		},
		listButton: 'fa-ellipsis-h'
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