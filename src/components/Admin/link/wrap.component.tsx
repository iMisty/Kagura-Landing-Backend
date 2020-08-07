import { Component, Vue } from 'vue-property-decorator';
import ListItem from '@/components/Admin/link/item.component.tsx';
@Component({
  components: {
    'list-item': ListItem
  }
})
export default class Wrap_Link_Admin extends Vue{
  protected render() {
    return (
      <section class="admin-link-types">
    <header class="admin-link-types-title">
      <input
        class="item-title"
        type="text"
        name="title"
        value="Test1"
        disabled={true}
      />
    </header>
    <article class="admin-link-types-wrap">
      <list-item></list-item>
      <list-item></list-item>
      <list-item></list-item>
    </article>
  </section>
     );
  }
}