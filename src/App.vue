<!--
 * @Description: 入口文件
 * @Version: 1.0
 * @Author: Miya
 * @Date: 2020-05-25 22:54:11
 * @LastEditors: Miya
 * @LastEditTime: 2020-09-18 15:23:08
-->
<template>
  <div id="App">
    <router-view></router-view>
    <Background></Background>
    <external :src="iconsrc"></external>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Home from '@/views/Home.vue';
import Background from '@/layout/home/background.tsx';
import external from '@/components/external';

@Component({
  // 组件注册
  components: {
    Home,
    Background,
    external
  }
})
export default class App extends Vue {
  private iconsrc = '//at.alicdn.com/t/font_1874703_f3w9wcyv815.js';
}
</script>
