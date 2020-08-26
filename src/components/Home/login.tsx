import { Component, Vue, Prop } from 'vue-property-decorator';
import LoginInterFace from '@/model/login';
// import '@/style/home/bottom/login.less';
@Component({})
export default class LoginHome extends Vue {
  @Prop({ default: false }) private isActive: boolean | unknown;
  // 接收数据
  private loginData: LoginInterFace = {
    username: 'admin',
    password: '123456',
    remember: false
  };
  // 是否显示
  // private isActive: boolean = false;
  // 登录按钮文字
  private buttonText: string = 'SIGN IN NOW';
  // 文字复位
  private resetButtonText(): void {
    this.buttonText = 'SIGN IN NOW';
  }
  // 提交登录状态
  private setLoginStatus() {
    // TODO: 上线时需要调整为正式环境与后台交互
    // 临时数据
    const data = this.loginData;
    const loginStatus = localStorage.getItem('token');

    // 账号密码不正确
    if (data.username !== 'admin' && data.password !== '123456') {
      this.buttonText = 'Login inconnect';
      return false;
    }

    // 已经是登录状态
    if (loginStatus !== null) {
      console.log('已经是登录状态');
      this.$store.commit('SETTOKEN', 'test-token');
      console.log(`token: ${this.$store.state.token}`);
      return true;
    }

    // 账号密码正确时，写入localStorage与Vuex
    localStorage.setItem('token', 'test-token');
    this.$store.commit('SETTOKEN', loginStatus);
    console.log(`token: ${this.$store.state.token}`);
    return true;
  }

  private hide() {
    this.isActive = false;
  }

  private render() {
    return (
      <transition name="fadeUp">
        {this.isActive ? (
          <div class="home__login">
            <div class="home__login--wrap">
              {/* Logo Start */}
              <section class="home__login--logo">
                <div class="fake-logo"></div>
              </section>
              {/* Logo End */}
              {/* Title Start */}
              <section class="home__login--title">
                <h3 class="home__login--paragraph">Login</h3>
              </section>
              {/* Title End */}
              {/* Form Start */}
              <section class="home__login--form">
                <label for="username">
                  <p class="home__login--paragraph">UserName</p>
                  <input
                    class="home__login--form--input"
                    type="text"
                    name="username"
                    v-model={this.loginData.username}
                    value={this.loginData.username}
                    onChange={this.resetButtonText}
                  />
                </label>
                <label for="password">
                  <p class="home__login--paragraph">Password</p>
                  <input
                    class="home__login--form--input"
                    type="password"
                    name="password"
                    v-model={this.loginData.password}
                    value={this.loginData.password}
                    onChange={this.resetButtonText}
                  />
                </label>
              </section>
              {/* Form End */}
              {/* Submit Start */}
              <section
                class="home__login--submit"
                onClick={this.setLoginStatus}
              >
                <button type="submit" class="home__login--submit--button">
                  {this.buttonText}
                </button>
              </section>
              {/* Submit End */}
            </div>
            <div class="home__login--mask" onClick={this.hide}></div>
          </div>
        ) : (
          ''
        )}
      </transition>
    );
  }
}
