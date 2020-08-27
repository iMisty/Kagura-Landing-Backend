/*
 * @Author: Miya
 * @Date: 2020-08-06 00:20:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-08-18 16:10:04
 * @Description: 路由跳转
 * @FilePath: /Single-Search/src/components/Admin/router.component.tsx
 */
import { Component, Vue, Prop } from 'vue-property-decorator';
import svgicon from '@/components/svgicon';
import '@/icons/svg/admin';

@Component({
  components: {
    svgicon
  }
})
export default class RouterAdmin extends Vue {
  // 跳转地址
  @Prop({ default: '/admin' }) private path: string | undefined;
  // SVG图标地址
  @Prop({ default: 'shouye' }) private title: string | undefined;
  // 组件名称
  @Prop({ default: 'HOME' }) private name: string | undefined;
  private icon: string = 'icon';

  protected render() {
    return (
      <router-link class="icon" to={this.path} tag="section">
        <svgicon
          class="svg-title-icon"
          svgClass="icon"
          iconClass={this.title}
          iconName={this.title}
        ></svgicon>
        <p class="admin-left-router-text">{ this.name }</p>
      </router-link>
    );
  }
}
