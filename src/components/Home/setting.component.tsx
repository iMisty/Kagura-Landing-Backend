/*
 * @Author: Miya
 * @Date: 2020-06-17 16:57:01
 * @LastEditTime: 2020-08-10 00:15:10
 * @LastEditors: Miya
 * @Description: 个人设置页
 * @FilePath: /Single-Search/src/components/Home/setting.component.tsx
 */
import { Component, Vue } from 'vue-property-decorator';
import settingUser from '@/components/Home/setting/user.setting.component';
import User from '@/model/user.ts';

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
    name: 'Miya',
    avatar: '',
    sex: 'female',
    introduce: 'test text'
  };

  protected render() {
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
