<template>
  <div class="mask"></div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
		};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang='less' scoped>
.mask{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,.36);
  overflow:hidden;
  z-index: 2;
}
</style>