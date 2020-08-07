<!--
 * @Author: Miya
 * @Date: 2020-06-17 16:57:01
 * @LastEditTime: 2020-08-07 18:47:44
 * @LastEditors: Miya
 * @Description: 个人设置页
 * @FilePath: \Single-Search\src\components\Home\setting.vue
-->
<template>
  <div class="setting">
    <setting-user
      :name="setting.name"
      :sex="setting.sex"
      :introduce="setting.introduce"
      :avatar="setting.avatar"
    ></setting-user>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import settingUser from '@/components/Home/setting/setting-user.vue';
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
}
</script>
