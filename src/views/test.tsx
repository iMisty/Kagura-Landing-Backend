import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
  }
})
export default class Test extends Vue {


  private render() {
    return (
      <div style="width: 100vw;height: 100vh;display: flex;justify-content: center;align-items: center;">
        <i class="iconfont icon-home" style="color: #595BB3;"></i>
      </div>
    );
  }
}
