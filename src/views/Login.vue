<!--
 * @Author: Miya
 * @Date: 2020-07-24 17:48:54
 * @LastEditors: Miya
 * @LastEditTime: 2020-08-25 23:06:00
 * @Description: 登录页面
 * @FilePath: /Single-Search/src/views/Login.vue
-->
<template>
  <div class="login">
    <div class="login-form">
      <header class="login-form-logo">Test Logo</header>
      <section class="login-form-header">
        <h2 class="login-form-header-title">
          Treat her a cup of cappuccino,show me your bombs
        </h2>
        <p class="login-form-header-text">
          Treat her a cup of cappuccino. Treat her a cup of cappuccino,show me
          your bombs, do it, do it. Awesome~
        </p>
      </section>
      <section class="login-form-input">
        <div class="login-form-input-item login-form-input-username">
          <p>Username</p>
          <input
            class="login-form-input-inputarea"
            type="text"
            v-model="loginData.username"
          />
        </div>
        <div class="login-form-input-item login-form-input-password">
          <p>Password</p>
          <input
            class="login-form-input-inputarea"
            type="password"
            v-model="loginData.password"
          />
        </div>
      </section>
      <section class="login-form-options">
        <div class="remember normal-cursor" @click="handleChangeRememberStatus">
          <input
            class="remember-checkbox"
            type="checkbox"
            name="remember"
            v-model="loginData.remember"
          />
          <p>Remember Me</p>
        </div>
        <div class="forgotten normal-cursor">
          <p>Forget Password?</p>
        </div>
      </section>
      <section class="login-form-button">
        "
        <button class="login-button submit" @click="setLoginStatus">
          Login
        </button>
        <button class="login-button extra">Extra</button>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import '@/style/login/style.less';
// import { POST } from '@/services/ajax';
// 登录模型
import LoginInterface from '@/model/login';

@Component({})
export default class Login extends Vue {
  // 用户输入数据
  private loginData: LoginInterface = {
    username: 'admin',
    password: '123456',
    remember: false
  };
  // 是否记住密码
  private isRemember: boolean = false;

  /**
   *  Methods
   */

  // 点击确认记住页面
  private handleChangeRememberStatus() {
    this.isRemember = !this.isRemember;
    console.log(this.isRemember);
  }

  // 提交登录状态
  private setLoginStatus() {
    // TODO: 上线时需要调整为正式环境与后台交互
    // 临时数据
    const data = this.loginData;
    const loginStatus = localStorage.getItem('token');

    // 账号密码不正确
    if (data.username !== 'admin' && data.password !== '123456') {
      console.log('账号密码不正确');
      // this.buttonText = 'Login inconnect';
      return false;
    }

    // 已经是登录状态
    if (loginStatus !== null) {
      console.log('已经是登录状态');
      this.$store.commit('SETTOKEN', 'test-token');
      this.$router.push({ path: '/admin' });
      console.log(`token: ${this.$store.state.token}`);
      return true;
    }

    // 账号密码正确时，写入localStorage与Vuex
    localStorage.setItem('token', 'test-token');
    this.$store.commit('SETTOKEN', loginStatus);
    this.$router.push({ path: '/admin' });
    console.log(`token: ${this.$store.state.token}`);
    return true;
  }
  // // TODO: 测试数据
  // private info2 = {
  //   name: 'lari',
  //   age: 23
  // };
  // private result: any = '';
  // private async submit() {
  //   if (localStorage.getItem('token') !== '') {
  //     localStorage.removeItem('token');
  //   }
  //   const a = await POST('http://localhost:12450/login', this.info);
  //   console.log(a.data);
  //   this.result = a.data;
  //   // 登录成功则跳转
  //   if (a.data.code === 200) {
  //     // this.$router.push({ path: '/admin' });
  //     const token = localStorage.setItem('token', a.data.token);
  //   }
  // }
  // private async submit2() {
  //   if (this.result !== '') {
  //     this.result = '';
  //   }
  //   const token = localStorage.getItem('token');
  //   console.log(token);
  //   const a = await POST(
  //     'http://localhost:12450/user/person',
  //     this.info2,
  //     token
  //   );
  //   console.log(a);
  //   this.result = a.data;
  // }
}
</script>
<style lang="less"></style>
