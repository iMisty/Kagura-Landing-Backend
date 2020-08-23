<!--
 * @Description: 入口文件
 * @Version: 1.0
 * @Author: Miya
 * @Date: 2020-05-25 22:54:11
 * @LastEditors: Miya
 * @LastEditTime: 2020-08-24 00:15:37
-->
<template>
  <div id="App">
    <router-view></router-view>
    <Background :isInputing="bgStatus"></Background>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import Home from '@/views/Home.vue';
import Background from '@/components/Home/bottom/background.vue';

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
    return this.$store.state.status.isInputing;
  }

  @Watch('backgroundStatus')
  private getBackgroundStatus(val: boolean) {
    this.bgStatus = val;
  }
}
</script>
<style lang="less"></style>
