<template>
  <div id="app">
    <Home v-if="mode === 1"></Home>
    <list></list>
    <Admin v-if="mode === 2"></Admin>
  </div>
</template>

<script>
import home from './views/Home';
import list from './components/list.vue';
export default {
  components:{
    Home: home,
    'Admin': () => import('./views/Admin.vue'),
    list
  },
  data(){
    return{
      mode: 1
    }
  }
}
</script>

<style lang="less">
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
