<template>
  <div class="list">
    <div class="list-group">
      <div v-for="links in list" :key="links.index" class="lists">
        <div class="list-title">
          <i :class="links.class" :style="{color:links.titleIconColor}"></i>
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
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      list: "test",
      mask: false
    };
  },
  created() {},
  mounted() {
    this.getData();
  },
  computed: {
    lists() {
      return this.$store.state.list;
    }
  },
  watch: {},
  methods: {
    getData: function() {
      const a = this.$store.state.list;
      //console.log(a);
      this.$data.list = a;
    }
  }
};
</script>
<style lang='less' scoped>
@import "https://at.alicdn.com/t/font_1616129_d8kq833eqod.css";
.list {
  //position: fixed;
  top: 0;
  right: -100%;
  padding: 24px 32px;
  //width: 320px;
  height: 100vh;
  background-color: #222d46;
  color: #fff;
  z-index: 12;
  overflow-y: scroll;
  transition-duration: .4s;
  .lists {
    padding-bottom: 32px;
  }
}
.list-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  line-height: 2;
  i {
    font-size: 1.2em;
    padding: 0 8px;
  }
}
.list-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 12px;
  transition-duration: 0.4s;
  li {
    display: grid;
    grid-template-columns: 32% auto;
    padding: 8px;
    font-size: 14px;
    background-color: #293550;
    cursor: pointer;
    border-radius: 8px;
    transition-duration: .4s;
    &:hover {
      background-color: #0065bb;
      transition-duration: 0.4s;
    }
    a {
      color: #fff;
      text-decoration: none;
      text-align: left;
    }
  }
}
i {
  padding: 0 4px;
}
@media screen and (max-width: 768px) {
  .list {
    width: 240px;
    padding: 16px;
  }
  .list-wrap {
    grid-template-columns: 1fr 1fr;
    li {
      padding: 8px 0;
    }
  }
}
</style>