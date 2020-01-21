<template>
    <div class="list">
      <div v-for="links in list" :key="links.index" class="lists">
        <div class="list-title">
          <i class="fa" :class="links.class" :style="{color:links.titleIconColor}"></i>
          <h2>{{links.name}}</h2>
          </div>
        <ul class="list-wrap">
          <li v-for="item in links.items" :key="item.index">
            <i class="iconfont" :class="item.class"></i>
            <a :href="item.link" target="_blank">{{item.text}}</a>
            </li>
        </ul>
      </div>
    </div>
</template>

<script>

export default {
    components: {},
    data() {
        return {
            list: 'test'
        };
    },
      created() {},
      mounted() {
        this.getData();
      },
    computed: {
      lists(){
        return this.$store.state.list;
      },
    },
    watch: {},
    methods: {
      getData: function(){
        const a = this.$store.state.list;
        //console.log(a);
        this.$data.list = a;
      }
    },
    }
</script>
<style lang='less' scoped>
@import 'https://at.alicdn.com/t/font_1616129_d8kq833eqod.css';
.list{
  position: fixed;
  top: 0;
  right: 0;
  padding: 24px 16px;
  width: 32vw;
  height: 100vh;
  background-color: #222d46;
  color: #fff;
}
.list-title{
      display: flex;
      flex-direction: row;
      align-items: center;
      line-height: 2;
    i{
      font-size: 1.2em;
      padding: 0 8px;
    }
}
.list-wrap{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 12px;
    transition-duration: .4s;
    li{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 12px 0;
      font-size: 14px;
      background-color: #293550;
      cursor: pointer;
      border-radius: 8px;
      &:hover{
        background-color: #0065bb;
        transition-duration: .4s;
      }
      a{
        color: #fff;
        text-decoration: none;
      }
    }
}
i{
  padding: 0 4px;
}
</style>