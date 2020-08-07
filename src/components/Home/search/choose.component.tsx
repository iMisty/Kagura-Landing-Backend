/*
 * @Description: 选择搜索引擎组件
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-06-11 23:32:14
 * @LastEditors: Miya
 * @LastEditTime: 2020-08-08 04:28:31
 */
import { Component, Vue, Prop } from 'vue-property-decorator';
import svgicon from '@/components/svgicon.component';

@Component({
  // 组件注册
  components: {
    svgicon
  }
})
export default class Choose_Search_Home extends Vue {
  private icon: string = 'icon';
  // props
  @Prop() private iconValue: unknown;
  @Prop() private value: unknown;

  /**
   * @name: handleChooseSearchEngine
   * @msg: 点击获取使用的搜索引擎
   * @param {type}
   * @return: void
   */
  private handleChooseEngine(): void {
    this.$emit('choose');
  }
  protected render() {
    return (
      <li
        class="choose-engine-wrap"
        data-value={this.value}
        onClick={this.handleChooseEngine}
      >
        <svgicon
          class="svg-icon svg-title-icon"
          svgClass="icon"
          iconClass={this.iconValue}
          iconName={this.iconValue}
        ></svgicon>
        <p class="choose-engine-wrap-text">{this.value}</p>
      </li>
    );
  }
}
