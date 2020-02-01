<template>
    <div class="list-button">
      <i class="fa" :class="this.$data.class" v-if="fa === true"></i>
      <img src="../assets/imgs/menu.png" alt="">
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
          class: '',
          fa: false
        };
    },
    computed: {
      buttons(){
        return this.$store.state.listButton;
      }
    },
    watch: {},
    methods: {
      getClass(){
        const a = this.$store.state.listButton;
        this.$data.class = a;
      }
    },
    created() {},
    mounted() {},
    }
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类

</style>