/*
 * @Description: 连接列表
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-05-27 01:24:20
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-03 12:04:25
 */
import { Component, Prop, Vue } from 'vue-property-decorator';
import svgicon from '@/components/svgicon.tsx';
import listitem from '@/components/Home/listitem.tsx';
import '@/icons/svg/index';

@Component({
  components: {
    svgicon,
    'list-item': listitem
  }
})
export default class HomeList extends Vue {
  // 链接数据 => Vuex 调用
  // TODO: 使用 MongoDB 存储
  private listData: string[] = [];

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
      <div class="home__list--items">
        {this.listData.map((item: any) => {
          return (
            <list-item
              icon={item.icon}
              color="#fff"
              title={item.name}
              link={item.items}
            ></list-item>
          );
        })}
      </div>
    );
  }
}
