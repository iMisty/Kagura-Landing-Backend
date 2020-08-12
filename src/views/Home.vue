<!--
 * @Description: 首页前端页面
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-05-27 01:24:20
 * @LastEditors: Miya
 * @LastEditTime: 2020-08-13 00:16:46
-->
<template>
  <div class="home">
    <!-- Top start -->
    <section class="home--top">
      <button class="list--button" @click="handleOpenSetting">
        <img src="@/icons/svg/avatar.svg" alt />
      </button>
      <button class="list--button" @click="handleOpenLink">
        <Icon :class="{ click: isLinkOpen, click: isSettingOpen }">
          <span class="line top"></span>
          <span class="line medium"></span>
          <span class="line bottom"></span>
        </Icon>
      </button>
    </section>
    <!-- Top end -->

    <!-- Medium start -->
    <section class="home--medium">
      <!-- TODO: 鼠标移动到此处时会连续触发openSearchMenu事件 -->
      <Search :searchMenu="searchMenu" @submit="submitSearchText"></Search>
      <Hitokoto :hito="hitorikoto" v-show="hitorikoto"></Hitokoto>
    </section>
    <!-- Medium end -->

    <!-- Bottom start -->
    <section class="home--bottom">
      <Copyright></Copyright>
    </section>
    <!-- Bottom end -->

    <transition-group
      class="home--rightbar"
      :class="{ 'link-active': isLinkOpen, 'setting-active': isSettingOpen }"
      tag="section"
      name="slide"
    >
      <section class="home--list" v-show="isLinkOpen" :key="1">
        <List></List>
      </section>
      <section class="home--setting" v-show="isSettingOpen" :key="2">
        <Setting></Setting>
      </section>
    </transition-group>
    <section
      class="home--mask"
      :class="{ 'mask-active': isMask }"
      @click="handleClose"
    ></section>
    <!-- Float & Extra end -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import '@/style/home/style.less';
// 链接图标
import Icon from '@/components/icon.component.tsx';
// 设置边栏
import Setting from '@/components/Home/setting.component.tsx';
// 链接列表
import List from '@/components/Home/list.component.tsx';
// 搜索框
import Search from '@/components/Home/search/search.vue';
// 计算搜索结果web工具函数
import { computedSearch } from '@/services/computedSearch.ts';
import { GET } from '@/services/ajax';

@Component({
  // 组件注册
  components: {
    Icon,
    Setting,
    List,
    Search,
    Hitokoto: () => import('@/components/Home/hitokoto.component.tsx'),
    Copyright: () => import('@/components/Home/copyright.component.tsx')
  }
})
export default class Home extends Vue {
  // data
  public searchMenu: boolean = false;
  // 链接图标
  private listButtonSrc: string = require('@/assets/menu.png');
  // 控制设置边栏开关
  private isSettingOpen: boolean = false;
  // 控制链接开关
  private isLinkOpen: boolean = false;
  // 控制蒙版开关
  private isMask: boolean = false;
  // 一言
  private hitorikoto: string | undefined = '加载中...';

  // methods
  /**
   * @description: 一言加载
   * @param {type}
   * @return: void
   * @author: Miya
   */
  private async getHitokoto() {
    const status = this.$store.state.settings.home.hitokoto;
    console.log(status);
    if (status === false) {
      this.hitorikoto = undefined;
      return;
    }
    const getHitokotoData = await GET('https://v1.hitokoto.cn');
    this.hitorikoto = getHitokotoData.data.hitokoto;
  }

  /**
   * @description: 控制搜索框左侧搜索引擎选择框
   * @param {type}
   * @return:
   * @author: Miya
   */
  private openSearchMenu(): void {
    this.searchMenu = true;
  }
  private closeSearchMenu(): void {
    this.searchMenu = false;
  }

  /**
   * @description: 控制左侧默认隐藏的设置栏
   * @param {type}
   * @return:
   * @author: Miya
   */
  private handleOpenSetting(): void {
    this.isSettingOpen = !this.isSettingOpen;
    this.isMask = !this.isMask;
  }

  /**
   * @description: 控制右侧默认隐藏的链接列表栏
   * @param {type}
   * @return:
   * @author: Miya
   */
  private handleOpenLink(): void {
    this.isLinkOpen = !this.isLinkOpen;
    this.isSettingOpen = !this.isSettingOpen;
    this.isMask = !this.isMask;
  }

  /**
   * @description: 控制蒙版隐藏
   * @param {type}
   * @return:
   * @author: Miya
   */
  private handleClose(): void {
    this.isMask = false;
    this.searchMenu = false;
    this.isLinkOpen = false;
    this.isSettingOpen = false;
  }

  /**
   * @description: 提交搜索关键词
   * @param {type}
   * @return:
   * @author: Miya
   */
  private async submitSearchText(
    search: string,
    value: string,
    extra: string | undefined
  ) {
    const searchSiteText = computedSearch(search);
    const address = `${searchSiteText}${value}${extra}`;
    console.log(searchSiteText + value + extra);
    window.open(address);
  }

  // mounted
  private mounted() {
    this.getHitokoto();
  }
}
</script>
<style lang="less" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.2s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
}
</style>
