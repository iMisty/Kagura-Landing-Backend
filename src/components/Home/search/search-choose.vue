<!--
 * @Description: 选择搜索引擎组件
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-06-11 23:32:14
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-08-18 16:13:28
--> 
 <template>
  <li class="choose-engine-wrap" :data-value="value" @click="handleChooseEngine">
    <Svgicon
      class="svg-icon svg-title-icon"
      :svgClass="icon"
      :iconClass="iconValue"
      :iconName="iconValue"
    ></Svgicon>
    <p class="choose-engine-wrap-text">{{value}}</p>
  </li>
</template>
 
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Svgicon from '@/components/global/svgicon';
@Component({
  // 组件注册
  components: {
    Svgicon,
  }})
export default class SearchChoose extends Vue {
  private icon: string = 'icon';
  // props
  @Prop() private iconValue: unknown;
  @Prop() private value: unknown;

  /**
   * @name: handleChooseSearchEngine
   * @msg: 点击获取使用的搜索引擎
   * @param {type}
   * @return: void
   */
  private handleChooseEngine(): void {
    this.$emit('choose');
  }
}
</script>
