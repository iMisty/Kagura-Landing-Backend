<template>
  <div class="home">
    <section class="home--top">
      <List></List>
    </section>
    <section class="home--medium">
      <Search></Search>
    </section>
    <section class="home--bottom">
      <Copyright></Copyright>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import List from '@/components/list.vue';
import Search from '@/components/search.vue';
import Copyright from '@/components/copyright.vue';

@Component({
  // 组件注册
  components: {
    List,
    Search,
    Copyright,
  },
})
export default class Home extends Vue {
  // data

  // props

  // create
  private created() {
    const a = '';
  }

  // mounted
  private mounted() {
    const a = '';
  }
}
</script>