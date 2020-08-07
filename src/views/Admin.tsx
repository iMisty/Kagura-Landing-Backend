/*
 * @Description: 后台管理
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-06-02 00:04:25
 * @LastEditors: Miya
 * @LastEditTime: 2020-08-08 02:55:05
 */
import { Component, Vue } from 'vue-property-decorator';
// 导入SVG相关
import Svgicon from '@/components/svgicon.component';
// 路由相关
import Router from '@/components/Admin/router.component';
// 后台路由模型
import Routes from '@/model/routes';

import '@/icons/svg/admin';

@Component({
  // 组件注册
  components: {
    Svgicon,
    router: Router
    // Right
  }
})
export default class Admin extends Vue {
  // 临时变量
  private logo: any = require('@/assets/logo.png');
  private router: Routes[] = [
    { path: '/admin', title: 'shouye', name: 'HOME' },
    { path: '/admin/user', title: 'gaojiban', name: 'USER' },
    { path: '/admin/link', title: 'piliangxiugai', name: 'LINK' },
    { path: '/admin/setting', title: 'bianji', name: 'SETTING' }
  ];
  protected render() {
    return (
      <div class="admin">
        <section class="admin-top">
          <div class="admin-top-logo">
            <img src={this.logo} alt="test logo" />
          </div>
          <div class="admin-top-title">DashBoard</div>
        </section>
        <section class="admin-left">
          {this.router.map(item => {
            return (
              <router
                path={item.path}
                title={item.title}
                name={item.name}
              ></router>
            );
          })}
        </section>
        <section class="admin-wrap">
          <section class="admin-wrap-left">
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </section>
        </section>
      </div>
    );
  }
}
