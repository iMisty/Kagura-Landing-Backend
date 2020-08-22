<!--
 * @Author: Miya
 * @Date: 2020-06-24 21:38:13
 * @LastEditors: Miya
 * @LastEditTime: 2020-08-24 00:25:35
 * @Description: 背景图片设置
 * @FilePath: /Single-Search/src/components/Home/bottom/background.vue
-->

<template>
  <div
    class="background"
    :class="{ 'bg-active': isInputing }"
    :style="bgOptions"
  ></div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import '../../../style/home/bottom/background.less';
@Component({})
export default class Background extends Vue {
  @Prop() private isInputing: any = false;

  // 存储从 Vuex 中获取的背景图片
  private bgOptions: object = {
    // backgroundImage: `url(${this.$store.state.settings.background})`
  };
}
</script>
<style lang="less"></style>
