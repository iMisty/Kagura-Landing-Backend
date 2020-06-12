<!--
 * @Description: 首页前端页面
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-05-27 01:24:20
 * @LastEditors: Miya
 * @LastEditTime: 2020-06-13 00:06:33
--> 
<template>
  <div class="home">
    <section class="home--top">
      <button class="list--button" @click="handleOpenLink">
        <Icon :class="{'click': isLinkOpen}"></Icon>
      </button>
    </section>
    <section class="home--medium">
      <!-- TODO: 鼠标移动到此处时会连续触发openSearchMenu事件 -->
      <Search
        :searchMenu="searchMenu"
        @handleSearchMenu="openSearchMenu"
        @closeSearchMenu="closeSearchMenu"
      ></Search>
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
// 链接图标
import Icon from '@/components/icon.vue';
// 链接列表
import List from '@/components/list.vue';
// 搜索框
import Search from '@/components/search.vue';

@Component({
  // 组件注册
  components: {
    Icon,
    List,
    Search,
    Hitokoto: () => import('@/components/hitokoto.vue'),
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

  // props

  // methods
  /**
   * @description: 一言加载
   * @param {type}
   * @return:
   * @author: Miya
   */
  private getHitokoto(): void {
    axios
      .get('https://v1.hitokoto.cn')
      .then(({ data }) => {
        this.hitorikoto = data.hitokoto;
      })
      .catch(console.error);
  }

  /**
   * @description: 控制搜索框左侧搜索引擎选择框
   * @param {type}
   * @return:
   * @author: Miya
   */
  private openSearchMenu(): void {
    if (this.searchMenu === true) {
      return;
    }
    this.searchMenu = true;
  }
  private closeSearchMenu(): void {
    this.searchMenu = false;
  }

  /**
   * @description: 控制右侧默认隐藏的链接列表栏
   * @param {type}
   * @return:
   * @author: Miya
   */
  private handleOpenLink(): void {
    this.isLinkOpen = !this.isLinkOpen;
    this.isMask = !this.isMask;
  }
  private handleCloseLink(): void {
    this.isMask = false;
    this.searchMenu = false;
    if (this.isLinkOpen !== true) {
      return;
    }
    this.isLinkOpen = false;
  }

  // mounted
  private mounted() {
    // this.getHitokoto();
  }
}
</script>