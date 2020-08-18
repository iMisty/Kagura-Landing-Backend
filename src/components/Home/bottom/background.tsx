/*
 * @Description: 自定义背景组件
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-06-14 00:02:26
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-08-18 16:19:52
 */
import { Component, Prop, Vue } from 'vue-property-decorator';
import '../../../style/home/bottom/background.less';
@Component({
  // 组件注册
  components: {
  }
})
export default class Background extends Vue {
  @Prop() private isInputing: any = false;

  // 存储从 Vuex 中获取的背景图片
  private bgOptions: object = {
    // backgroundImage: `url(${this.$store.state.settings.background})`
  };

  get inputingStatus() {
    if (this.isInputing === true) {
      return 'bg-active';
    } else {
      return '';
    }
  }
  protected render() {
    return (
      <div
        class={`background ${this.inputingStatus}`}
        style={this.bgOptions}
      ></div>
    );
  }
}
