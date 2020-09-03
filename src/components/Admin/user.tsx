import { Vue, Component } from 'vue-property-decorator';
import userSetting from '@/components/Admin/user-setting';
import SettingMenu from '@/model/admin-user';
@Component({
  components: {
    'user-setting': userSetting
  }
})
export default class AdminUser extends Vue {
  // 头像设置
  private avatar: string =
    this.$store.state.user.avatar || require('@/assets/female.svg');
  // 移动菜单
  private settingMenu: SettingMenu[] = [
    { title: '个人设置', path: '/user' },
    { title: '系统设置', path: '/setting' },
    { title: '去往首页', path: '/' },
    { title: '退出登录', path: '/', event: 'logout' }
  ];
  private render() {
    return (
      <div class="admin__top--user">
        <section class="admin__top--user--avatar">
          <img src={this.avatar}></img>
        </section>
        <section class="admin__top--user--menu">
          {this.settingMenu.map(item => {
            return (
              <user-setting
                title={item.title}
                path={item.path}
                extraEvent={item.event}
              ></user-setting>
            );
          })}
        </section>
      </div>
    );
  }
}
