/*
 * @Description: 后台管理
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-06-02 00:04:25
 * @LastEditors: Miya
 * @LastEditTime: 2020-09-18 15:31:15
 */
import { Component, Vue } from 'vue-property-decorator';
import adminTop from '@/layout/admin/top';
// 导入SVG相关
import svgicon from '@/components/svgicon';
// 路由相关
import Router from '@/layout/admin/router';
// 外部CSS
import external from '@/components/external';
// 后台路由模型
import Routes from '@/model/routes';
import '@/style/layout/admin/style.less';

@Component({
  // 组件注册
  components: {
    'admin-top': adminTop,
    svgicon,
    external,
    'admin-router': Router
  }
})
export default class Admin extends Vue {
  // 临时变量
  private logo: any = require('@/assets/logo.png');
  private router: Routes[] = [
    { path: '/admin', title: 'home', name: 'HOME' },
    { path: '/admin/user', title: 'gaojiban', name: 'USER' },
    { path: '/admin/link', title: 'edit', name: 'LINK' },
    { path: '/admin/setting', title: 'setting', name: 'SETTING' }
  ];

  private render() {
    return (
      <div class="admin">
        <external href="//at.alicdn.com/t/font_1736333_4000hqnp66d.css"></external>
        {/* TopBar start */}
        <admin-top logo={this.logo}></admin-top>
        {/* TopBar end */}

        {/* LeftBar start */}
        <section class="admin__left">
          {this.router.map((item: Routes) => {
            return (
              <admin-router
                path={item.path}
                title={item.title}
                name={item.name}
              ></admin-router>
            );
          })}
        </section>
        {/* LeftBar end */}

        {/* Wrap start */}
        <section class="admin__wrap">
          {/* <transition name="fade"> */}
          <router-view></router-view>
          {/* </transition> */}
        </section>
        {/* Wrap end*/}
      </div>
    );
  }
}
