<template>
  <div id="App">
    <Home></Home>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Home from '@/views/Home.vue';

@Component({
  // 组件注册
  components: {
    Home,
  }})
export default class App extends Vue {
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
<style lang="less">
</style>