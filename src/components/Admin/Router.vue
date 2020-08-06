<!--
 * @Author: Miya
 * @Date: 2020-08-06 00:20:25
 * @LastEditors: Miya
 * @LastEditTime: 2020-08-07 00:14:15
 * @Description: file content
 * @FilePath: /Single-Search/src/components/Admin/Router.vue
-->
<template>
  <router-link class="icon" :to="path" tag="section">
    <Svgicon
      class="svg-title-icon"
      :svgClass="icon"
      :iconClass="title"
      :iconName="title"
    ></Svgicon>
    <p class="admin-left-router-text">{{ name }}</p>
  </router-link>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Svgicon from '@/components/svgicon.vue';
import '@/icons/svg/admin';
@Component({
  components: {
    Svgicon
  }
})
export default class Router extends Vue {
  // 跳转地址
  @Prop({ default: '/admin', type: String }) private path: string | undefined;
  // SVG图标地址
  @Prop({ default: 'shouye', type: String }) private title: string | undefined;
  // 组件名称
  @Prop({ default: 'HOME', type: String }) private name: string | undefined;
  private icon: string = 'icon';
}
</script>
