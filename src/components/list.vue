<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-05-27 01:24:20
 * @LastEditors: Miya
 * @LastEditTime: 2020-06-06 00:57:01
--> 
<template>
  <div class="list" ref="lists">
    <div class="list--items">
      <section class="list--item" v-for="list in listData" :key="list.index">
        <h5 class="list--item--title">{{list.name}}</h5>
        <ul class="list--item--wrap">
          <li class="item" v-for="wrap in list.items" :key="wrap.index">
            <a :href="wrap.link">
              <i class="fa fa-google"></i>
              <p>{{wrap.text}}</p>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({})
export default class List extends Vue {
  private listData = '';

  // 获取链接列表数据
  private getListData(): void {
    const data = this.$store.state.link;
    this.listData = data;
  }

  private mounted() {
    this.getListData();
  }
}
</script>

