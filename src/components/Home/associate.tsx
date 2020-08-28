/*
 * @Description: 搜索词联想框
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-06-23 00:43:51
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-08-27 16:38:31
*/
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  // 组件注册
  components: {}
})
export default class Associate extends Vue {
  // 接收联想关键词数据
  @Prop() private data: any;

  // 点击列表项目进行关键词搜索
  private handleExtraSearch(item: string) {
    console.log(item);
    this.$emit('handleExtraSearch', item);
  }
  private render() {
    return (
      <div class="associate">
        <ul class="associate-list">
          {
            this.data.map((item: string) => {
              // 使用箭头函数以阻止渲染列表后自动执行onClick事件
              return (<li class="associate-item" onClick={() => this.handleExtraSearch(item)}>{item}</li>);
            })
          }
        </ul>
      </div >
    );
  }
}