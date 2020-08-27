/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-08-23 21:38:13
 * @LastEditors: Miya
 * @LastEditTime: 2020-08-28 00:45:02
 * @Description: 显示链接总数
 * @FilePath: /Single-Search/src/components/Admin/linksum.tsx
 */
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({})
export default class LinkSum extends Vue {
  // 标题
  @Prop({ default: '链接总数目' }) private title!: string;
  // 数目
  @Prop({ default: 113 }) private num!: number;

  private render() {
    return (
      <section class="linksum">
        <header class="linksum__title">{this.title}</header>
        <article class="linksum__sum">{this.num}</article>
      </section>
    );
  }
}
