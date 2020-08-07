<!--
 * @Description: 入口文件
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-05-25 22:54:11
 * @LastEditors: Miya
 * @LastEditTime: 2020-06-18 01:16:57
-->
<template>
  <div id="App">
    <router-link to="/admin"></router-link>
    <router-view></router-view>
    <!-- <Home></Home> -->
    <Background :isInputing="bgStatus"></Background>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import Home from '@/views/Home.vue';
import Background from '@/components/Home/background.vue';

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
