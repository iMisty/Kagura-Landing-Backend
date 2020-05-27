<!--
 * @Description: 搜索控件
 * @version: 1.0.0
 * @Author: Miya
 * @Date: 2020-05-26 21:41:27
 * @LastEditors: Miya
 * @LastEditTime: 2020-05-27 18:45:19
--> 
<template>
  <div class="search--bar">
    <div class="search--bar-logo">
      <img :src="logoImgSrc" alt="Logo" />
    </div>
    <div class="search--bar-wrap">
      <section class="search--bar-choose">
        <div class="search--bar-choose-engine" @click="handleSearchMenu">G</div>
        <ul class="choose-engine" :class="{'active': searchMenu}">
          <!-- TODO: 拆分为组件 -->
          <li class="choose-engine-wrap">
            <i class="fa fa-google"></i>
            <p>Google</p>
          </li>
          <li class="choose-engine-wrap">
            <i class="fa fa-google"></i>
            <p>Google</p>
          </li>
          <li class="choose-engine-wrap">
            <i class="fa fa-google"></i>
            <p>Google</p>
          </li>
          <li class="choose-engine-wrap">
            <i class="fa fa-google"></i>
            <p>Google</p>
          </li>
        </ul>
      </section>
      <section class="search--bar-input">
        <input type="text" />
      </section>
      <section class="search--bar-submit">
        <i class="fa fa-search"></i>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Vue,
  Watch,
} from 'vue-property-decorator';
@Component({})
export default class Search extends Vue {
  // Logo
  private logoImgSrc: string = require('@/assets/logo.svg');
  // 控制菜单弹出
  private searchMenu: boolean = false;

  // 弹出搜索引擎选择框
  private handleSearchMenu() {
    console.log('click');
    this.searchMenu = !this.searchMenu;
  }
}
</script>

