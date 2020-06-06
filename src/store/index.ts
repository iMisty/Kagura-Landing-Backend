/*
 * @Description: Vuex
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-05-25 22:54:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-06 14:55:37
 */
import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import {mutations} from './mutations';
import {actions} from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state,
  mutations,
  actions,
});

