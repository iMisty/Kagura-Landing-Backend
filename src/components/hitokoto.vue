<template>
  <div class="hitokoto">
    {{data}}
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class Hitokoto extends Vue {
  public data: string = '11111';
}
</script>

