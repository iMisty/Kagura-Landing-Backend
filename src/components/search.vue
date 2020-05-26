<!--
 * @Description: 搜索控件
 * @version: 1.0.0
 * @Author: Miya
 * @Date: 2020-05-26 21:41:27
 * @LastEditors: Miya
 * @LastEditTime: 2020-05-26 22:01:38
--> 
<template>
  <div class="search--bar">
    <div class="search--bar-logo">
      <img :src="logoImgSrc" alt="Logo">
    </div>
    <div class="search--bar-wrap">
      <section class="search--bar-choose">
        <div class="search--bar-choose-engine">G</div>
        <ul class="choose-engine" style="display: none;">
          <li>G</li>
          <li>B</li>
          <li>B</li>
          <li>Y</li>
        </ul>
      </section>
      <section class="search--bar-input">
        <input type="text">
      </section>
      <section class="search--bar-submit">
        <i class="fa fa-2x fa-search"></i>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator';
@Component({

})
export default class Search extends Vue {
  // Logo
  private logoImgSrc: string = require('@/assets/logo.svg');
}
</script>

