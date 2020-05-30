<!--
 * @Description: 一言模块
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-05-27 01:24:20
 * @LastEditors: Miya
 * @LastEditTime: 2020-05-27 15:21:20
--> 
<template>
  <div class="hitokoto">{{hito}}</div>
</template>

<script lang="ts">
import { Prop, Vue, Component } from 'vue-property-decorator';
@Component({})
export default class Hitokoto extends Vue {

  @Prop({ default: '加载中...', type: String }) private hito!: string;

}
</script>

