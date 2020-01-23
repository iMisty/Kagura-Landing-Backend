<template>
  <div id="app">
    <Home v-if="mode === 1"></Home>
    <list></list>
    <Buttons></Buttons>
    <hitokoto></hitokoto>
    <Admin v-if="mode === 2"></Admin>
    <Masks></Masks>
  </div>
</template>

<script>
import home from "./views/Home";
import list from "./components/list.vue";
import Buttons from './components/list-button.vue';
export default {
  components: {
    Home: home,
    Admin: () => import("./views/Admin.vue"),
    list,Buttons,
    hitokoto: () => import("./components/hitokoto.vue"),
    Masks: () => import("./components/mask.vue")
  },
  data() {
    return {
      mode: 1,
      mask: false
    };
  }
};
</script>

<style lang="less" scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
