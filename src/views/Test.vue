<template>
    <div class="test">
      <button @click="right()">123456</button>
      <div v-show="aa" :class="{'active': 'aa'}">aa: true</div>
    </div>
</template>

<script>

export default {
    components: {},
    data() {
        return {
          aa: false
        };
    },
    computed: {},
    watch: {},
    methods: {
      right(){
        this.$data.aa = !this.$data.aa;
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