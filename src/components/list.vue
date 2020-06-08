<!--
 * @Description: 连接列表
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-05-27 01:24:20
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-08 18:32:23
--> 
<template>
  <div class="list" ref="lists">
    <div class="list--items">
      <section class="list--item" v-for="list in listData" :key="list.index">
        <section class="list--item--title--wrap">
          <i class="list--item--title--icon" :class="list.class"></i> 
          <h5 class="list--item--title">{{list.name}}</h5>
        </section>
        <ul class="list--item--wrap">
          <li class="item" v-for="wrap in list.items" :key="wrap.index">
            <a :href="wrap.link">
              <i :class="wrap.class"></i>
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
import Svgicon from '@/components/svgicon.vue';

@Component({
  components:{
    Svgicon
  }
})
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

