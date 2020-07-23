<!--
 * @Author: Miya
 * @Date: 2020-07-23 18:14:32
 * @LastEditors: Miya
 * @LastEditTime: 2020-07-23 18:34:48
 * @Description: 数据总量显示
 * @FilePath: \Single-Search\src\components\Admin\result.vue
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
  @Prop({ default: 'Total Links:' }) public title: unknown;
  // @Props: colorClass => 数字左颜色，可选颜色见var.less:54
  @Prop({ default: 'purple' }) public colorClass: unknown;
  // @Props: sum => 计算总数
  @Prop({ default: 190 }) public sum: unknown;
}
</script>

<style lang="less" scope></style>
