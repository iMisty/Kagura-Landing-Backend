/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-09-04 01:22:10
 * @LastEditors: Miya
 * @LastEditTime: 2020-09-17 00:39:11
 * @Description: 用户选项模块选择器
 * @FilePath: /Single-Search/src/components/Admin/user-setting.tsx
 */
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({})
export default class AdminUserSetting extends Vue {
  @Prop()
  private title!: string;

  @Prop()
  private router!: string;

  @Prop()
  private extraEvent?: string;

  /**
   * @description: 根据传递的值与参数选择事件
   * @param {type}
   * @return {type} boolean
   */
  private routerPath() {
    if (!this.extraEvent) {
      this.$router.replace({ path: this.router });
      return true;
    } else {
      localStorage.removeItem('s_token');
      this.$store.commit('set_token', null);
      this.$router.push({ path: '/' });
      return true;
    }
  }

  private render() {
    return (
      <div class="admin__top--user--setting" onClick={this.routerPath}>
        <p>{this.title}</p>
      </div>
    );
  }
}
