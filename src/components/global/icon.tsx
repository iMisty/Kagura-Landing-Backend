/*
 * @Description: 右上角点击按钮
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-06-08 00:41:53
 * @LastEditors: Miya
 * @LastEditTime: 2020-08-09 22:16:41
 */
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({})
export default class Icon extends Vue {
  protected render() {
    return (
      <div class="index-icon">
        {/* <span class="line top"></span>
        <span class="line medium"></span>
        <span class="line bottom"></span> */}
        {this.$slots.default}
      </div>
    );
  }
}
