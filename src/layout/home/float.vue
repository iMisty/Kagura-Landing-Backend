<!--
 * @Author: Miya
 * @Date: 2020-08-25 22:46:34
 * @LastEditors: Miya
 * @LastEditTime: 2020-08-25 22:47:18
 * @Description: 首页浮动栏配置
 * @FilePath: /Single-Search/src/layout/home/float.vue
-->
<template>
  <section
    class="home__mask"
    :class="{ 'mask-active': isMask }"
    @click="handleClose"
  ></section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class HomeFloat extends Vue {}
</script>
<style lang="less"></style>
