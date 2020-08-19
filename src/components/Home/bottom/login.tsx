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
          <section class="home__login--title">
            <h3>Login</h3>
          </section>
          <section class="home__login--form">
            <label for="username">
              <p>UserName</p>
              <input
                class="home__login--form--input"
                type="text"
                name="username"
                v-model={this.loginData.username}
                value={this.loginData.username}
              />
            </label>
            <label for="password">
              <p>Password</p>
              <input
                class="home__login--form--input"
                type="password"
                name="password"
                v-model={this.loginData.password}
                value={this.loginData.password}
              />
            </label>
          </section>
          <section class="home__login--submit">
            <button type="submit" class="home__login--submit--button">
              SIGN IN NOW
            </button>
          </section>
        </div>
      </div>
    );
  }
}
