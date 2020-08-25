<!--
 * @Author: Miya
 * @Date: 2020-08-25 22:41:54
 * @LastEditors: Miya
 * @LastEditTime: 2020-08-25 22:42:46
 * @Description: 首页主体部分
 * @FilePath: /Single-Search/src/layout/home/medium.vue
-->
<template>
  <section class="home__medium">
    <!-- TODO: 鼠标移动到此处时会连续触发openSearchMenu事件 -->
    <Search :searchMenu="searchMenu" @submit.once="submitSearchText"></Search>
    <Hitokoto :hito="hitorikoto" v-show="hitorikoto"></Hitokoto>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class HomeMedium extends Vue {}
</script>
<style lang="less"></style>
