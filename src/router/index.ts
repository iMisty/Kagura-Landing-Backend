/*
 * @Author: Miya
 * @Date: 2020-05-27 14:28:24
 * @LastEditTime: 2020-08-08 02:53:26
 * @LastEditors: Miya
 * @Description: In User Settings Edit
 * @FilePath: /Single-Search/src/router/index.ts
 */
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';
import Admin from '@/views/Admin.tsx';
import Login from '@/views/Login.vue';

import AdminIndex from '@/components/Admin/index.tsx';
import AdminUser from '@/components/Admin/user.tsx';
import AdminLink from '@/components/Admin/link.tsx';
import AdminSetting from '@/components/Admin/extra.component.tsx';

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
        path: 'setting',
        component: AdminSetting
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
