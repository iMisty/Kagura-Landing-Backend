/*
 * @Description: 选择搜索引擎组件
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-06-11 23:32:14
 * @LastEditors: Miya
 * @LastEditTime: 2020-09-01 23:24:02
*/
import { Component, Prop, Vue } from 'vue-property-decorator';
import svgicon from '@/components/svgicon';
@Component({
  // 组件注册
  components: {
    svgicon,
  }
})
export default class SearchEngine extends Vue {
  // props
  @Prop() private icon: any;
  @Prop() private value: any;

  /**
   * @name: handleChooseSearchEngine
   * @msg: 点击获取使用的搜索引擎
   * @param {type}
   * @return: void
   */
  private handleChooseEngine(): void {
    this.$emit('choose');
  }
  private render() {
    return (
      <li class="choose-engine-wrap" onClick={this.handleChooseEngine}>
        {/* <svgicon
          class="svg-icon svg-title-icon"
          svgClass="icon"
          iconClass={this.iconValue}
          iconName={this.iconValue}
        ></svgicon> */}
        <img src={this.icon}/>
        {/* <p class="choose-engine-wrap-text">{this.value}</p> */}
      </li>
    );
  }
}
