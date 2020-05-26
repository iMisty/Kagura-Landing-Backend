<template>
  <div class="list">
    <button class="list--button">
      <img :src="listButtonSrc" alt="">
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator';
@Component({})
export default class List extends Vue {

  private listButtonSrc: string = require('@/assets/menu.png');
}
</script>

