import { Component, Vue } from 'vue-property-decorator';
import login from '@/components/Home/bottom/login';
@Component({
  components: {
    login
  }
})
export default class Test extends Vue {
  private mounted() {

  }
  private render() {
    return (
      <div class="test" style="color: #fff;">
        <login></login>
      </div>
    );
  }
}
