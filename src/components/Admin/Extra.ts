/*
 * @Author: Miya
 * @Date: 2020-08-05 22:53:12
 * @LastEditors: Miya
 * @LastEditTime: 2020-08-07 02:20:29
 * @Description: file content
 * @FilePath: /Single-Search/src/components/Admin/Extra.ts
 */
import '@/style/style.less';
import { Component, Vue } from 'vue-property-decorator';
@Component({
  template: `<div>{{message}}</div>`
})
export default class Extra extends Vue {
  private message: string = 'aa';
}
