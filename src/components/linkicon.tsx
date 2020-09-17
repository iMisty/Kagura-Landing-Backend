/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-09-18 00:50:09
 * @LastEditors: Miya
 * @LastEditTime: 2020-09-18 00:50:45
 * @Description: 外链图标使用的 JS 组件引入
 * @FilePath: /Single-Search/src/components/linkicon.tsx
 */
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({})
export default class Test extends Vue {
  // 外链 js 地址
  @Prop()
  private src?: string;

  private render(createElement: (arg0: string, arg1: { attrs: { type: string; src: string | undefined; }; }) => any) {
    return createElement('script', {
      attrs: {
        type: 'text/javascript',
        src: this.src
      }
    });
  }
}
