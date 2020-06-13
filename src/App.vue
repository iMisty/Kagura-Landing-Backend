<!--
 * @Description: 入口文件
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-05-25 22:54:11
 * @LastEditors: Miya
 * @LastEditTime: 2020-06-14 06:12:28
--> 
<template>
  <div id="App">
    <Home></Home>
    <Background :isInputing="bgStatus"></Background>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import Home from '@/views/Home.vue';
import Background from '@/components/background.vue';

@Component({
  // 组件注册
  components: {
    Home, Background,
  }})
export default class App extends Vue {
  private bgStatus: boolean = false;

  @Watch('this.$store.state.status.isInputing')
  private getStatus(status: boolean) {
    console.log(status);
  }

}
</script>
<style lang="less">
</style>