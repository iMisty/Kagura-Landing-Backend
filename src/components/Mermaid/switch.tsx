/*
 * @Author: Miya
 * @Date: 2020-09-10 15:36:56
 * @LastEditTime: 2020-09-10 18:54:14
 * @LastEditors: Miya
 * @Description: Switch component in Mermaid UI
 * @FilePath: \Single-Search\src\components\Mermaid\switch.tsx
 * @Version: 0.3
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

  @Prop({ default: false })
  private disabled!: boolean;

  // method => Emit: Click
  // method => Emit: 点击事件
  @Emit('handleClick')
  private handleClick() {
    console.log('switch-click');
  }

  // computed: Computed status with active class
  // computed: 根据status值计算active状态
  private get getSwitchActive() {
    return [this.status ? 'switch-active' : ''];
  }

  // computed: Computed status if can not change
  // computed: 根据disabled值计算是否允许修改
  private get getDisabledStatus() {
    return [this.disabled ? 'switch-disabled' : ''];
  }

  private render() {
    return (
      // TODO: 在disabled为true时禁止点击修改
      <section
        class={`mermaid__switch ${this.getDisabledStatus}`}
        onClick={this.handleClick}
      >
        <div class={`mermaid__switch--wrap ${this.getSwitchActive}`}></div>
        <div class="mermaid__switch--text">{this.text}</div>
      </section>
    );
  }
}
