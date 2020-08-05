<!--
 * @Author: Miya
 * @Date: 2020-07-23 15:36:36
 * @LastEditors: Miya
 * @LastEditTime: 2020-08-06 01:02:41
 * @Description: file content
 * @FilePath: /Single-Search/src/components/Admin/Link.vue
-->
<template>
  <div class="admin-link">
    <section class="admin-link-list">
      <link-wrap></link-wrap>
      <link-wrap></link-wrap>
      <link-wrap></link-wrap>
    </section>
    <div class="admin-link-addnew">
      +
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import linkWrap from '@/components/Admin/link/wrap.vue';
@Component({
  components: {
    'link-wrap': linkWrap
  }
})
export default class Link extends Vue {}
</script>

<style lang="less" scope></style>
