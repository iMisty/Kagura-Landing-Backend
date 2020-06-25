<!--
 * @Description: 搜索词联想框
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-06-23 00:43:51
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-23 15:53:00
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
  components: {},
})
export default class ReSearch extends Vue {
// 接收联想关键词数据
@Prop() private data: any;

  // 点击列表项目进行关键词搜索
  private handleExtraSearch(item: string) {
    console.log(item);
    this.$emit('handleExtraSearch', item);
  }
}
</script>
<style lang="less">
.re-search {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  &-list {
    border: 1px solid #dedede;
  }
  &-item {
    padding: 0.5rem;
    cursor: default;
    &:hover{
      background-color: #f0f0f0;
    }
  }
}
</style>