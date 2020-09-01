import { Component, Vue } from 'vue-property-decorator';
import input from '@/components/input.tsx';
import { getExtraData } from '@/utils/getSearchExtraData';
@Component({
  components: {
    'm-input': input
  }
})
export default class Test extends Vue {
  private aa: string = '';
  private submit: object = {};
  private datas: any = '';
  private async submits() {
    const a = await getExtraData('baidu', this.aa);
    console.log(a);
    this.submit = a;
  }
  private render() {
    return (
      <div style="width: 100vw;height: 100vh;display: flex;justify-content: center;align-items: center;">
        <input type="text" v-model={this.aa} />
        <p>{this.aa}</p>
        <button onClick={() => this.submits()}>Submit</button>
        <p>{this.submit}</p>
      </div>
    );
  }
}
