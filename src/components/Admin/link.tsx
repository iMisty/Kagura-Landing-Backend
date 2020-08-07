import { Component, Vue } from 'vue-property-decorator';
import linkWrap from '@/components/Admin/link/wrap.component.tsx';
@Component({
  components: {
    'link-wrap': linkWrap
  }
})
export default class Link_Admin extends Vue {
  protected render() {
    return (
      <div class="admin-link">
        <section class="admin-link-list">
          <link-wrap></link-wrap>
          <link-wrap></link-wrap>
          <link-wrap></link-wrap>
        </section>
        <div class="admin-link-addnew">+</div>
      </div>
    );
  }
}
