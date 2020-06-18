<!--
 * @Author: Miya
 * @Date: 2020-06-18 14:50:31
 * @LastEditTime: 2020-06-18 23:16:45
 * @LastEditors: Miya
 * @Description: In User Settings Edit
 * @FilePath: /Single-Search/src/components/Home/setting/config-list.vue
--> 
<template>
  <div class="setting--config-list">
    <div class="choose--mode">
      <dark-mode></dark-mode>
    </div>
    <div class="choose--mode">
      <dark-mode></dark-mode>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import darkMode from '@/components/Home/dark-mode.vue';

@Component({
  components: {
    'dark-mode': darkMode,
  },
})
export default class ConfigList extends Vue {}
</script>

