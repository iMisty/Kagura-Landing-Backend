/*
 * @Author: Miya
 * @Date: 2020-06-24 21:38:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-08-27 11:42:18
 * @Description: 背景图片设置
 * @FilePath: /Single-Search/src/layout/home/background.tsx
*/
import { Component, Vue, Prop } from 'vue-property-decorator';
import '../../style/layout/home/background.less';

@Component({})
export default class Background extends Vue {
  // 确定是否为输入框模式
  // 该变量由App.vue交由Vuex控制
  @Prop() private isInputing: boolean | undefined = false;

  // 存储从 Vuex 中获取的背景图片
  private style: object = {
    backgroundImage: `url(${this.$store.state.settings.home.background})`
  };

  // 根据isInputing值计算是否显示浮层
  get isBGActive() {
    if (this.isInputing === true) {
      return `bg-active`;
    } else {
      return '';
    }
  }
  private render() {
    return (<div
      class={`background ${this.isBGActive}`}
      style={this.style}
    ></div>);
  }
}
