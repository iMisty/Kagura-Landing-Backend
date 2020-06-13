<!--
 * @Description: 自定义背景组件
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-06-14 00:02:26
 * @LastEditors: Miya
 * @LastEditTime: 2020-06-14 05:52:20
--> 
<template>
  <div class="background" :style="bgOptions" :class="{'active': isInputing}"></div>
</template>
 
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  // 组件注册
  components: {

  }})
export default class Background extends Vue {
  @Prop() private isInputing: boolean = false;

  private bgOptions: object = {
    backgroundImage: `url(${this.$store.state.status.background})`,
  };

  private getBackgroundImage(): void {
    const bgData = this.$store.state.status.background;
  }

  private methods() {
    this.getBackgroundImage();
  }
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
  opacity: 0.8;
  background-repeat: no-repeat;
  background-size: cover;
  transition: .4s;
}
.active {
  filter: blur(8px);
  transform: scale(1.2);
  transition: .4s;
}
</style>
