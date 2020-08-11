/*
 * @Author: Miya
 * @Date: 2020-06-17 16:57:01
 * @LastEditTime: 2020-08-11 18:57:07
 * @LastEditors: Please set LastEditors
 * @Description: 个人设置页
 * @FilePath: /Single-Search/src/components/Home/setting.component.tsx
 */
import { Component, Vue } from 'vue-property-decorator';
import settingUser from '@/components/Home/setting/user.setting.component';
import User from '@/model/user';

@Component({
  components: {
    'setting-user': settingUser
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

  private getUserInfo() {
    const info = this.$store.state.user;
    this.setting = info;
  }

  private mounted() {
    this.getUserInfo();
  }

  private render() {
    return (
      <div class="setting">
        <setting-user
          name={this.setting.name}
          sex={this.setting.sex}
          introduce={this.setting.introduce}
          avatar={this.setting.avatar}
        ></setting-user>
      </div>
    );
  }
}
