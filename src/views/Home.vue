<template>
  <div class="home">
    <weather></weather>
    <section class="wrap">
    <logo>
      <img src="../assets/imgs/logo.svg" alt="">
    </logo>
    <search></search>
    </section>
    <copyright></copyright>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
    'weather': () => import('../components/weather'),
    'logo': () => import('../components/logo'),
    'search': () => import('../components/search'),
    'copyright': () => import('../components/copyright')
  }
}
</script>

<style lang="less">
.home{
  display: grid;
  grid-template-rows: 8% auto 8%;
  width: 100vw;
  height: 100vh;
}
</style>
