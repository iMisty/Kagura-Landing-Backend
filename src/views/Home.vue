<!--
 * @Description: 首页前端页面
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-05-27 01:24:20
 * @LastEditors: Miya
 * @LastEditTime: 2020-05-27 02:22:40
--> 
<template>
  <div class="home">
    <section class="home--top">
      <List></List>
    </section>
    <section class="home--medium">
      <Search></Search>
      <Hitokoto></Hitokoto>
    </section>
    <section class="home--bottom">
      <Copyright></Copyright>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

// 链接列表
import List from '@/components/list.vue';
// 搜索框
import Search from '@/components/search.vue';
// 一言
import Hitokoto from '@/components/hitokoto.vue';
// 版权声明
import Copyright from '@/components/copyright.vue';

@Component({
  // 组件注册
  components: {
    List,
    Search,
    Hitokoto,
    Copyright,
  },
})
export default class Home extends Vue {
  // data

  // props

  // create
  private created() {
    const a = '';
  }

  // mounted
  private mounted() {
    const a = '';
  }
}
</script>