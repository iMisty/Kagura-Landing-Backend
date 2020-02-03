<template>
  <div class="list-button">
    <i class="fa" :class="this.$data.class" v-if="fa === true"></i>
    <img src="../assets/imgs/menu.png" alt v-if="fa === false" />
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      class: '',
      fa: true,
      isActive: false
    };
  },
  computed: {
    buttons() {
      return this.$store.state.listButton;
    }
  },
  watch: {},
  methods: {
    getClass() {
      const a = this.$store.state.listButton;
      this.$data.class = a;
    },
  },
  created() {},
  mounted() {
    this.getClass();
  }
};
</script>
<style lang='less' scoped>
.list-button {
  //position: absolute;
  top: 32px;
  right: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  padding: 8px;
  background-color: #2299ff;
  z-index: 12;
  border-radius: 64%;
  cursor: pointer;
  img {
    max-width: 80%;
  }
  i{
    color: #fff;
  }
}
@media screen and (max-width: 768px) {
  .list-button {
    right: 16px;
  }
}
</style>