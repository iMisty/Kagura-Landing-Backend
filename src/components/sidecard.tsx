import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({})
export default class SideCard extends Vue {
  // 自定义className
  @Prop({ default: null }) private className: string | undefined;
  private render() {
    return <div class={`mermaid__side-card ${this.className}`}>
      {this.$slots.default}
    </div>;
  }
}
