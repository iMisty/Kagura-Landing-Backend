<template>
  <div id="logo">
    <slot>
      <img src="../assets/logo.svg">
    </slot>
  </div>
</template>

<script>
export default {
  components: {},
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
img{
  width: 100%;
  height: 100%;
}
</style>
