<template>
  <section class="linksum">
    <header class="linksum__title">{{ title }}</header>
    <article class="linksum__sum">{{ num }}</article>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import '@/style/admin/components/linksum.less';
@Component({})
export default class LinkSumAdmin extends Vue {
  // 标题
  @Prop({ default: '链接总数目' }) private title!: string;
  // 数目
  @Prop({ default: 113 }) private num!: number;
}
</script>
