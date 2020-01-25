<template>
    <div class="list-button">
      <i class="fa" :class="this.$data.class"></i>
    </div>
</template>

<script>

export default {
    components: {},
    data() {
        return {
          class: ''
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

</style>