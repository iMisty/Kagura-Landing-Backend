import { Component, Vue } from 'vue-property-decorator';
import Switch from '@/components/Mermaid/switch';
import '@/style/mermaid.less';
@Component({
  components: {
    'm-switch': Switch
  }
})
export default class Test extends Vue {
  private status: boolean = false;

  private click() {
    this.status = !this.status;
  }

  get switchActive() {
    if (!this.status) {
      return '';
    }
    if (this.status) {
      return 'switch-active';
    }
  }

  private render() {
    return (
      <div style="width: 100vw;height: 100vh;display: flex;justify-content: center;align-items: center;">
        <m-switch
          status={this.status}
          onHandleClick={() => this.click()}
        ></m-switch>
      </div>
    );
  }
}
