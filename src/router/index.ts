/*
 * @Author: Miya
 * @Date: 2020-05-27 14:28:24
 * @LastEditTime: 2020-07-24 17:52:01
 * @LastEditors: Miya
 * @Description: In User Settings Edit
 * @FilePath: \Single-Search\src\router\index.ts
 */
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';
import Admin from '@/views/Admin.vue';
import Login from '@/views/Login.vue';

import AdminIndex from '@/components/Admin/Index.vue';
import AdminUser from '@/components/Admin/User.vue';
import AdminLink from '@/components/Admin/Link.vue';
import AdminExtra from '@/components/Admin/Extra.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    redirect: '/',
    children: [
      {
        path: '/',
        component: AdminIndex
      },
      {
        path: 'link',
        component: AdminLink
      },
      {
        path: 'user',
        component: AdminUser
      },
      {
        path: 'extra',
        component: AdminExtra
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
