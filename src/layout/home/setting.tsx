import { Component, Vue } from 'vue-property-decorator';
import online from '@/components/Home/setting/online.tsx';
import offline from '@/components/Home/setting/offline.vue';
import User from '@/model/user';

@Component({
  components: {
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
    const token = localStorage.getItem('token') || this.$store.state.token;
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
    const token = localStorage.getItem('token');
    const vuextoken = this.$store.state.token;
    if (!token && !vuextoken) {
      return false;
    }
    localStorage.removeItem('token');
    this.$store.commit('SETTOKEN', null);
    console.log('aa');
    console.log(this.$store.state.token);
    return true;
  }

  private mounted() {
    this.getUserInfo();
  }

  private render() {
    return (
      <div class="home__setting--wrap">
        {this.isLogin ? (
          <section class="home__setting--user-online">
            <online
              name={this.setting.name}
              sex={this.setting.sex}
              introduce={this.setting.introduce}
              avatar={this.setting.avatar}
              onLogout={this.handleLogout}
            ></online>
          </section>
        ) : (
          <section class="home__setting--user-offline">
            <offline
              onIsActive={this.isLoginStatus}
              onLogin={this.handleLogin}
            ></offline>
          </section>
        )}
      </div>
    );
  }
}
