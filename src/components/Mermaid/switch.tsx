/*
 * @Author: Miya
 * @Date: 2020-09-10 15:36:56
 * @LastEditTime: 2020-09-10 18:19:13
 * @LastEditors: Miya
 * @Description: Switch component in Mermaid UI
 * @FilePath: \Single-Search\src\components\Mermaid\switch.tsx
 * @Version: 0.1
 */

import { Component, Vue, Emit, Prop } from 'vue-property-decorator';

@Component({})
export default class MermaidSwitch extends Vue {
  // Prop: switch status
  // Prop: 选项状态
  @Prop({ default: false, required: true })
  private status!: boolean;

  // Prop: switch text
  // Prop: 选项标题
  @Prop()
  private text!: string;

  // method => Emit: Click
  // method => Emit: 点击事件
  @Emit('handleClick')
  private handleClick() {
    console.log('switch-click');
  }

  // computed: Computed status with active class
  // computed: 根据status值计算active状态
  get switchActive() {
    return this.status ? 'switch-active' : '';
  }

  private render() {
    return (
      <section class="mermaid__switch" onClick={this.handleClick}>
        <div class={`mermaid__switch--wrap ${this.switchActive}`}></div>
        <div class="mermaid__switch--text">{this.text}</div>
      </section>
    );
  }
}
