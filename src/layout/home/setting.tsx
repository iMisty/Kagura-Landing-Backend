import { Component, Vue } from 'vue-property-decorator';
// 边栏卡片式组件
import sidecard from '@/components/sidecard.tsx';
import online from '@/components/Home/online';
import offline from '@/components/Home/offline';
import User from '@/model/user';

@Component({
  components: {
    'm-card': sidecard,
    online,
    offline
  }
})
export default class HomeSetting extends Vue {
  // data
  // TODO: 将集成至Vuex中
  // TODO: 从LocalStorage读取
  private setting: User = {
    name: '',
    sex: '',
    introduce: '',
    avatar: ''
  };

  // 获取用户是否已登录
  private isLogin: boolean = false;

  private isLoginStatus: boolean = false;

  /**
   * @description: 获取用户登录状态
   * @param
   * @return void
   */
  private getUserInfo() {
    const token = localStorage.getItem('s_token') || this.$store.state.token;
    const info = this.$store.state.user;
    if (!token) {
      return false;
    }
    this.isLogin = true;
    this.setting = info;
    return true;
  }

  /**
   * @description: 点击事件：点击后进入登录页面
   * @param {type}
   * @return {type} boolean
   */
  private handleLogin() {
    this.isLoginStatus = true;
    return true;
  }

  /**
   * @description: 点击事件：退出登录
   * @param {type}
   * @return {type} boolean
   */
  private handleLogout() {
    const token = localStorage.getItem('s_token');
    const vuextoken = this.$store.state.token;
    // 非正常状态
    if (!token && !vuextoken) {
      this.isLogin = false;
      return false;
    }
    // 清除token
    localStorage.removeItem('s_token');
    this.$store.commit('set_token', null);
    this.isLogin = false;
    return true;
  }

  private mounted() {
    this.getUserInfo();
  }

  private render() {
    return (
      <div class="home__setting--wrap">
        {this.isLogin ? (
          <m-card className="home__setting--user-online">
            <online
              name={this.setting.name}
              sex={this.setting.sex}
              introduce={this.setting.introduce}
              avatar={this.setting.avatar}
              onLogout={this.handleLogout}
            ></online>
          </m-card>
        ) : (
            <m-card className="home__setting--user-offline">
              <offline
                onIsActive={this.isLoginStatus}
                onLogin={this.handleLogin}
              ></offline>
            </m-card>
          )}
      </div>
    );
  }
}
