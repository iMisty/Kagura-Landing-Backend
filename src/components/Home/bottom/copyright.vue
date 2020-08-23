<!--
 * @Author: Miya
 * @Date: 2020-05-26 16:04:33
 * @LastEditors: Miya
 * @LastEditTime: 2020-08-24 00:35:51
 * @Description: 版权信息
 * @FilePath: /Single-Search/src/components/Home/bottom/copyright.vue
-->
<template>
  <div class="copyright">
    <p class="copyright-text">
      © <span>{{ startdate }}</span
      >-<span>{{ year }}</span> by <a :href="website">{{ author }}</a> .
      All rights reserved.
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class Copyright extends Vue {
  // Data
  private startdate: number = 2005;
  private year: number = 2019;
  private author: string = 'Miya';
  private website: string = 'https://github.com/imisty';

  /**
   * @description: 获取时间
   * @param {type}
   * @return: void
   * @author: Miya
   */
  private getYear(): void {
    const Dates = new Date();
    const years = Dates.getFullYear();
    this.year = years;
  }

  /**
   * @description: 获取版权信息
   * @param {type}
   * @return: void
   * @author: Miya
   */
  private getAuthor(): void {
    const { copyright, start_date } = this.$store.state.settings.home;
    const year = start_date.slice(0, 4);
    this.author = copyright.author;
    this.website = copyright.website;
    this.startdate = year;
  }

  // Mounted
  private mounted() {
    this.getYear();
    this.getAuthor();
  }
}
</script>
<style lang="less"></style>
