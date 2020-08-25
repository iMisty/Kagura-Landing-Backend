<!--
 * @Author: Miya
 * @Date: 2020-08-25 22:45:11
 * @LastEditors: Miya
 * @LastEditTime: 2020-08-25 22:45:46
 * @Description: 首页右边栏设置
 * @FilePath: /Single-Search/src/layout/home/rightbar.vue
-->
<template>
  <transition-group
    class="home__rightbar"
    :class="{ 'link-active': isLinkOpen, 'setting-active': isSettingOpen }"
    tag="section"
    name="slide"
  >
    <section class="home__list" v-show="isLinkOpen" :key="1">
      <List></List>
    </section>
    <section class="home__setting" v-show="isSettingOpen" :key="2">
      <Setting></Setting>
    </section>
  </transition-group>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class HomeRightBar extends Vue {}
</script>
<style lang="less"></style>
