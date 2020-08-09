/*
 * @Description: 一言模块
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-05-27 01:24:20
 * @LastEditors: Miya
 * @LastEditTime: 2020-08-09 22:35:35
 */

import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({})
export default class Hitokoto extends Vue {
  @Prop({ default: '加载中...', type: String }) public hito!: string;

  protected render() {
    return <div class="hitokoto">{this.hito}</div>;
  }
}
