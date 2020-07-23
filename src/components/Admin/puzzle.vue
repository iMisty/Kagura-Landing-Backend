<!--
 * @Author: Miya
 * @Date: 2020-07-23 17:53:38
 * @LastEditors: Miya
 * @LastEditTime: 2020-07-23 18:19:42
 * @Description: 卡片式磁贴
 * @FilePath: \Single-Search\src\components\Admin\puzzle.vue
-->
<template>
  <section class="puzzle-wrap">
    <div class="puzzle-title">{{ title }}</div>
    <div class="puzzle-text">{{ text }}</div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({})
export default class Puzzle extends Vue {
  // @Props: title => 标题
  @Prop({ default: 'Test Puzzle' }) public title: unknown;
  // @Props: text => 内容
  @Prop({
    default:
      'This is a test text.This is a test text.This is a test text.This is a test Text'
  })
  public text: unknown;
}
</script>

<style lang="less" scope></style>
