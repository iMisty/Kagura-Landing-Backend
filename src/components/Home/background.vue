<!--
 * @Description: 自定义背景组件
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-06-14 00:02:26
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-15 16:04:17
--> 
<template>
  <div class="background" :style="bgOptions" :class="{'bg-active': isInputing}"></div>
</template>
 
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  // 组件注册
  components: {

  }})
export default class Background extends Vue {
  @Prop() private isInputing: boolean = false;

  // 存储从 Vuex 中获取的背景图片
  private bgOptions: object = {
    backgroundImage: `url(${this.$store.state.status.background})`,
  };
}
</script>
<style lang="less" scoped>
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -2;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition-duration: 0.2s;
}
.bg-active {
  transform: scale(1.04);
  filter: blur(10px);
}
</style>
