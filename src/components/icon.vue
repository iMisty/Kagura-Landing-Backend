<!--
 * @Description: 右上角点击按钮
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-06-08 00:41:53
 * @LastEditors: Miya
 * @LastEditTime: 2020-06-08 01:48:47
--> 
<template>
  <div class="index-icon" :class="{'click': isActive}">
    <span class="line top"></span>
    <span class="line medium"></span>
    <span class="line bottom"></span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  // 组件注册
  components: {

  }})
export default class Icon extends Vue {
  // data
  public isActive: boolean = false;
  // methods
  public changeIcon(): void {
    console.log('aa');
    this.$emit('a', this.isActive);
  }
}
</script>