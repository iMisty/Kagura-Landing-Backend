/*
 * @Description: 搜索词联想框
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-06-23 00:43:51
 * @LastEditors: Miya
 * @LastEditTime: 2020-08-08 03:39:35
 */
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({})
export default class Word_Search_Home extends Vue {
  // 接收联想关键词数据
  @Prop()
  private data!: any;

  // 点击列表项目进行关键词搜索
  private handleExtraSearch(item: string) {
    console.log(item);
    this.$emit('handleExtraSearch', item);
  }

  protected render() {
    return (
      <div class="re-search">
        <ul class="re-search-list">
          {this.data.map((item: string) => {
            return (
              <li
                class="re-search-item"
                onClick={this.handleExtraSearch.bind(this,item)}
            >{item}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}
