<!--
 * @Author: Miya
 * @Date: 2020-07-23 18:14:32
 * @LastEditors: Miya
 * @LastEditTime: 2020-08-06 23:45:22
 * @Description: 数据总量显示
 * @FilePath: /Single-Search/src/components/Admin/result.vue
-->
<template>
  <article class="admin-wrap-result">
    <div class="result-title">{{ title }}</div>
    <div class="result-sum" :class="colorClass">{{ sum }}</div>
  </article>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({})
export default class Result extends Vue {
  // @Props: title => 标题
  @Prop({ default: 'Total Links:', type: String }) public title:
    | string
    | undefined;
  // @Props: colorClass => 数字左颜色，可选颜色见var.less:54
  @Prop({ default: 'purple', type: String }) public colorClass:
    | string
    | undefined;
  // @Props: sum => 计算总数
  @Prop({ default: 190, type: Number }) public sum: number | undefined;
}
</script>

<style lang="less" scope></style>
