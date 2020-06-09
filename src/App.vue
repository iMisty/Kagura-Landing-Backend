<!--
 * @Description: 入口文件
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-05-25 22:54:11
 * @LastEditors: Miya
 * @LastEditTime: 2020-06-10 00:50:20
--> 
<template>
  <div id="App">
    <Home></Home>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Home from '@/views/Home.vue';

@Component({
  // 组件注册
  components: {
    Home,
  }})
export default class App extends Vue {

}
</script>
<style lang="less">
</style>