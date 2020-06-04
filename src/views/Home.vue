<!--
 * @Description: 首页前端页面
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-05-27 01:24:20
 * @LastEditors: Miya
 * @LastEditTime: 2020-06-05 00:18:21
--> 
<template>
  <div class="home">
    <section class="home--top">
      <button class="list--button">
        <img :src="listButtonSrc" alt />
      </button>
    </section>
    <section class="home--medium">
      <Search></Search>
      <Hitokoto :hito="hitorikoto"></Hitokoto>
    </section>
    <section class="home--bottom">
      <Copyright></Copyright>
    </section>
    <section class="home--list">
      <List></List>
    </section>
    <transition name="fadeIn">
      <section class="home--mask"></section>
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
  // 链接图标
  private listButtonSrc: string = require('@/assets/menu.png');
  // 一言
  // private hitorikoto: string = '加载中...';
  private hitorikoto: string = '风淅淅，雨纤纤。难怪春愁细细添。';
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

  // create
  private created() {
    const a = '';
  }

  // mounted
  private mounted() {
    // this.getHitokoto();
  }
}
</script>