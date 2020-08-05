<!--
 * @Description: 后台管理
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-06-02 00:04:25
 * @LastEditors: Miya
 * @LastEditTime: 2020-08-05 23:24:28
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
      <router-link class="icon" to="/admin" tag="div">
        <Svgicon
          class="svg-title-icon"
          :svgClass="icon"
          :iconClass="title[0]"
          :iconName="title[0]"
        ></Svgicon
      ></router-link>
      <router-link class="icon" to="/admin/user" tag="div">
        <Svgicon
          class="svg-title-icon"
          :svgClass="icon"
          :iconClass="title[1]"
          :iconName="title[1]"
        ></Svgicon
      ></router-link>
      <router-link class="icon" to="/admin/link" tag="div">
        <Svgicon
          class="svg-title-icon"
          :svgClass="icon"
          :iconClass="title[2]"
          :iconName="title[2]"
        ></Svgicon
      ></router-link>
      <router-link class="icon" to="/admin/extra" tag="div">
        <Svgicon
          class="svg-title-icon"
          :svgClass="icon"
          :iconClass="title[3]"
          :iconName="title[3]"
        ></Svgicon
      ></router-link>
    </section>
    <section class="admin-wrap">
      <section class="admin-wrap-left">
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </section>
      <Right></Right>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// 导入SVG相关
import Svgicon from '@/components/svgicon.vue';
import Right from '@/components/Admin/Right.vue';
import '@/icons/svg/admin';

@Component({
  // 组件注册
  components: {
    Svgicon,
    Right
  }
})
export default class Admin extends Vue {
  // 临时变量
  private icon: string = 'icon';
  private title: string[] = ['shouye', 'gaojiban', 'piliangxiugai', 'bianji'];
  private logo: any = require('@/assets/logo.png');

}
</script>
