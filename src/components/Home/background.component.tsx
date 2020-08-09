/*
 * @Description: 自定义背景组件
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-06-14 00:02:26
 * @LastEditors: Miya
 * @LastEditTime: 2020-08-09 20:28:41
 */
import { Component, Prop, Vue } from 'vue-property-decorator';
import '../../style/home/background.component.less';
@Component({
  // 组件注册
  components: {}
})
export default class Background extends Vue {
  @Prop() private isInputing: boolean = false;

  // 存储从 Vuex 中获取的背景图片
  private bgOptions: object = {
    // backgroundImage: `url(${this.$store.state.status.background})`
  };

  get inputingStatus() {
    if (this.isInputing === true) {
      return 'bg-active';
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
