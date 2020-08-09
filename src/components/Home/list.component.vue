<!--
 * @Description: 连接列表
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-05-27 01:24:20
 * @LastEditors: Miya
 * @LastEditTime: 2020-08-09 23:14:08
-->
<template>
  <div class="list" ref="lists">
    <div class="list--items">
      <section class="list--item" v-for="list in listData" :key="list.index">
        <section class="list--item--title--wrap">
          <Svgicon
            class="svg-title-icon"
            :svgClass="icon"
            :iconClass="list.icon"
            :iconName="list.icon"
          ></Svgicon>
          <h5 class="list--item--title" :style="{ color: list.color }">
            {{ list.name }}
          </h5>
        </section>
        <ul class="list--item--wrap">
          <li class="item" v-for="wrap in list.items" :key="wrap.index">
            <a :href="wrap.link">
              <Svgicon
                class="svg-link-icon"
                :svgClass="icon"
                :iconClass="wrap.icon"
                :iconName="wrap.icon"
              ></Svgicon>
              <p>{{ wrap.text }}</p>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Svgicon from '@/components/svgicon.component';
import '@/icons/svg/index';

@Component({
  components: {
    Svgicon
  }
})
export default class List extends Vue {
  // 链接数据 => Vuex 调用
  // TODO: 使用 MongoDB 存储
  private listData = '';
  // SVG 图标公用 class
  private icon: string = 'icon';

  /**
   * @description: 获取 Vuex 中存储的链接数据
   * @param {type}
   * @return: void
   * @author: Miya
   */
  private getListData(): void {
    const data = this.$store.state.link;
    this.listData = data;
  }

  private mounted() {
    this.getListData();
  }
}
</script>
