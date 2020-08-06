<!--
 * @Author: Miya
 * @Date: 2020-07-23 17:53:38
 * @LastEditors: Miya
 * @LastEditTime: 2020-08-07 00:46:56
 * @Description: 卡片式磁贴
 * @FilePath: /Single-Search/src/components/Admin/puzzle.vue
-->
<template>
  <section class="puzzle-wrap" :class="[rowClass, columnClass]">
    <slot>
      <div class="puzzle-title">{{ title }}</div>
      <div class="puzzle-text">{{ text }}</div>
    </slot>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({})
export default class Puzzle extends Vue {
  // @Props: title => 标题
  @Prop({ default: 'Test Puzzle', type: String }) public title:
    | string
    | undefined;
  // @Props: text => 内容
  @Prop({
    default:
      'This is a test text.This is a test text.This is a test text.This is a test Text',
    type: String
  })
  public text: string | undefined;
  // 组件占用的空间
  @Prop({ default: 1 }) private row: number | undefined;
  @Prop({ default: 1 }) private column: number | undefined;

  // computed
  get rowClass() {
    return `row-${this.row}`;
  }
  get columnClass() {
    return `column-${this.column}`;
  }
}
</script>

<style lang="less" scope></style>
