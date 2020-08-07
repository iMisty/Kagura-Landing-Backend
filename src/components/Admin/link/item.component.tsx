import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class Item_Link_Admin extends Vue {
  protected render() {
    return (
      <div class="admin-item">
        <div class="admin-item-icons">
          <input
            class="admin-item-wrap admin-item-icon"
            type="text"
            name="test"
            value="iconfont-google"
          />
        </div>
        <input
          class="admin-item-wrap admin-item-name"
          type="text"
          name="test"
          value="Google"
          disabled={true}
        />
        <input
          class="admin-item-wrap admin-item-href"
          type="text"
          name="test"
          value="https://www.google.com"
          disabled={true}
        />
      </div>
    );
  }
}
