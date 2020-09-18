/*
 * @Description: 右上角点击按钮
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-06-08 00:41:53
 * @LastEditors: Miya
 * @LastEditTime: 2020-09-18 18:32:28
 */
import { Component, Emit, Vue } from 'vue-property-decorator';
@Component({})
export default class Icon extends Vue {
  // 点击事件
  @Emit('handleClick')
  private handleClick() {}

  private render() {
    return (
      <div class={`index-icon`} onClick={this.handleClick}>
        {this.$slots.default}
      </div>
    );
  }
}
