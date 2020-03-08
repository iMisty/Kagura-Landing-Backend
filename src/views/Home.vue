<template>
  <div class="home">
    <div class="right-side">
      <transition name="fade">
      <div class="right-side-button" @click="toggleSideBar()">
        <Buttons></Buttons>
      </div>
      </transition>
      <transition name="fade">
      <div class="right-side-wrap" v-show="active">
        <list></list>
      </div>
      </transition>
    </div>
    <weather></weather>
    <section class="wrap">
      <logo>
        <img src="../assets/imgs/logo.svg" alt />
      </logo>
      <search></search>
    </section>
    <hitokoto></hitokoto>
    <copyright></copyright>
    <extra v-show="mask === true"></extra>
  </div>
</template>

<script>
// @ is an alias to /src
import list from '../components/list.vue';
import Buttons from '../components/list-button.vue';
import extra from '../components/mask.vue';
export default {
  name: 'home',
  components: {
    weather: () => import('../components/weather'),
    logo: () => import('../components/logo'),
    search: () => import('../components/search'),
    copyright: () => import('../components/copyright'),
    hitokoto: () => import('../components/hitokoto'),
    extra,
    list,
    Buttons
  },
  data() {
    return {
      mask: false,
      active: false
    };
  },
  methods: {
    toggleSideBar(){
      this.$data.active = !this.$data.active;
      console.log(this.$data.active);
    }
  },
  computed: {},
  mounted() {}
};
</script>

<style lang="less" scoped>
.home {
  display: grid;
  grid-template-rows: 8% auto 8% 8%;
  width: 100vw;
  height: 100vh;
}

.right-side{
  position: absolute;
  right: 0;
  .right-side-button{
    position: absolute;
    left: -60px;
    top: 32px;
  }
}

.wrap{
  align-self: center;
}

@media screen and (max-width: 768px) {
  .home {
    min-height: 100vh;
    height: auto;
  }
}

.fade-enter-active, .fade-leave-active {
  transition-duration: .4s;
  transition-property: right;
  transition-property: opacity transform;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(100%);
  transition-property: transform;
}
</style>
