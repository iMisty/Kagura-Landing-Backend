/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-08-23 21:38:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-04 18:01:17
 * @Description: 显示链接总数
 * @FilePath: /Single-Search/src/components/Admin/linksum.tsx
 */
import { Component, Vue, Prop } from 'vue-property-decorator';
import Sum from '@/model/sum';
@Component({})
export default class LinkSum extends Vue {
  // 传递对象
  @Prop({
    default: () => {
      return { title: '测试用标题', sum: 32, color: 'purple' };
    }
  })
  private result!: Sum;
  private render() {
    return (
      <section class="linksum">
        {/* <article class="linksum__image">
          <img src={this.img} />
        </article> */}
        {/* <article class="linksum__wrap"> */}
        <header class="linksum__title">{this.result.title}</header>
        <article class={`linksum__sum ${this.result.color}`}>
          {this.result.sum}
        </article>
        {/* </article> */}
      </section>
    );
  }
}
