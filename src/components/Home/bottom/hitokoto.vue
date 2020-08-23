<!--
 * @Description: 一言模块
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-05-27 01:24:20
 * @LastEditors: Miya
 * @LastEditTime: 2020-08-23 23:49:02
-->
<template>
  <div class="hitokoto">{{ hito }}</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({})
export default class Hitokoto extends Vue {
  @Prop({ default: '加载中...', type: String }) public hito!: string;
}
</script>
<style lang="less"></style>
