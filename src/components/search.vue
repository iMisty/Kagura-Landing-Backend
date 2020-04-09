<template>
    <div class="search">
      <div class="search-bar">
      <input type="text" name="" id="search" placeholder="请输入搜索内容" v-model="search" @keyup.enter="searchValue()">
      <i class="fa fa-search" @click="searchValue()"></i>
      </div>
      <div class="submit">
        <submit @click.native="searchValue()">
          <template v-slot:icon>
            <img src="http://www.51tfb.com/uploadfile/20190417/201904171725355cb6f10f8cf23.jpg" alt="">
          </template>
          <template v-slot:text>
            <div>
              百度搜索
            </div>
          </template>
        </submit>
        <submit></submit>
      </div>
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
    methods: {
      // 点击后搜索(测试数据)
      searchValue(){
        const value = this.$data.search;
        window.location.href = `https://baidu.com/s?wd=${value}`;
      },
    },
    created() {},
    mounted() {}
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
    cursor: pointer;
  }
}
</style>