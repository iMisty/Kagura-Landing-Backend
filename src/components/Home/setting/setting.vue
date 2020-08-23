<!--
 * @Author: Miya
 * @Date: 2020-06-17 16:57:01
 * @LastEditTime: 2020-08-18 16:48:03
 * @LastEditors: Please set LastEditors
 * @Description: 个人设置页
 * @FilePath: /Single-Search/src/components/Home/setting.component.tsx
 -->
<template>
  <div class="home__setting--wrap">
    <section class="home__setting--user-online" v-if="isLogin === true">
      <setting-user
        :name="setting.name"
        :sex="setting.sex"
        :introduce="setting.introduce"
        :avatar="setting.avatar"
        @logout="handleLogout"
      ></setting-user>
    </section>
    <section class="home__setting--user-offline">
      <log-off @isActive="isLoginStatus" @login="handleLogin"></log-off>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import settingUser from '@/components/Home/setting/user';
import logoff from '@/components/Home/setting/logoff.vue';
import User from '@/model/user';

@Component({
  components: {
    'setting-user': settingUser,
    'log-off': logoff
  }
})
export default class SettingHome extends Vue {
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

  private getUserInfo() {
    const token = localStorage.getItem('token') || this.$store.state.token;
    const info = this.$store.state.user;
    if (!token) {
      return;
    }
    this.isLogin = true;
    this.setting = info;
  }

  private handleLogin() {
    this.isLoginStatus = true;
    return true;
  }

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
  }

  private mounted() {
    this.getUserInfo();
  }
}
</script>
<style lang="less"></style>
