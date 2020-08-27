import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({})
export default class Button extends Vue {
  // 额外类名
  @Prop() private className: string | undefined;

  // 点击事件
  private handleClick() {
    this.$emit('handleClick');
  }
  private render() {
    return (
      <button class={`mermaid__button ${this.className}`} onClick={this.handleClick}>
        {this.$slots.default}
      </button>
    );
  }
}
