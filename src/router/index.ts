/*
 * @Author: Miya
 * @Date: 2020-05-27 14:28:24
 * @LastEditTime: 2020-07-24 10:56:15
 * @LastEditors: Miya
 * @Description: In User Settings Edit
 * @FilePath: \Single-Search\src\router\index.ts
 */
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';
import Admin from '@/views/Admin.vue';

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
  }
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
