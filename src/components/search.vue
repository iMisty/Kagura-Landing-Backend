<template>
    <div class="search">
      <div class="search-bar">
      <input type="text" name="" id="search" placeholder="请输入搜索内容" v-model="search">
      <i class="fa fa-search"></i>
      </div>
      <div class="submit">
        <submit></submit>
        <submit></submit>
      </div>
      <span>{{search}}</span>
    </div>
</template>

<script>

export default {
    components: {
      'submit': () => import('../components/search-button')
    },
    data() {
        return {
          search: ''
        };
    },
    computed: {},
    watch: {},
    methods: {},
    created() {},
    mounted() {},
    beforeCreate() {},
    beforeMount() {},
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {},
    destroyed() {},
    activated() {},
    }
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.search{
  margin: 0 auto;
  max-width: 64vw;
  .search-bar{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-self: center;
    border: 1px solid rgba(0,0,0,.08);
    border-radius: 32px;
  }
  input{
    padding: 12px;
    width: 100%;
    font-size: 16px;
    border: none;
    border-radius: 32px;
    outline: none;
  }
  .submit{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  i{
    display: flex;
    align-items: center;
    padding-right: 16px;
  }
}
</style>