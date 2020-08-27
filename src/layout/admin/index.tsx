/*
 * @Author: Miya
 * @Date: 2020-07-23 15:49:17
 * @LastEditors: Miya
 * @LastEditTime: 2020-08-28 00:53:02
 * @Description: 后台管理首页
 * @FilePath: /Single-Search/src/layout/admin/index.tsx
 */
import { Component, Vue } from 'vue-property-decorator';
// 卡片式框架组件
import puzzle from '@/components/Admin/puzzle.tsx';
// 计数器组件
import linksum from '@/components/Admin/linksum.tsx';
import Sum from '@/model/sum';
import '@/style/layout/admin/style.less';
@Component({
  components: {
    puzzle,
    'link-sum': linksum
  }
})
export default class IndexAdmin extends Vue {
  // 目前已经拥有的链接分类总数
  private linkSortSum: Sum = {
    title: '分类总数',
    sum: 0
  };

  // 获取当前Vuex中的链接存放数目
  private getLinkSum() {
    const data = this.$store.state.link;
    this.linkSortSum.sum = data.length;
    return true;
  }

  private mounted() {
    this.getLinkSum();
  }

  private render() {
    return (
      <div class="admin-index">
        <section class="admin-wrap-puzzle">
          <puzzle row="2" column="4"></puzzle>
          <puzzle row="1" column="1"></puzzle>
          <puzzle row="1" column="1"></puzzle>
          <puzzle row="1" column="2" title={null}>
            <div class="admin__wrap-puzzle--sum">
              <link-sum
                title={this.linkSortSum.title}
                num={this.linkSortSum.sum}
              ></link-sum>
              <link-sum></link-sum>
              <link-sum></link-sum>
              <link-sum></link-sum>
            </div>
          </puzzle>
          <puzzle row="1" column="1"></puzzle>
          <puzzle row="1" column="1"></puzzle>
          <puzzle></puzzle>
        </section>
      </div>
    );
  }
}
