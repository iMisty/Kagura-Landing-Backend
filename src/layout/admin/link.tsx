import { Component, Vue } from 'vue-property-decorator';

interface Link {
  icon: string;
  items: object[];
  name: string;
  titleIconColor: string;
}
@Component({
  components: {}
})
export default class AdminLink extends Vue {
  private linkData: Object[] = [];

  private getLinkData() {
    const data = this.$store.state.link;
    console.log(data);
    this.linkData = data;
  }

  private mounted() {
    this.getLinkData();
  }

  private render() {
    return (
      <div class="admin-link">
        <section class="admin-link-list">
          {this.linkData.map((item: any) => {
            return (
              <table border="1">
                <tr>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                </tr>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.titleIconColor}</td>
                  <td>{item.icon}</td>
                </tr>

                {item.items.map(item => {
                  return (
                    <tr>
                      <td>{item.icon}</td>
                      <td>{item.link}</td>
                      <td>{item.text}</td>
                    </tr>
                  );
                })}
              </table>
            );
          })}
        </section>
      </div>
    );
  }
}
