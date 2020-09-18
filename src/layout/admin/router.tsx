/*
 * @Author: Miya
 * @Date: 2020-08-06 00:20:25
 * @LastEditors: Miya
 * @LastEditTime: 2020-09-18 15:10:24
 * @Description: 路由跳转
 * @FilePath: \Single-Search\src\layout\admin\router.tsx
 */
import { Component, Vue, Prop } from 'vue-property-decorator';
import svgicon from '@/components/svgicon';

@Component({
  components: {
    svgicon
  }
})
export default class RouterAdmin extends Vue {
  // 跳转地址
  @Prop({ default: '/admin' }) private path?: string;
  // SVG图标地址
  @Prop({ default: 'shouye' }) private title?: string;
  // 组件名称
  @Prop({ default: 'HOME' }) private name?: string;

  protected render() {
    return (
      <router-link class="icon" to={this.path} tag="section">
        {/* <svgicon
          class="svg-title-icon"
          svgClass="icon"
          iconClass={this.title}
          iconName={this.title}
        ></svgicon> */}
        <i class={`admin__left--router--icon iconfont icon-${this.title}`}></i>
        <p class="admin__left--router--text">{ this.name }</p>
      </router-link>
    );
  }
}
