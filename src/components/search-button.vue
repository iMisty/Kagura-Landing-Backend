<template>
  <div class="search-button">
    <div class="normal-search">
      <slot name="icon"></slot>
      <slot name="text">Search</slot>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.search-button {
  margin: 16px;
  padding: 8px 16px;
  background-color: rgba(0, 0, 0, 0.08);
  border-radius: 32px;
  cursor: pointer;
}
.normal-search,.extra-search{
    display: flex;
  flex-direction: row;
  align-items: center;
  img{
    width: 16px;
    height: 16px;
    padding-right: 8px;
  }
}
</style>