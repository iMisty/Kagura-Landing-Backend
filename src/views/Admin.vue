<!--
 * @Description: 后台管理
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-06-02 00:04:25
 * @LastEditors: Miya
 * @LastEditTime: 2020-06-04 00:28:05
--> 
<template>
  <div class="admin">
    <setting></setting>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import setting from '@/components/Home/setting.vue';
@Component({
  // 组件注册
  components: {
    setting
  }})
export default class Admin extends Vue {
}
</script>
