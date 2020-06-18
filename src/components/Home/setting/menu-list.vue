<!--
 * @Author: your name
 * @Date: 2020-06-18 11:21:42
 * @LastEditTime: 2020-06-18 12:34:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Single-Search/src/components/Home/setting/menu.vue
--> 
<template>
  <div class="setting--menu-list">
    <menus></menus>
    <menus></menus>
    <menus></menus>
    <menus></menus>
    <menus></menus>
    <menus></menus>
    <menus></menus>
    <menus></menus>
    <menus></menus>
    <menus></menus>
    <menus></menus>
    <menus></menus>
    <menus></menus>
    <menus></menus>
    <menus></menus>
    <menus></menus>
    <menus></menus>
    <menus></menus>
    <menus></menus>
    <menus></menus>
    <menus></menus>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import menus from '@/components/Home/setting/menu.vue';

@Component({
  components: {
    menus
  }
})
export default class MenuList extends Vue {}
</script>
