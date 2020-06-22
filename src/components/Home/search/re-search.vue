<!--
 * @Description: 搜索词联想框
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-06-23 00:43:51
 * @LastEditors: Miya
 * @LastEditTime: 2020-06-23 01:52:58
--> 
<template>
  <div class="re-search">
    <ul class="re-search-list">
      <li
        class="re-search-item"
        v-for="item in data"
        :key="item.index"
        @click="handleExtraSearch(item)"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  // 组件注册
  components: {

  }})
export default class ReSearch extends Vue {

  @Prop() private data: any;

  private handleExtraSearch(item: string) {
    this.$emit('handleExtraSearch', item);
  }
}
</script>
<style lang="less">
.re-search {
  &-list {
    border: 1px solid #dedede;
  }
  &-item {
    padding: 0.5rem;
  }
}
</style>