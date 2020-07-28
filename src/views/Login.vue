<!--
 * @Author: Miya
 * @Date: 2020-07-24 17:48:54
 * @LastEditors: iMisty
 * @LastEditTime: 2020-07-29 00:17:47
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
          <input class="login-form-input-inputarea" type="text" v-model="info.username" />
        </div>
        <div class="login-form-input-item login-form-input-password">
          <p>Password</p>
          <input class="login-form-input-inputarea" type="password" v-model="info.password" />
        </div>
      </section>
      <section class="login-form-options">
        <div class="remember normal-cursor">
          <input class="remember-checkbox" type="checkbox" name="remember" />
          <p>Remember Me</p>
        </div>
        <div class="forgotten normal-cursor">
          <p>Forget Password?</p>
        </div>
      </section>
      <section class="login-form-button">
        <button class="login-button submit">Login</button>
        <button class="login-button extra">Extra</button>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { POST } from '@/services/ajax';

interface LoginInterface {
  username: string;
  password: string;
}

@Component({})
export default class Login extends Vue {
  // TODO: 测试数据
  private info: LoginInterface = {
    username: '',
    password: ''
  };

  private info2 = {
    name: 'lari',
    age: 23
  };

  private result: any = '';

  private async submit() {
    if (localStorage.getItem('token') !== '') {
      localStorage.removeItem('token');
    }
    const a = await POST('http://localhost:12450/login', this.info);
    console.log(a.data);
    this.result = a.data;
    // 登录成功则跳转
    if (a.data.code === 200) {
      // this.$router.push({ path: '/admin' });
      const token = localStorage.setItem('token', a.data.token);
    }
  }

  private async submit2() {
    if (this.result !== '') {
      this.result = '';
    }
    const token = localStorage.getItem('token');
    console.log(token);
    const a = await POST(
      'http://localhost:12450/user/person',
      this.info2,
      token
    );
    console.log(a);
    this.result = a.data;
  }
}
</script>
