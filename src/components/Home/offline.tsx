/*
 * @Author: Miya
 * @Date: 2020-08-23 21:38:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-08-27 12:01:13
 * @Description: 首页右侧边栏用于显示用户离线时
 * @FilePath: /Single-Search/src/components/Home/setting/offline.vue
*/
import { Component, Vue } from 'vue-property-decorator';
import mermaidButton from '@/components/button.tsx';
@Component({
  components: {
    'm-button': mermaidButton,
  },
})
export default class Offline extends Vue {
  private femaleAvatar: object = require('@/assets/female.svg');
  // 控制点击后进入登录页面
  private handleLogin(): void {
    this.$router.push({ path: 'login' });
  }
  // 点击弹一个敬请期待
  private handleNoEvent(): void {
    console.log('No');
  }
  private render() {
    return (
      <div class="setting__wrap setting__logoff">
        <article class="setting__logoff--avatar">
          <section class="setting--avatar setting--avatar--female">
            <img src={this.femaleAvatar} />
          </section>
        </article>
        <article class="setting__logoff--setting">
          <m-button className="setting__logoff--setting--button" onhandleClick={this.handleLogin}>
            <p>Login</p>
          </m-button>
          <m-button className="setting__logoff--setting--button" onhandleClick={this.handleNoEvent}>
            <p>Registry</p>
          </m-button>
        </article>
      </div>
    );
  }
}
