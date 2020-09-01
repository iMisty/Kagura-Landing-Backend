<!--
 * @Description: 入口文件
 * @Version: 1.0
 * @Author: Miya
 * @Date: 2020-05-25 22:54:11
 * @LastEditors: Miya
 * @LastEditTime: 2020-09-01 22:21:28
-->
<template>
  <div id="App">
    <router-view></router-view>
    <!-- <Background :isInputing="bgStatus"></Background> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import Home from '@/views/Home.vue';
import Background from '@/layout/home/background.tsx';

@Component({
  // 组件注册
  components: {
    Home,
    Background
  }
})
export default class App extends Vue {
  private bgStatus: boolean = false;

  get backgroundStatus() {
    return this.$store.state.status.is_inputing;
  }

  @Watch('backgroundStatus')
  private getBackgroundStatus(stat: boolean) {
    this.bgStatus = stat;
  }
}
</script>
