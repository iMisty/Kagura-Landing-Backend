import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({})
export default class Puzzle extends Vue {
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
  @Prop({ default: 2 }) private column: number | undefined;

  // computed
  get rowClass(): string {
    return `row-${this.row}`;
  }
  get columnClass(): string {
    return `column-${this.column}`;
  }
  private render() {
    return (
      <section class={`puzzle-wrap ${this.rowClass} ${this.columnClass}`}>
        {/* 还有这种操作?????? */}
        {this.$slots.default ? (
          this.$slots.default
        ) : (
          <div>
            <div class="puzzle-title">{this.title}</div>
            <div class="puzzle-text">{this.text}</div>
          </div>
        )}
      </section>
    );
  }
}
