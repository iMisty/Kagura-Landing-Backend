<template>
  <div id="links">
    <a href="#">
      <img src="../assets/menu.png" alt="" class="menu-img">
    </a>
    <list></list>
  </div>
</template>

<script>
import list from './List';
export default {
  components: {
    list
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
.menu-img{
  width: 4rem;
  height: 4rem;
}
</style>
