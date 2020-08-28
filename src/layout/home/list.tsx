/*
 * @Description: 链接列表
 * @Version: 1.0
 * @Author: Miya
 * @Date: 2020-05-27 01:24:20
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-08-28 11:12:52
*/
import { Component, Vue } from 'vue-property-decorator';
import svgicon from '@/components/svgicon';
import listitem from '@/components/Home/listitem';
@Component({
  components: {
    svgicon,
    'list-item': listitem
  }
})
export default class List extends Vue {
  // 链接数据 => Vuex 调用
  // TODO: 使用 MongoDB 存储
  private listData: any[] = [];

  /**
   * @description: 获取 Vuex 中存储的链接数据
   * @param {type}
   * @return: void
   * @author: Miya
   */
  private getListData(): void {
    const data = this.$store.state.link;
    this.listData = data;
  }

  private mounted() {
    this.getListData();
  }

  private render() {
    return (
      <div class="list">
        <div class="list--items">
          {
            this.listData.map((item) => {
              return (
                <listitem title={item.name} icon={item.icon} link={item.items}></listitem>
              );
            })
          }
        </div>
      </div>
    );
  }
}
