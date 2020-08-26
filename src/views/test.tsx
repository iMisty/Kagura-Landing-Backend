import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {}
})
export default class Test extends Vue {
  private render() {
    return <div class="test" style="color: #fff;"></div>;
  }
}
