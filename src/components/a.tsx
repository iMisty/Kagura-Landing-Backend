import VueRouter from 'vue-router';
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class A extends Vue {
  private render() {
    return (
      <div class="test" style="color: #fff;">
        <div class="default">{this.$slots.default}</div>
        <div class="header">{this.$slots.header}</div>
      </div>
    );
  }
}
