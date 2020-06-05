<!--
 * @Description: 首页前端页面
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-05-27 01:24:20
 * @LastEditors: Miya
 * @LastEditTime: 2020-06-06 01:20:36
--> 
<template>
  <div class="home">
    <section class="home--top">
      <button class="list--button" @click="handleOpenLink">
        <img :src="listButtonSrc" alt />
      </button>
    </section>
    <section class="home--medium">
      <Search :searchMenu="searchMenu" @handleSearchMenu="loadMask"></Search>
      <Hitokoto :hito="hitorikoto"></Hitokoto>
    </section>
    <section class="home--bottom">
      <Copyright></Copyright>
    </section>
    <section class="home--list" :class="{'link-active': isLinkOpen}">
      <List></List>
    </section>
    <transition name="fadeIn">
      <section class="home--mask" :class="{ 'active': isMask }" @click="handleCloseLink"></section>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';
// 链接列表
import List from '@/components/list.vue';
// 搜索框
import Search from '@/components/search.vue';
// 一言
import Hitokoto from '@/components/hitokoto.vue';

@Component({
  // 组件注册
  components: {
    List,
    Search,
    Hitokoto,
    Copyright: () => import('@/components/copyright.vue'),
  },
})
export default class Home extends Vue {
  // data
  public searchMenu: boolean = false;
  // 链接图标
  private listButtonSrc: string = require('@/assets/menu.png');
  // 控制链接开关
  private isLinkOpen: boolean = false;
  // 控制蒙版开关
  private isMask: boolean = false;
  // 一言
  // private hitorikoto: string = '加载中...';
  private hitorikoto: string = '风淅淅，雨纤纤。难怪春愁细细添。';

  private loadMask(): void {
    this.isMask = true;
    this.searchMenu = true;
  }
  // props

  // methods
  // 加载一言
  private getHitokoto(): void {
    axios.get('https://v1.hitokoto.cn')
      .then(({ data }) => {
        this.hitorikoto = data.hitokoto;
      })
      .catch(console.error);
  }
  // 开启链接表
  private handleOpenLink(): void {
    this.isLinkOpen = true;
    this.isMask = true;
  }
  // 关闭链接表
  private handleCloseLink(): void {
    this.isLinkOpen = false;
    this.isMask = false;
    this.searchMenu = false;
  }

  // mounted
  private mounted() {
    // this.getHitokoto();
  }
}
</script>