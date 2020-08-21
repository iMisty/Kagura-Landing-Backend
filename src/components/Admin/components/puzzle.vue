<template>
  <section class="puzzle-wrap" :class="[rowClass, columnClass]">
    <slot>
      <div class="puzzle-title">{{ title }}</div>
      <div class="puzzle-text">{{ text }}</div>
    </slot>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({})
export default class PuzzleAdmin extends Vue {
  // @Props: title => 标题
  @Prop({ default: 'Test Puzzle', type: String }) public title:
    | string
    | undefined;
  // @Props: text => 内容
  @Prop({
    default: 'This is a test text.',
    type: String
  })
  public text: string | undefined;
  // 组件占用的空间
  @Prop({ default: 1 }) private row: number | undefined;
  @Prop({ default: 2 }) private column: number | undefined;

  // computed
  get rowClass(): string {
    return `row-${this.row}`;
  }
  get columnClass(): string {
    return `column-${this.column}`;
  }
}
</script>
