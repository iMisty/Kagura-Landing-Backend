import { Component, Vue } from 'vue-property-decorator';
import LoginInterFace from '@/model/login';
import '@/style/home/bottom/login.less';
@Component({})
export default class LoginHome extends Vue {
  // 接收数据
  private loginData: LoginInterFace = {
    username: '',
    password: '',
    remember: false
  };

  private render() {
    return (
      <div class="home__login">
        <div class="home__login--wrap">
          <section class="home__login--logo">
            <div class="fake-logo"></div>
          </section>
          <section class="home__login--form">
            <label for="username">
              <h5>UserName</h5>
              <input
                class="home__login--form--input"
                type="text"
                name="username"
                v-model={this.loginData.username}
                value={this.loginData.username}
              />
            </label>
            <label for="password">
              <h5>Password</h5>
              <input
                class="home__login--form--input"
                type="password"
                name="password"
                v-model={this.loginData.password}
                value={this.loginData.password}
              />
            </label>
          </section>
          <section class="home__login--options">
            <label for="remember" class="home__login--options--remember">
              <input
                type="checkbox"
                name="remember"
                v-model={this.loginData.remember}
              />
              <p>Remember Me</p>
            </label>
            <section class="home__login--options--submit">
              <button
                type="submit"
                class="home__login--options--submit--button"
              >
                Login
              </button>
            </section>
          </section>
        </div>
      </div>
    );
  }
}
