<!--
 * @Description: 后台管理
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-06-02 00:04:25
 * @LastEditors: Miya
 * @LastEditTime: 2020-08-07 18:50:35
-->
<template>
  <div class="admin">
    <section class="admin-top">
      <div class="admin-top-logo">
        <img :src="logo" alt="test logo" />
      </div>
      <div class="admin-top-title">
        DashBoard
      </div>
    </section>
    <section class="admin-left">
      <Router
        v-for="item in router"
        :key="item.index"
        :path="item.path"
        :title="item.title"
        :name="item.name"
      ></Router>
    </section>
    <section class="admin-wrap">
      <section class="admin-wrap-left">
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </section>
      <!-- <Right></Right> -->
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// 导入SVG相关
import Svgicon from '@/components/svgicon.vue';
// import Right from '@/components/Admin/Right.vue';
import Router from '@/components/Admin/Router.vue';
// 后台路由模型
import Routes from '@/model/routes';

import '@/icons/svg/admin';

@Component({
  // 组件注册
  components: {
    Svgicon,
    Router
    // Right
  }
})
export default class Admin extends Vue {
  // 临时变量
  private logo: any = require('@/assets/logo.png');
  private router: Routes[] = [
    { path: '/admin', title: 'shouye', name: 'HOME' },
    { path: '/admin/user', title: 'gaojiban', name: 'USER' },
    { path: '/admin/link', title: 'piliangxiugai', name: 'LINK' },
    { path: '/admin/setting', title: 'bianji', name: 'SETTING' }
  ];
}
</script>
