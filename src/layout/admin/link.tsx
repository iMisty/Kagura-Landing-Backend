import { Component, Vue } from 'vue-property-decorator';
import mButton from '@/components/Mermaid/button';

interface Link {
  icon: string;
  items: object[];
  name: string;
  titleIconColor: string;
}
@Component({
  components: {
    'm-button': mButton
  }
})
export default class AdminLink extends Vue {
  private ringIcon: object = require('@/assets/ring.svg');
  private deleteIcon: object = require('@/assets/delete.svg');

  private linkData: Link[] = [];

  /**
   * @description: 获取数据（初始数据取自Vuex，后续数据取自localStorage）
   * @param {type}
   * @return {type}
   */
  private getLinkData() {
    const dataInLocalSrorage: string | null = localStorage.getItem('s_user_link');
    const data = dataInLocalSrorage || this.$store.state.link;
    console.log(data);
    this.linkData = data;
  }

  /**
   * @description: 新建一组新链接
   * @param {type} e
   * @return {type}
   */
  private createNewItem(e: {
    target: { parentElement: { getAttribute: (arg0: string) => any } };
  }) {
    const index = e.target.parentElement.getAttribute('data-index');
    this.linkData[index].items.push({
      icon: '',
      link: '',
      text: ''
    });
    console.log(this.linkData[index].items);
  }

  /**
   * @description: 保存数据
   * @param {type} params
   * @return {type}
   */
  private handleSave() {
    localStorage.setItem('s_user_link', JSON.stringify(this.linkData));
  }

  /**
   * @description: 删除单行链接
   * @param {type} e
   * @return {type}
   */
  private handleDeleteItem(e: {
    target: { getAttribute: (arg0: string) => number };
  }) {
    const ids = e.target.getAttribute('data-id');
    const index = e.target.getAttribute('data-index');
    this.linkData[ids].items.splice(index, 1);
    console.log(`对应数据：${JSON.stringify(this.linkData[ids].items[index])}`);
  }

  /**
   * @description: 删除整个分类
   * @param {type} e
   * @return {type}
   */
  private handleDeleteAssort(e: {
    target: { parentElement: { dataset: { index: number } } };
  }) {
    const index = e.target.parentElement.dataset.index;
    this.linkData.splice(index, 1);
  }

  private mounted() {
    this.getLinkData();
  }

  private render() {
    return (
      <div class="admin__link">
        {this.linkData.length === 0 ? (
          <section class="admin__link--list">
            <div class="mermaid__alerts">
              <img src={this.ringIcon} />
              <p>暂时还没有导航链接,不点一下按钮增加一个?</p>
            </div>
            <div class="admin__link--options">
              <m-button>增加新分类</m-button>
            </div>
          </section>
        ) : (
          <section class="admin__link--list">
            {this.linkData.map((item: any, index: number) => {
              return (
                <table class="admin__link--table">
                  <tr class="admin__link--table--wrap">
                    <th class="admin__link--table--title">图标class</th>
                    <th class="admin__link--table--title">标题</th>
                    <th class="admin__link--table--title">标题颜色</th>
                    <th class="admin__link--table--setting">操作</th>
                  </tr>
                  <tr class="admin__link--table--wrap">
                    <td class="admin__link--table--icon">
                      <input value={item.icon} />
                    </td>
                    <td class="admin__link--table--link">
                      <input value={item.name} />
                    </td>
                    <td class="admin__link--table--text">
                      <input value={item.titleIconColor} />
                    </td>
                    <td class="admin__link--table--setting">
                      <div class="admin__link--table--setting-button">
                        <img src={this.deleteIcon} alt="" />
                      </div>
                    </td>
                  </tr>
                  <tr class="admin__link--table--wrap">
                    <th class="admin__link--table--title">图标</th>
                    <th class="admin__link--table--title">链接</th>
                    <th class="admin__link--table--title">显示文字</th>
                    <th class="admin__link--table--title">操作</th>
                  </tr>

                  {item.items.map(
                    (
                      childItem: { icon: string; link: string; text: string },
                      childIndex: number
                    ) => {
                      return (
                        <tr
                          class="admin__link--table--wrap"
                          data-id={index}
                          data-index={childIndex}
                        >
                          <td class="admin__link--table--icon">
                            <input value={childItem.icon} />
                          </td>
                          <td class="admin__link--table--link">
                            <input value={childItem.link} />
                          </td>
                          <td class="admin__link--table--text">
                            <input value={childItem.text} />
                          </td>
                          <td class="admin__link--table--setting">
                            <div
                              class="admin__link--table--setting-button"
                              onClick={this.handleDeleteItem}
                            >
                              <img
                                src={this.deleteIcon}
                                alt=""
                                data-id={index}
                                data-index={childIndex}
                              />
                            </div>
                          </td>
                        </tr>
                      );
                    }
                  )}
                  <th class="admin__link--options" data-index={index}>
                    <m-button onClickevent={this.createNewItem}>
                      增加项
                    </m-button>
                    <m-button>保存项</m-button>
                    <m-button onClickevent={this.handleDeleteAssort}>
                      删除整项
                    </m-button>
                  </th>
                </table>
              );
            })}
          </section>
        )}
      </div>
    );
  }
}
