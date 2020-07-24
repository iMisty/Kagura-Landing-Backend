<!--
 * @Author: Miya
 * @Date: 2020-07-24 12:02:49
 * @LastEditors: Miya
 * @LastEditTime: 2020-07-24 12:08:43
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
      <div class="item">
        <div class="item-icons">
          <input
            class="item-wrap item-icon"
            type="text"
            name="test"
            value="iconfont-google"
          />
        </div>
        <input
          class="item-wrap item-name"
          type="text"
          name="test"
          value="Google"
          disabled="true"
        />
        <input
          class="item-wrap item-href"
          type="text"
          name="test"
          value="https://www.google.com"
          disabled="true"
        />
      </div>
      <div class="item">
        <div class="item-icons">
          <input
            class="item-wrap item-icon"
            type="text"
            name="test"
            value="iconfont-google"
          />
        </div>
        <input
          class="item-wrap item-name"
          type="text"
          name="test"
          value="Google"
          disabled="true"
        />
        <input
          class="item-wrap item-href"
          type="text"
          name="test"
          value="https://www.google.com"
          disabled="true"
        />
      </div>
      <div class="item">
        <div class="item-icons">
          <input
            class="item-wrap item-icon"
            type="text"
            name="test"
            value="iconfont-google"
          />
        </div>
        <input
          class="item-wrap item-name"
          type="text"
          name="test"
          value="Google"
          disabled="true"
        />
        <input
          class="item-wrap item-href"
          type="text"
          name="test"
          value="https://www.google.com"
          disabled="true"
        />
      </div>
    </article>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({})
export default class LinkWrap extends Vue {}
</script>

<style lang="less" scope></style>
