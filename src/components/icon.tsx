/*
 * @Description: 右上角点击按钮
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-06-08 00:41:53
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-08-27 18:03:37
 */
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({})
export default class Icon extends Vue {
  @Prop() private className: string | undefined;
  // 点击事件
  private handleClick() {
    this.$emit('handleClick');
    return true;
  }

  private render() {
    return (
      <div class={`index-icon ${this.className}`} onClick={this.handleClick}>
        {/* <span class="line top"></span>
        <span class="line medium"></span>
        <span class="line bottom"></span> */}
        {this.$slots.default}
      </div>
    );
  }
}
