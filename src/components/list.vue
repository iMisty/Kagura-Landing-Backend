<template>
    <div class="list">
      <ul>
        <li v-for="list in data.video.list" :key="list.index">
          <i :class="list.class" class="fa"></i>
          <a :href="list.link" target="_blank">{{list.text}}</a>
        </li>
      </ul>
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
                {icon:'@/assets/imgs/youtube.png',link: 'https://www.youtube.com',text: 'Youtube',class:'fa-youtube'},
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