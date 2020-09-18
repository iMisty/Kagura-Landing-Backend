/*
 * @Author: Miya
 * @Date: 2020-06-24 21:38:13
 * @LastEditors: Miya
 * @LastEditTime: 2020-09-19 05:01:00
 * @Description: 背景图片设置
 * @FilePath: /Single-Search/src/layout/background.tsx
 */
import { Component, Vue } from 'vue-property-decorator';
import UserSetting from '@/model/setting';
import '@/style/layout/home/background.less';
import { SETTING_DATA } from '@/config/dataname.config';

@Component({})
export default class Background extends Vue {

  // https://i.loli.net/2020/06/13/Tsa8uqY2gbjRndw.jpg

  private style = {
    backgroundImage: ''
  };

  private mounted() {
    const getData: string | null = localStorage.getItem(SETTING_DATA);
    if (getData !== null) {
      const temp: UserSetting = JSON.parse(getData);
      console.log(temp.background);
      this.style.backgroundImage = `url(${temp.background})`;
      console.log(this.style.backgroundImage);
    }
  }

  private render() {
    return <div class={`background`} style={this.style}></div>;
  }
}
