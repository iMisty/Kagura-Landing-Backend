<!--
 * @Description: 一言模块
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-05-27 01:24:20
 * @LastEditors: Miya
 * @LastEditTime: 2020-05-27 02:43:33
--> 
<template>
  <div class="hitokoto">{{data1}}</div>
</template>

<script lang="ts">
import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator';

export default class Hitokoto extends Vue {

  private data1: string = '';

  private getHitokoto(): void {
    fetch('https://v1.hitokoto.cn')
      .then((response) => response.json())
      .then((data) => {
        this.data1 = data.hitokoto;
      })
      .catch();
  }


  private mounted() {
    this.getHitokoto();
  }
}
</script>

