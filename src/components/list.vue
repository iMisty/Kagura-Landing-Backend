<template>
    <div class="list">
      <div v-for="links in list" :key="links.index">
        <div>{{links.name}}</div>
        <ul>
          <li v-for="item in links.items" :key="item.index">
            <i class="iconfont" :class="item.class"></i>
            <p>{{item.text}}</p>
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
  width: 40vw;
  height: 100vh;
  background-color: #1453ad;
}
</style>