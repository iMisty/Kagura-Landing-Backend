/*
 * @Author: Miya
 * @Date: 2020-06-24 21:38:13
 * @LastEditors: Miya
 * @LastEditTime: 2020-09-16 17:29:58
 * @Description: 背景图片设置
 * @FilePath: \Single-Search\src\layout\home\background.tsx
 */
import { Component, Vue, Prop } from 'vue-property-decorator';
import '../../style/layout/home/background.less';

@Component({})
export default class Background extends Vue {
  // 存储从 Vuex 中获取的背景图片
  private style: object = {
    backgroundImage: `url(${this.$store.state.settings.home.background})`
  };

  private render() {
    return <div class={`background`} style={this.style}></div>;
  }
}
