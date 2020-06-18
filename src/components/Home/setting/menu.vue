<!--
 * @Author: Miya
 * @Date: 2020-06-18 11:24:32
 * @LastEditTime: 2020-06-18 15:10:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Single-Search/src/components/Home/setting/menu.vue
--> 
<template>
  <div class="setting--menu-item">
    <svg-icon 
      class="svg-title-icon" 
      :svgClass="icon.name" 
      :iconClass="icon.icon" 
      :iconName="icon.icon"
    ></svg-icon>
    <p class="setting--menu-item-text" style="font-size:1rem;">{{text}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import svgIcon from '@/components/svgicon.vue';

@Component({
  components: {
    'svg-icon': svgIcon
  }
})
export default class Menu extends Vue {
  private icon: object = {
    name: 'icon',
    icon: 'react',
  };
  private text: string = '2222222';
}
</script>
