<!--
 * @Author: Miya
 * @Date: 2020-06-17 16:57:01
 * @LastEditTime: 2020-08-04 00:14:36
 * @LastEditors: Miya
 * @Description: 个人设置页
 * @FilePath: /Single-Search/src/components/Home/setting.vue
-->
<template>
  <div class="setting">
    <setting-user :name="setting.name" :sex="setting.sex" :introduce="setting.introduce" :avatar="setting.avatar"></setting-user>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import settingUser from '@/components/Home/setting/setting-user.vue';
interface User {
  // 昵称
  name: string;
  // 头像
  avatar: string;
  // 性别 => 之后删除
  sex: string;
  // 骚话
  introduce: string;
}

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
