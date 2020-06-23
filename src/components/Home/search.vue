<!--
 * @Description: 搜索控件
 * @version: 1.0.0
 * @Author: Miya
 * @Date: 2020-05-26 21:41:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-23 17:00:39
--> 
<template>
  <div class="search--bar">
    <div class="search--bar-logo">
      <img :src="logoImgSrc" alt="Logo" />
    </div>
    <div class="search--bar-wrap" :class="{'inputing': isInputing}">
      <section class="search--bar-choose" @mouseover="handleSearchMenu" @mouseout="closeSearchMenu">
        <div class="search--bar-choose-engine" :data-choose="choose">
          <Svgicon class="svg-title-icon" :svgClass="icon" :iconClass="choose" :iconName="choose"></Svgicon>
        </div>
        <ul class="choose-engine" :class="{'active': searchMenu}">
          <choose
            v-for="(item,i) in searchChoose"
            :key="i"
            :value="item.text"
            :iconValue="item.icon"
            @choose="handleChooseSearch(i)"
          ></choose>
        </ul>
      </section>
      <section class="search--bar-input">
        <input
          type="text"
          placeholder="请输入搜索内容"
          v-model="searchText"
          @click="handleInput"
          @blur="cancelInput"
          @keydown.enter="submitSearchText"
          @input="getExtraValue"
        />
      </section>
      <section class="search--bar-suomi" v-show="searchText !== ''">
        <re-search :data="extraDatas" @handleExtraSearch="submitExtraSearchText"></re-search>
      </section>
      <section class="search--bar-submit" @click="submitSearchText">
        <svg
          t="1591957541442"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5479"
          width="16"
          height="16"
        >
          <path
            d="M1014.784 942.08l-254.464-254.464c59.392-68.096 93.184-161.28 93.184-263.168C853.504 186.88 667.136 0 429.568 0S5.12 186.88 5.12 424.448s186.88 424.448 424.448 424.448c101.888 0 195.072-33.792 263.168-93.184l254.464 254.464c16.896 16.896 42.496 16.896 59.392 0 16.896-17.408 16.896-51.2 8.192-68.096zM90.112 424.448c0-186.88 152.576-339.456 339.456-339.456s339.456 152.576 339.456 339.456-152.576 339.456-339.456 339.456-339.456-153.088-339.456-339.456z m0 0"
            p-id="5480"
          />
        </svg>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import Svgicon from '@/components/svgicon.vue';
import choose from '@/components/Home/search/search-choose.vue';
import reSearch from '@/components/Home/search/re-search.vue';
import { getEngineValue } from '@/services/getEngineValue.ts';
import { associateSearch } from '@/services/associateSearch.ts';
@Component({
  components: {
    choose,
    Svgicon,
    're-search': reSearch
  }
})
export default class Search extends Vue {
  // iconfont
  private icon: string = 'icon';
  // Logo
  private logoImgSrc: string = require('@/assets/logo.svg');
  // 控制搜索框样式
  private isInputing: boolean = false;
  // 判断搜索引擎选择列表是否开启
  private searchMenu: boolean = false;
  // 搜索框文字
  private searchText: string = '';
  // 搜索引擎选择数组
  private searchChoose: any = {};
  // 当前选择的搜索引擎
  private choose?: string = 'baidu';
  // 搜索引擎可选的自带参数
  private extraParam: string | undefined = '';
  // 搜索引擎联想关键词
  private extraDatas: string[] = [];

  /**
   * @name: handleSearchMenu
   * @msg: 弹出搜索引擎选择框
   * @param {type}
   * @return: void
   */
  private handleSearchMenu(): void {
    this.$emit('handleSearchMenu');
    this.searchMenu = true;
  }
  private closeSearchMenu(): void {
    this.$emit('closeSearchMenu');
    this.searchMenu = false;
  }

  /**
   * @name: handleInput
   * @msg: 切换点击 input 时输入框样式
   * @param {type}
   * @return: void
   */
  private handleInput(): void {
    const status = this.$store.state.status.isInputing;
    this.$store.commit('IS_INPUTING', true);
    this.isInputing = true;
  }
  private cancelInput(): void {
    const status = this.$store.state.status.isInputing;
    this.$store.commit('IS_INPUTING', false);
    this.isInputing = false;
  }

  /**
   * @name: getSearchEngines
   * @msg: 获取搜索引擎组件数据
   * @param {type}
   * @return: void
   */
  private getSearchEngines(): void {
    const data = this.$store.state.searchList;
    this.searchChoose = data;
  }

  /**
   * @name: handleChooseSearchEngine
   * @msg: 点击获取使用的搜索引擎
   * @param {type}
   * @return: void
   */
  private handleChooseSearch(i: number): void {
    const data = getEngineValue(i);
    this.choose = data;
    this.extraParam = this.searchChoose[i].extra;
    this.searchMenu = false;
  }

  /**
   * @description: 提交欲搜索的关键词
   * @param {type}
   * @return:
   * @author: Miya
   */
  private submitSearchText(): void {
    this.$emit('submit', this.choose, this.searchText, this.extraParam);
  }

  /**
   * @name: getExtraValue
   * @msg: 提交欲搜索的关键词
   * @param {type}
   * @return: void
   */
  private async getExtraValue() {
    // TODO: 暂时写死
    const eValue = 'baidu';
    const sValue = this.searchText;
    const res = await associateSearch(eValue!, sValue);

    this.extraDatas = res;
  }

  /**
   * @name: submitExtraSearchText
   * @msg: 展示搜索关键词的联想结果
   * @param {type}
   * @return: void
   */
  private submitExtraSearchText(item: any) {
    this.$emit('submit', this.choose, item, this.extraParam);
  }

  private mounted() {
    this.getSearchEngines();
  }
}
</script>

