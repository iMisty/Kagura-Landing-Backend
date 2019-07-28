<template>
  <div id="top">
    <weather></weather>
    <links></links>
  </div>
</template>

<script>
import weather from '../components/Weather';
import links from '../components/Links';
export default {
  components: {
    weather,links
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
#top{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}
</style>
