/*
 * @Author: Miya
 * @Date: 2020-07-23 17:53:38
 * @LastEditors: Miya
 * @LastEditTime: 2020-08-08 00:23:16
 * @Description: 卡片式磁贴
 * @FilePath: /Single-Search/src/components/Admin/puzzle.component.tsx
 */
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({})
export default class Puzzle_Admin extends Vue {
  // @Props: title => 标题
  @Prop({ default: 'Test Puzzle', type: String }) public title:
    | string
    | undefined;
  // @Props: text => 内容
  @Prop({
    default: 'This is a test text.',
    type: String
  })
  public text: string | undefined;
  // 组件占用的空间
  @Prop({ default: 1 }) private row: number | undefined;
  @Prop({ default: 1 }) private column: number | undefined;

  // computed
  get rowClass(): string {
    return `row-${this.row}`;
  }
  get columnClass(): string {
    return `column-${this.column}`;
  }
  protected render() {
    return (
      <section class={`puzzle-wrap ${this.rowClass} ${this.columnClass}`}>
        <slot>
          <div class="puzzle-title">{this.title}</div>
          <div class="puzzle-text">{this.text}</div>
        </slot>
      </section>
    );
  }
}
