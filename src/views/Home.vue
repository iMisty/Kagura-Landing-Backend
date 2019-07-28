<template>
  <div id="home">
    <div class="medium">
      <logo></logo>
      <input type="text" placeholder="请输入搜索内容" name="sth">
      <section class="buttons">
        <search></search>
        <search></search>
        <search></search>
      </section>
    </div>
    <div class="bottom">
      <Text></Text>
    </div>
  </div>
</template>

<script>
import logo from '../components/Logo';
import search from '../components/Search';
export default {
  components: {
    logo,search
  },
  props: [],
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
input{
    width: 64vw;
    height: 3.2rem;
    padding: 1rem;
    font-size: 2rem;
    border-radius: 8rem;
    border: 1px solid #dedede;
}
</style>
