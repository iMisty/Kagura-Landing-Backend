<template>
  <div class="hitokoto">
    {{data}}
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class hitokoto extends Vue {
  public data:String = '11111';
}
</script>

