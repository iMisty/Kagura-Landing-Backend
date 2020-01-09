<template>
  <div class="copyright">©2005 - {{year}} By iMisty</div>
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
	}
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
</style>