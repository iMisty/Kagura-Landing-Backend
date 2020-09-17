import { Component, Vue } from 'vue-property-decorator';
import mButton from '@/components/Mermaid/button';
import LoginInterface from '@/model/login';

@Component({
  components: {
    'm-button': mButton
  }
})
export default class LoginForm extends Vue {
  // 用户输入数据
  private loginData: LoginInterface = {
    username: 'admin',
    password: '123456'
  };

  // 提交登录状态
  private setLoginStatus() {
    // TODO: 上线时需要调整为正式环境与后台交互
    // 临时数据
    const data = this.loginData;
    const loginStatus = localStorage.getItem('s_token');

    // 账号密码不正确
    if (data.username !== 'admin' && data.password !== '123456') {
      console.log('账号密码不正确');
      // this.buttonText = 'Login inconnect';
      return false;
    }

    // 已经是登录状态
    if (loginStatus !== null) {
      console.log('已经是登录状态');
      this.$store.commit('set_token', 'test-token');
      this.$router.push({ path: '/admin' });
      console.log(`token: ${this.$store.state.token}`);
      return true;
    }

    // 账号密码正确时，写入localStorage与Vuex
    localStorage.setItem('s_token', 'test-token');
    this.$store.commit('set_token', loginStatus);
    this.$router.push({ path: '/admin' });
    console.log(`token: ${this.$store.state.token}`);
    return true;
  }

  private render() {
    return (
      <div class="login__form">
        <header class="login__form--title">
          <p>Sign in with credentials</p>
        </header>
        <section class="login__form--input">
          <div class="login__form--input--item">
            <input
              class="login__form--input-username"
              type="text"
              placeholder="用户名"
              value={this.loginData.username}
              v-model={this.loginData.username}
            />
          </div>
          <div class="login__form--input--item">
            <input
              class="login__form--input-password"
              type="password"
              placeholder="密码"
              value={this.loginData.password}
              v-model={this.loginData.password}
            />
          </div>
        </section>
        <section class="login__form--button">
          <m-button onClickevent={this.setLoginStatus}>登录</m-button>
        </section>
      </div>
    );
  }
}
