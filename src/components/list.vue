<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-05-27 01:24:20
 * @LastEditors: Miya
 * @LastEditTime: 2020-06-04 23:53:32
--> 
<template>
  <div class="list">
    <div class="list--items">
      <section class="list--item" v-for="list in listData" :key="list.index">
        <h4 class="list--item--title">{{list.name}}</h4>
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

  private getListData(): void {
    const data = this.$store.state.link;
    this.listData = data;
  }

  private mounted() {
    this.getListData();
  }
}
</script>

