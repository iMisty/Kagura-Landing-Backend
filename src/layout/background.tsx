/*
 * @Author: Miya
 * @Date: 2020-06-24 21:38:13
 * @LastEditors: Miya
 * @LastEditTime: 2020-09-19 02:48:31
 * @Description: 背景图片设置
 * @FilePath: /Single-Search/src/layout/background.tsx
 */
import { Component, Vue } from 'vue-property-decorator';
import UserSetting from '@/model/setting';
import '@/style/layout/home/background.less';

@Component({})
export default class Background extends Vue {
  private imageURL: string = '';

  // https://i.loli.net/2020/06/13/Tsa8uqY2gbjRndw.jpg

  private style: object = {
    backgroundImage: `url(${this.imageURL})`
  };

  private mounted() {
    const getData: string | null = localStorage.getItem('s_user_setting');
    // @ts-ignore
    if (getData !== null) {
      const temp: UserSetting = JSON.parse(getData);
      this.imageURL = temp.background;
    }
  }

  private render() {
    return <div class={`background`} style={this.style}></div>;
  }
}
