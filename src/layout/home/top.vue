<!--
 * @Author: Miya
 * @Date: 2020-08-25 22:12:10
 * @LastEditors: Miya
 * @LastEditTime: 2020-08-25 22:42:53
 * @Description: 首页顶部配置
 * @FilePath: /Single-Search/src/layout/home/top.vue
-->
<template>
  <section class="home__top">
    <button class="list--button" @click="handleOpenSetting">
      <img src="@/icons/svg/avatar.svg" alt />
    </button>
    <button class="list--button" @click="handleOpenLink">
      <Icon :class="{ click: isLinkOpen, click: isSettingOpen }">
        <span class="line top"></span>
        <span class="line medium"></span>
        <span class="line bottom"></span>
      </Icon>
    </button>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class HomeTop extends Vue {}
</script>
<style lang="less"></style>
