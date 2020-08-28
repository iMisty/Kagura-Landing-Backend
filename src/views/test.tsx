import { Component, Vue } from 'vue-property-decorator';
import input from '@/components/input.tsx';
@Component({
  components: {
    'm-input': input
  }
})
export default class Test extends Vue {
  private render() {
    return (
      <div style="width: 100vw;height: 100vh;display: flex;justify-content: center;align-items: center;">
      <m-input type="text"></m-input>
      </div>
    );
  }
}
