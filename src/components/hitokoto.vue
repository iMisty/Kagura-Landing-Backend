<!--
 * @Description: 一言模块
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-05-27 01:24:20
 * @LastEditors: Miya
 * @LastEditTime: 2020-06-03 00:11:26
--> 
<template>
  <div class="hitokoto">{{hito}}</div>
</template>

<script lang="ts">
import { Prop, Vue, Component } from 'vue-property-decorator';
@Component({})
export default class Hitokoto extends Vue {

  @Prop({ default: '加载中...', type: String }) public hito!: string;

}
</script>

