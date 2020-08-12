import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class Test extends Vue {
  private data: String[] = [];
  private mounted() {
    const a = this.$store.state.link;
    this.data = a;
    console.log(this.data);
  }
  protected render() {
    return (
      <div class="test" style="color: #fff;">
        {this.data.map(item => {
          return (
            <div>
              {/* @ts-ignore */}
              {item.name}
              <ul>
                {/* @ts-ignore */}
                {<li>{item.items}</li>}
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}
