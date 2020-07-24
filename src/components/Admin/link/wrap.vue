<!--
 * @Author: Miya
 * @Date: 2020-07-24 12:02:49
 * @LastEditors: Miya
 * @LastEditTime: 2020-07-24 15:48:49
 * @Description: 链接块
 * @FilePath: \Single-Search\src\components\Admin\link\wrap.vue
-->
<template>
  <section class="admin-link-types">
    <header class="admin-link-types-title">
      <input
        class="item-title"
        type="text"
        name="title"
        value="Test1"
        disabled="true"
      />
    </header>
    <article class="admin-link-types-wrap">
      <list-item></list-item>
      <list-item></list-item>
      <list-item></list-item>
    </article>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ListItem from '@/components/Admin/link/item.vue';
@Component({
  components: {
    'list-item': ListItem
  }
})
export default class LinkWrap extends Vue {}
</script>

<style lang="less" scope></style>
