/*
 * @Description: 一言模块
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-05-27 01:24:20
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-08-26 18:25:30
*/
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({})
export default class Hitokoto extends Vue {
  @Prop({ default: '加载中...', type: String }) public hito!: string;

  private render() {
    return (<div class='hitokoto'>{this.hito}</div>);
  }
}