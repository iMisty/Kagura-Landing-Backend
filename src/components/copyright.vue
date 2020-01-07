<template>
  <div class="copyright">copyright</div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
			year: 0
		};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {
		const d = new Date();
		const years = d.getFullYear();
		this.$data.year = years;
		// eslint-disable-next-line no-console
		console.log(years);
	}
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
</style>