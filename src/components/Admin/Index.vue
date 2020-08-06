<!--
 * @Author: Miya
 * @Date: 2020-07-23 15:49:17
 * @LastEditors: Miya
 * @LastEditTime: 2020-08-07 00:47:22
 * @Description: 后台管理首页
 * @FilePath: /Single-Search/src/components/Admin/Index.vue
-->
<template>
  <div class="admin-index">
    <section class="admin-wrap-puzzle">
      <puzzle :row="2" :column="2"></puzzle>
      <puzzle></puzzle>
      <puzzle></puzzle>
      <puzzle></puzzle>
      <puzzle></puzzle>
      <puzzle></puzzle>
      <puzzle></puzzle>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import puzzle from '@/components/Admin/puzzle.vue';
@Component({
  components: {
    puzzle
  }
})
export default class Index extends Vue {}
</script>

<style lang="less" scope></style>
