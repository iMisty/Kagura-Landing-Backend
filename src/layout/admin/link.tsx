import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
  }
})
export default class AdminLink extends Vue {
  protected render() {
    return (
      <div class="admin-link">
        <section class="admin-link-list">
          link
        </section>
        <div class="admin-link-addnew">+</div>
      </div>
    );
  }
}
