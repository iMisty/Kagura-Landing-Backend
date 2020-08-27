/*
 * @Description: 后台管理
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-06-02 00:04:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-08-27 16:13:05
 */
import { Component, Vue } from 'vue-property-decorator';
// 导入SVG相关
import Svgicon from '@/components/svgicon';
// 路由相关
import Router from '@/components/Admin/router.component';
// 后台路由模型
import Routes from '@/model/routes';
import '@/style/admin/style.less';
import '@/icons/svg/admin';

@Component({
  // 组件注册
  components: {
    Svgicon,
    router: Router
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

  /**
   * @description: 返回首页
   * @param {type}
   * @return {type} boolean
   */
  private backToIndex() {
    this.$router.push({ path: '/' });
    return true;
  }

  private render() {
    return (
      <div class="admin">

        {/* TopBar start */}
        <section class="admin__top">
          <div class="admin__top-logo" onClick={this.backToIndex}>
            <img src={this.logo} alt="test logo" />
          </div>
          <div class="admin__top-title">DashBoard</div>
        </section>
        {/* TopBar end */}

        {/* LeftBar start */}
        <section class="admin__left">
          {this.router.map((item: Routes) => {
            return (
              <router
                path={item.path}
                title={item.title}
                name={item.name}
              ></router>
            );
          })}
        </section>
        {/* LeftBar end */}

        {/* Wrap start */}
        <section class="admin__wrap">
          <section class="admin__wrap-left">
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </section>
        </section>
        {/* Wrap end*/}
      </div>
    );
  }
}
