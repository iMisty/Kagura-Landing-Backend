<template>
  <div id="app">
    <top></top>
    <home></home>
    <bottom></bottom>
  </div>
</template>

<script>
import top from './views/Top';
import home from './views/Home';
import bottom from './views/Bottom';
export default {
  components: {
    top,home,bottom
  },
  props: [],
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>
<style lang="less" scoped>
#app{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  overflow: hidden;
}
</style>
