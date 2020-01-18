<template>
 <div class="hitokoto">
   <p>{{text}}</p>
 </div>
</template>

<script>
 export default {
   data () {
     return {
       text: '111'
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
     //this.getHitokoto();
     //this.sta();
   }
 }
</script>

<style>

 
</style>
