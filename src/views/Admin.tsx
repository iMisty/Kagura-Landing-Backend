/*
 * @Description: 后台管理
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-06-02 00:04:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-03 17:55:41
 */
import { Component, Vue } from 'vue-property-decorator';
import adminTop from '@/layout/admin/top';
// 导入SVG相关
import svgicon from '@/components/svgicon';
// 路由相关
import Router from '@/layout/admin/router';
// 后台路由模型
import Routes from '@/model/routes';
import '@/style/layout/admin/style.less';
import '@/icons/svg/admin';

@Component({
  // 组件注册
  components: {
    'admin-top': adminTop,
    svgicon,
    'router': Router
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
        <admin-top logo={this.logo}></admin-top>
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
            <transition name="fade">
              <router-view></router-view>
            </transition>
        </section>
        {/* Wrap end*/}
      </div>
    );
  }
}
