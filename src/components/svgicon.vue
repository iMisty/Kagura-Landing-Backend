<!--
 * @Author: Miya
 * @Date: 2020-06-08 17:42:30
 * @LastEditTime: 2020-06-08 17:55:08
 * @LastEditors: Please set LastEditors
 * @Description: SVG 图标支持
 * @FilePath: /Single-Search/src/components/svgicon.vue
--> 
<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Svgicon extends Vue{

// Props
@Prop({required: true})public iconClass: unknown;
@Prop()public className: unknown;

// Computed

get iconName(){
  return `#icon-${this.iconClass}`;
}

get svgClass(){
  if(this.className){
    return `svg-icon ${this.className}`;
  }else{
    return 'svg-icon';
  }
}

}
</script>


<style lang="less" scope>
  .svg-icon{
    width: 1.5rem;
    height: 1.5rem;
    vertical-align: -0.15rem;
    fill: currentColor;
    overflow: hidden;
  }
</style>
