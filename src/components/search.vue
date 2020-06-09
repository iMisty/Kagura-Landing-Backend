<!--
 * @Description: 搜索控件
 * @version: 1.0.0
 * @Author: Miya
 * @Date: 2020-05-26 21:41:27
 * @LastEditors: Miya
 * @LastEditTime: 2020-06-09 23:32:13
--> 
<template>
  <div class="search--bar">
    <div class="search--bar-logo">
      <img :src="logoImgSrc" alt="Logo" />
    </div>
    <div class="search--bar-wrap" :class="{'inputing': isInputing}">
      <section class="search--bar-choose" @mouseover="handleSearchMenu">
        <div class="search--bar-choose-engine">G</div>
        <ul class="choose-engine" :class="{'active': searchMenu}">
          <!-- TODO: 拆分为组件 -->
          <li class="choose-engine-wrap" data-value="0">
            <i class="fa fa-google"></i>
            <p class="choose-engine-wrap-text">Google</p>
          </li>
          <li class="choose-engine-wrap" data-value="1">
            <i class="fa fa-edge"></i>
            <p class="choose-engine-wrap-text">Bing</p>
          </li>
          <li class="choose-engine-wrap" data-value="2">
            <i class="fa fa-yahoo"></i>
            <p class="choose-engine-wrap-text">Yahoo</p>
          </li>
          <li class="choose-engine-wrap" data-value="3">
            <i class="fa fa-trash"></i>
            <p class="choose-engine-wrap-text">Baidu</p>
          </li>
        </ul>
      </section>
      <section class="search--bar-input">
        <input
          type="text"
          placeholder="请输入搜索内容"
          v-model="searchText"
          @click="handleInput"
          @blur="cancelInput"
        />
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
  @Prop()
  public searchMenu: boolean = false;
  // Logo
  private logoImgSrc: string = require('@/assets/logo.svg');
  // 控制搜索框样式
  private isInputing: boolean = false;
  // 搜索框文字
  private searchText: string = '';

  // 弹出搜索引擎选择框
  public handleSearchMenu(): void {
    this.$emit('handleSearchMenu');
  }
  public closeSearchMenu(): void {
    this.$emit('closeSearchMenu');
  }
  // 切换点击 input 时输入框样式
  private handleInput() {
    this.isInputing = true;
  }
  private cancelInput() {
    this.isInputing = false;
  }
}
</script>

