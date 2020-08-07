/*
 * @Description: 右上角点击按钮
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-06-08 00:41:53
 * @LastEditors: Miya
 * @LastEditTime: 2020-08-08 03:12:05
 */
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class Icon_Global extends Vue {
  protected render() {
    return (
      <div class="index-icon">
        <slot></slot>
      </div>
    );
  }
}
