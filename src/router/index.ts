/*
 * @Author: Miya
 * @Date: 2020-05-27 14:28:24
 * @LastEditTime: 2020-09-04 01:50:56
 * @LastEditors: Miya
 * @Description: In User Settings Edit
 * @FilePath: /Single-Search/src/router/index.ts
 */
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';
import Admin from '@/views/Admin.tsx';
import Login from '@/views/Login.tsx';

import AdminIndex from '@/layout/admin';
import AdminUser from '@/layout/admin/user';
import AdminLink from '@/layout/admin/link';
import AdminSetting from '@/layout/admin/setting';

Vue.use(VueRouter);

// push
const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
  // @ts-ignore
  return VueRouterPush.call(this, to).catch((err: any) => {
    console.log(err);
  });
};

// replace
const VueRouterReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(to) {
  // @ts-ignore
  return VueRouterReplace.call(this, to).catch((err: any) => {
    console.log(err);
  });
};

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

router.beforeEach((to, from, next) => {
  if (to.path !== '/admin') {
    next();
  } else {
    const token = localStorage.getItem('token');
    // const token =
    //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLC.caAFsUUgzA0bPJtKfkH-4Hk';
    if (token) {
      next();
    } else {
      router.push({
        path: 'login'
      });
    }
  }
});

export default router;
