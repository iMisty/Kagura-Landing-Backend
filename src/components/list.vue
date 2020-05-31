<template>
  <div class="list">
    <button class="list--button">
      <img :src="listButtonSrc" alt />
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({})
export default class List extends Vue {

  private listButtonSrc: string = require('@/assets/menu.png');
}
</script>

