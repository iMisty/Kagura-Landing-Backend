<template>
 <div class="hitokoto">
   <p>{{text}}{{from}}</p>
 </div>
</template>

<script>
 export default {
   data () {
     return {
       text: '获取失败,请刷新重试',
       from: ''
     }
   },
   components: {

   },
   methods:{
    getHitokoto() {
			const _this = this;
			fetch('https://v1.hitokoto.cn')
				.then(function (res) {
					return res.json();
				})
				.then(function (data) {
					console.log(data);
          _this.$data.text = data.hitokoto;
          _this.$data.from = ` -- ${data.from}`;
				})
				.catch(function (err) {
					console.error(err);
				})
		},
     sta(){
       this.$data.text = this.store.hitokoto;
     }
   },
   mounted(){
     this.getHitokoto();
   }
 }
</script>

<style>

 
</style>
