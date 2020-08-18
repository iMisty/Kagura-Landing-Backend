/*
 * @Author: Miya
 * @Date: 2020-06-08 17:42:30
 * @LastEditTime: 2020-08-08 01:40:34
 * @LastEditors: Miya
 * @Description: SVG 图标支持
 * @FilePath: /Single-Search/src/components/svgicon.tsx
 */
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({})
export default class Svgicon extends Vue {
  // Props
  @Prop({ required: true }) public iconClass: string | undefined;
  @Prop() public className: string | undefined;

  // Computed

  get iconName(): string | undefined {
    return `#icon-${this.iconClass}`;
  }

  get svgClass(): string {
    if (this.className) {
      return `svg-icon ${this.className}`;
    } else {
      return 'svg-icon';
    }
  }
  protected render() {
    return (
      <svg class={this.svgClass} aria-hidden="true">
        <use xlinkHref={this.iconName} />
      </svg>
    );
  }
}
