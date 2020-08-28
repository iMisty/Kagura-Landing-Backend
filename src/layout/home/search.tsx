/*
 * @Description: 搜索控件
 * @version: 1.0.0
 * @Author: Miya
 * @Date: 2020-05-26 21:41:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-08-28 12:00:10
*/
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import svgicon from '@/components/svgicon';
import engine from '@/components/Home/engine';
import associate from '@/components/Home/associate';
import { getEngineValue } from '@/services/getEngineValue.ts';
import { associateSearch } from '@/services/associateSearch.ts';
@Component({
  components: {
    engine,
    svgicon,
    associate,
  },
})
export default class Search extends Vue {
  // Logo
  private logoImgSrc: object = require('@/assets/logo.svg');
  // 放大镜图标
  private magnifier: object = require('@/assets/magnifier.svg');
  // 控制搜索框样式
  private isInputing: boolean = false;
  // 判断搜索引擎选择列表是否开启
  private searchMenu: boolean = false;
  // 搜索框文字
  private searchText: string = '';
  // 搜索引擎选择数组
  private searchChoose: any = [];
  // 当前选择的搜索引擎
  private choose?: string = 'baidu';
  // 搜索引擎可选的自带参数
  private extraParam: string | undefined = '';
  // 搜索引擎联想关键词
  private extraDatas: string[] = [];

  /**
   * @name: handleSearchMenu
   * @msg: 弹出搜索引擎选择框
   * @param {type}
   * @return: void
   */
  private handleSearchMenu(): void {
    this.$emit('handleSearchMenu');
    this.searchMenu = true;
  }
  private closeSearchMenu(): void {
    this.$emit('closeSearchMenu');
    this.searchMenu = false;
  }

  /**
   * @name: handleInput
   * @msg: 切换点击 input 时输入框样式
   * @param {type}
   * @return: void
   */
  private handleInput(): void {
    const status = this.$store.state.status.isInputing;
    this.$store.commit('IS_INPUTING', true);
    this.isInputing = true;
  }
  private cancelInput(): void {
    const status = this.$store.state.status.isInputing;
    this.$store.commit('IS_INPUTING', false);
    this.isInputing = false;
  }

  /**
   * @name: getSearchEngines
   * @msg: 获取搜索引擎组件数据
   * @param {type}
   * @return: void
   */
  private getSearchEngines(): void {
    const data = this.$store.state.searchList;
    this.searchChoose = data;
    console.log(this.searchChoose);
  }

  /**
   * @name: handleChooseSearchEngine
   * @msg: 点击获取使用的搜索引擎
   * @param {type}
   * @return: void
   */
  private handleChooseSearch(index: number): void {
    const data = getEngineValue(index);
    this.choose = data;
    this.extraParam = this.searchChoose[index].extra;
    this.searchMenu = false;
  }

  /**
   * @description: 提交欲搜索的关键词
   * @param {type} e
   * @return: boolean
   * @author: Miya
   */
  private submitSearchText(e) {
    console.log(e);
    if (e.keyCode === 13) {
      this.$emit('submit', this.choose, this.searchText, this.extraParam);
      console.group(this.choose, this.searchText, this.extraParam);
      return true;
    }
    return false;
  }

  /**
   * @name: getExtraValue
   * @msg: 提交欲搜索的关键词
   * @param {type}
   * @return: void
   */
  private async getExtraValue() {
    // TODO: 暂时写死
    const eValue = 'baidu';
    const sValue = this.searchText;
    const res = await associateSearch(eValue!, sValue);

    this.extraDatas = res;
  }

  /**
   * @name: submitExtraSearchText
   * @msg: 展示搜索关键词的联想结果
   * @param {type}
   * @return: void
   */
  private submitExtraSearchText(item: any) {
    this.$emit('submit', this.choose, item, this.extraParam);
  }

  private mounted() {
    this.getSearchEngines();
  }

  // 计算在输入内容时显示的class
  get inputing() {
    if (this.isInputing) {
      return `inputing`;
    }
    return null;
  }
  get searchMenuActive() {
    if (this.searchMenu) {
      return `active`;
    }
    return null;
  }

  // 临时设置： 计算图片
  get getChooseImg() {
    const temp: any = this.choose;
    const temparray = ['google', 'bing', 'baidu'];
    return temparray.indexOf(temp);
  }

  private render() {
    return (
      <div class="search--bar">
        {/* 搜索引擎logo部分 */}
        <div class="search--bar-logo">
          <img src={this.logoImgSrc} alt="Logo" />
        </div>
        {/* 搜索引擎内容部分 */}
        <div class={`search--bar-wrap ${this.inputing}`}>
          <section class="search--bar-choose" onMouseover={this.handleSearchMenu} onMouseout={this.closeSearchMenu}>
            <div class="search--bar-choose-engine" data-choose={this.choose}>
              <img src={this.$store.state.searchList[this.getChooseImg].icon} style="width: 1.5rem"/>
            </div>
            <ul class={`choose-engine ${this.searchMenuActive}`}>
              {
                this.searchChoose.map((item, index) => {
                  return (
                    <engine icon={item.icon} onChoose={() => this.handleChooseSearch(index)}></engine>
                  );
                })
              }
            </ul>
          </section>
          <section class="search--bar-input">
            <input
              type="text"
              placeholder="请输入搜索内容"
              v-model={this.searchText}
              onClick={this.handleInput}
              onBlur={this.cancelInput}
              onKeydown={(e: any) => this.submitSearchText(e)}
              onInput={this.getExtraValue}
            />
          </section>
          {
            this.extraDatas[0] !== '' ? (
              <section class="search--bar-suomi">
                <associate data={this.extraDatas} onHandleExtraSearch={this.submitExtraSearchText}></associate>
              </section>
            ) : null
          }
          <section class="search--bar-submit" onClick={this.submitSearchText}>
            <img src={this.magnifier} />
          </section>
        </div>
      </div>
    );
  }
}
