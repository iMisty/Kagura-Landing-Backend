/*
 * @Author: Miya
 * @Date: 2020-07-23 15:49:17
 * @LastEditors: Miya
 * @LastEditTime: 2020-08-08 00:08:21
 * @Description: 后台管理首页
 * @FilePath: /Single-Search/src/components/Admin/index.tsx
 */
import { Component, Vue } from 'vue-property-decorator';
import puzzle from '@/components/Admin/puzzle.component.tsx';
@Component({
  components: {
    puzzle
  }
})
export default class Index_Admin extends Vue {
  protected render() {
    return (
      <div class="admin-index">
        <section class="admin-wrap-puzzle">
          <puzzle row="2" column="2"></puzzle>
          <puzzle></puzzle>
          <puzzle></puzzle>
          <puzzle></puzzle>
          <puzzle></puzzle>
          <puzzle></puzzle>
          <puzzle></puzzle>
        </section>
      </div>
    );
  }
}
