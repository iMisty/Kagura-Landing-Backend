import { Vue, Component, Prop } from 'vue-property-decorator';
import User from '@/components/Admin/user';

@Component({
  components: {
    'admin-user': User
  }
})
export default class AdminTop extends Vue {
  @Prop() private logo!: string;

  /**
   * @description: 返回首页
   * @param {type}
   * @return {type} boolean
   */
  private backToIndex() {
    this.$router.push({ path: '/' });
    return true;
  }

  private render() {
    return (
      <section class="admin__top">
        <section class="admin__top--logo" onClick={this.backToIndex}>
          <img src={this.logo} alt="test logo" />
          <div class="admin__top-title">DashBoard</div>
        </section>
        <admin-user></admin-user>
      </section>
    );
  }
}
