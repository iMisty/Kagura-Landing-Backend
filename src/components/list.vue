<template>
    <div class="list">

    </div>
</template>

<script>

export default {
    components: {},
    data() {
        return {
          data: {
            video: {
              name: 'Videos',
              list:[
                {icon:'aaa.gif',link: 'https://www.youtube.com',text: 'Youtube'},
                {icon:'aaa.gif',link: 'https://www.bilibili.com',text: 'Bilibili'},
                {icon:'aaa.gif',link: 'https://www.acfun.com',text: 'ACFun'},
                {icon:'aaa.gif',link: 'https://www.youku.com',text: 'Youku'},
              ]
            }
          }
        };
    },
    computed: {},
    watch: {},
    methods: {
      getIndex: function(){
        this.click = this.link;
        // eslint-disable-next-line no-console
        console.log(this.click);
      }
    },
    created() {},
    mounted() {},
    }
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类

</style>