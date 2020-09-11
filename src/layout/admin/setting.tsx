/*
 * @Author: Miya
 * @Date: 2020-08-05 22:53:12
 * @LastEditors: Miya
 * @LastEditTime: 2020-09-11 12:26:10
 * @Description: Setting Page In Admin
 * @FilePath: \Single-Search\src\layout\admin\setting.tsx
 */

import { Component, Vue } from 'vue-property-decorator';
// checkbox
import checkbox from '@/components/Admin/input-checkbox';

interface Setting {
  background: string;
  search_logo: string;
  blur_style: boolean;
  hitokoto: boolean;
  copyright: {
    author: string;
    website: string;
  };
  start_date: string;
}
@Component({
  components: {
    'input-checkbox': checkbox
  }
})
export default class SettingsAdmin extends Vue {
  // 设置数据
  private settingData!: Setting;

  // 获取数据
  private getSettingData() {
    const getDataInLocalStorage = localStorage.getItem('setting_data');
    if (getDataInLocalStorage === null) {
      const getDataInVuex = this.$store.state.settings.home;
      this.settingData = getDataInVuex;
      console.log(`获取设置数据： ${JSON.stringify(this.settingData)}`);
      return;
    }
    this.settingData = JSON.parse(getDataInLocalStorage);
    console.log(`获取设置数据： ${JSON.stringify(this.settingData)}`);
  }

  private mounted() {
    this.getSettingData();
  }

  private render() {
    return (
      <div class="content">
        <div class="admin__settings">
          <input-checkbox title="测试标题1"></input-checkbox>
          <input-checkbox title="测试标题1"></input-checkbox>
          <input-checkbox title="测试标题1"></input-checkbox>
          <input-checkbox title="测试标题1"></input-checkbox>
          <input-checkbox title="测试标题1"></input-checkbox>
          <input-checkbox title="测试标题1"></input-checkbox>
          <input-checkbox title="测试标题1"></input-checkbox>
          <input-checkbox title="测试标题1"></input-checkbox>
        </div>
      </div>
    );
  }
}
