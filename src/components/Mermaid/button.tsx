import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
@Component({})
export default class Button extends Vue {
  // 额外类名
  @Prop() private className?: string;
  // 按钮颜色
  @Prop({ default: 'primary' }) private buttonColor!: string;

  @Emit('handleClick')
  public handleClick() {
    console.log('click button');
  }

  private render() {
    return (
      <button
        class={`mermaid__btn mermaid__btn--${this.buttonColor} ${this.className}`}
        onClick={this.handleClick}
      >
        {this.$slots.default}
      </button>
    );
  }
}
