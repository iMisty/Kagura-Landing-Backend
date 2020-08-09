/*
 * @Description: 版权信息等
 * @version: 1.0.0
 * @Author: Miya
 * @Date: 2020-05-26 16:04:33
 * @LastEditors: Miya
 * @LastEditTime: 2020-08-09 22:49:35
 */
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class CopyrightHome extends Vue {
  // Data
  private year: number = 9102;
  private author: string = 'Miya';
  private homepage: string = 'https://github.com/imisty';

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

  // Mounted
  private mounted() {
    this.getYear();
  }
  private render() {
    return (
      <div class="copyright">
        <p class="copyright-text">
          © 2016-
          <span>{this.year}</span> by <a href={this.homepage}>{this.author}</a> . All rights reserved.
        </p>
      </div>
    );
  }
}
