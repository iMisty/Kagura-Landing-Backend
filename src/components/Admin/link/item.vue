<!--
 * @Author: Miya
 * @Date: 2020-07-24 15:47:05
 * @LastEditors: Miya
 * @LastEditTime: 2020-07-31 15:31:11
 * @Description: file content
 * @FilePath: \Single-Search\src\components\Admin\link\item.vue
-->
<template>
  <div class="admin-item">
    <div class="admin-item-icons">
      <input
        class="admin-item-wrap admin-item-icon"
        type="text"
        name="test"
        value="iconfont-google"
      />
    </div>
    <input
      class="admin-item-wrap admin-item-name"
      type="text"
      name="test"
      value="Google"
      disabled="true"
    />
    <input
      class="admin-item-wrap admin-item-href"
      type="text"
      name="test"
      value="https://www.google.com"
      disabled="true"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({})
export default class LinkItem extends Vue {}
</script>

<style lang="less" scope></style>
