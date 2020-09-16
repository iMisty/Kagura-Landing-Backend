/*
 * @Author: Miya
 * @Date: 2020-08-06 00:20:25
 * @LastEditors: Miya
 * @LastEditTime: 2020-09-17 00:35:02
 * @Description: 路由跳转
 * @FilePath: /Single-Search/src/layout/admin/router.tsx
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
