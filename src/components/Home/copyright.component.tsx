/*
 * @Description: 版权信息等
 * @version: 1.0.0
 * @Author: Miya
 * @Date: 2020-05-26 16:04:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-08-11 19:17:05
 */
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class CopyrightHome extends Vue {
  // Data
  private startdate: number = 2005;
  private year: number = 9102;
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
  private render() {
    return (
      <div class="copyright">
        <p class="copyright-text">
          © <span>{this.startdate}</span>-<span>{this.year}</span> by{' '}
          <a href={this.website}>{this.author}</a> . All rights reserved.
        </p>
      </div>
    );
  }
}
