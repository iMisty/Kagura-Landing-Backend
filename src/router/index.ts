/*
 * @Author: Miya
 * @Date: 2020-05-27 14:28:24
 * @LastEditTime: 2020-08-18 23:57:19
 * @LastEditors: Miya
 * @Description: In User Settings Edit
 * @FilePath: /Single-Search/src/router/index.ts
 */
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';
import Admin from '@/views/Admin.tsx';
import Login from '@/views/Login.tsx';

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
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/test')
  }
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
});

// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     next();
//   } else {
//     const token =
//       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLC.caAFsUUgzA0bPJtKfkH-4Hk';
//     if (token) {
//       next();
//     } else {
//       router.push({
//         name: 'login'
//       });
//     }
//   }
// });

export default router;
