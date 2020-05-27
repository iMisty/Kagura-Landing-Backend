<!--
 * @Description: 版权信息等
 * @version: 1.0.0
 * @Author: Miya
 * @Date: 2020-05-26 16:04:33
 * @LastEditors: Miya
 * @LastEditTime: 2020-05-27 17:35:02
--> 
<template>
  <div class="copyright">
    <p class="copyright-text">© 2016-<span>{{year}}</span> by <a :href="homepage">{{author}}</a> . All rights reserved.</p>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class Copyright extends Vue {
  // Data
  private year: number = 9102;
  private author: string = 'Miya';
  private homepage: string = 'https://github.com/imisty';

  // 获取时间
  private getYear() {
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

