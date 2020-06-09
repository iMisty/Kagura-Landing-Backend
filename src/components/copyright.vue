<!--
 * @Description: 版权信息等
 * @version: 1.0.0
 * @Author: Miya
 * @Date: 2020-05-26 16:04:33
 * @LastEditors: Miya
 * @LastEditTime: 2020-06-10 00:49:43
--> 
<template>
  <div class="copyright">
    <p class="copyright-text">
      © 2016-
      <span>{{year}}</span> by
      <a :href="homepage">{{author}}</a> . All rights reserved.
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component({})
export default class Copyright extends Vue {
  // Data
  private year: number = 9102;
  private author: string = 'Miya';
  private homepage: string = 'https://github.com/imisty';

  /**
   * @description: 获取时间
   * @param {type}
   * @return:
   * @author: Miya
   */
  private getYear(): void {
    const Dates = new Date();
    const years = Dates.getFullYear();
    this.year = years;
  }

  // Mounted
  private mounted() {
    this.getYear();
  }
}
</script>

