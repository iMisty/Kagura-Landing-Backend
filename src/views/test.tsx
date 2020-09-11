import { Component, Vue } from 'vue-property-decorator';
import InputInputing from '@/components/Admin/input-inputing';
import '@/style/mermaid.less';
@Component({
  components: {
    'input-inputing': InputInputing
  }
})
export default class Test extends Vue {
  private value: string = '111111';

  private a() {
    console.log('click');
    this.value = 'click';
  }

  private b() {
    console.log('focus');
    this.value = 'focus';
  }

  private c() {
    console.log('change');
    this.value = 'change';
  }

  private d() {
    console.log('blur');
    this.value = 'blur';
  }

  private render() {
    return (
      <div style="width: 100vw;height: 100vh;display: flex;justify-content: center;align-items: center;">
        <input-inputing
          type="text"
          name="setting"
          title="1111"
          value={this.value}
          onClickevent={() => this.a()}
          onFocusevent={() => this.b()}
          onChangeevent={() => this.c()}
          onBlurevent={() => this.d()}
        ></input-inputing>
      </div>
    );
  }
}
