<!--
 * @Author: Miya
 * @Date: 2020-07-24 17:48:54
 * @LastEditors: Miya
 * @LastEditTime: 2020-07-24 18:41:16
 * @Description: file content
 * @FilePath: \Single-Search\src\views\Login.vue
-->
<template>
  <div class="login">
    User:<input type="text" v-model="info.username" /> Pass:<input
      type="password"
      v-model="info.password"
    />
    <button @click="submit">submit</button>
    <p>{{ result }}</p>
    <p>{{ info }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Axios from 'axios';

interface login {
  username: string;
  password: string;
}

@Component({})
export default class Login extends Vue {
  // TODO: 测试数据
  private info: login = {
    username: '',
    password: ''
  };

  private result: any = '';

  private async submit() {
    const a = await Axios({
      method: 'post',
      url: 'http://localhost:12450/login',
      data: this.info
    });
    console.log(a.data);
    this.result = a.data;
    // 登录成功则跳转
    if (a.data.code === 200) {
      this.$router.push({ path: '/admin' });
    }
  }
}
</script>

<style lang="less" scope></style>
