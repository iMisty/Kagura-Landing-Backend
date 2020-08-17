/*
 * @Author: Miya
 * @Date: 2020-06-17 16:57:01
 * @LastEditTime: 2020-08-18 00:40:13
 * @LastEditors: Miya
 * @Description: 个人设置页
 * @FilePath: /Single-Search/src/components/Home/setting.component.tsx
 */
import { Component, Vue } from 'vue-property-decorator';
import settingUser from '@/components/Home/setting/user.setting.component';
import logoff from '@/components/Home/setting/logoff.component';
import User from '@/model/user';

@Component({
  components: {
    'setting-user': settingUser,
    'log-off': logoff
  }
})
export default class Setting extends Vue {
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

  private getUserInfo() {
    const token = localStorage.getItem('token') || this.$store.state.token;
    const info = this.$store.state.user;
    if (!token) {
      return;
    }
    // this.isLogin = true;
    this.setting = info;
  }

  private mounted() {
    this.getUserInfo();
  }

  private render() {
    return (
      <div class="setting">
        {this.isLogin ? (
          <setting-user
            name={this.setting.name}
            sex={this.setting.sex}
            introduce={this.setting.introduce}
            avatar={this.setting.avatar}
          ></setting-user>
        ) : (
          <log-off></log-off>
        )}
      </div>
    );
  }
}
