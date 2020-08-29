/*
 * @Description: 连接列表
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-05-27 01:24:20
 * @LastEditors: Miya
 * @LastEditTime: 2020-08-30 02:18:44
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
  // SVG 图标公用 class
  private icon: string = 'icon';

  /**
   * @description: 获取 Vuex 中存储的链接数据
   * @param {type}
   * @return: void
   * @author: Miya
   */
  private getListData(): void {
    const data = this.$store.state.link;
    this.listData = data;
    console.log(this.listData);
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
