import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class Test extends Vue {
  private data: string[] = [];
  private mounted() {
    const a = this.$store.state.link;
    this.data = a;
    console.log(this.data);
  }
  private render() {
    return (
      <div class="test" style="color: #fff;">
        {this.data.map((item: any) => {
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
