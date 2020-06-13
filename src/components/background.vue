<!--
 * @Description: 自定义背景组件
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-06-14 00:02:26
 * @LastEditors: Miya
 * @LastEditTime: 2020-06-14 00:04:43
--> 
<template>
  <div class="background" :style="background-image:{{backgroundImage}}"></div>
</template>
 
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  // 组件注册
  components: {

  }})
export default class Background extends Vue {
  @Prop() public backgroundImage: unknown;
}
 </script>