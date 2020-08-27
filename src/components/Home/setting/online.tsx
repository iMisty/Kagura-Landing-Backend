/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-08-26 01:06:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-08-27 10:51:07
 * @Description: 用户在线状态模块
 * @FilePath: /Single-Search/src/components/Home/setting/online.tsx
 */
import { Component, Vue, Prop } from 'vue-property-decorator';
import avatar from '@/components/avatar.tsx';
@Component({
  components: {
    avatar
  }
})
export default class UserSetting extends Vue {
  @Prop() private name: string | undefined;
  @Prop() private avatar: string | undefined;
  @Prop() private sex: string | undefined;
  @Prop() private introduce: string | undefined;

  // 缺省头像图片
  private male: object = require('@/assets/male.svg');
  private female: object = require('@/assets/female.svg');

  /**
   * @description: 处理点击退出按钮事件
   * @param {type}
   * @return {type} boolean
   */
  private logout() {
    this.$emit('logout');
    return true;
  }
  /**
   * @description: 计算图像链接
   * @param {type}
   * @return {type} 定义的 require 图像
   */
  get image() {
    if (this.sex === 'male') {
      return this.male;
    } else {
      return this.female;
    }
  }

  private render() {
    return (
      <section class="setting__wrap setting--user">
        <article class="setting__wrap--avatar">
          {/* 当自定义头像为空时使用默认头像 */}
          {this.avatar === '' ? (
            <avatar image={this.image} sex={this.sex}></avatar>
          ) : (
            <section class="setting__wrap--avatar--custom">
              <i style="width: 80px;height: 80px;background-color: #444;border-radius: 64%;"></i>
            </section>
          )}
        </article>
        <article class="setting__wrap--information">
          <h3 class="setting__wrap--information-title">{this.name}</h3>
          <p class="setting__wrap--information-text">{this.introduce}</p>
          <button
            class="setting__wrap--information--logout"
            onClick={this.logout}
          >
            Logout
          </button>
        </article>
      </section>
    );
  }
}

