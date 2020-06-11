<!--
 * @Description: 选择搜索引擎组件
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-06-11 23:32:14
 * @LastEditors: Miya
 * @LastEditTime: 2020-06-12 00:11:25
--> 
 <template>
  <li class="choose-engine-wrap" :data-value="value">
    <Svgicon :svgClass="icon" :iconClass="value" :iconName="value"></Svgicon>
    <p class="choose-engine-wrap-text">{{value}}</p>
  </li>
</template>
 
 <script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Svgicon from '@/components/svgicon.vue';
@Component({
  // 组件注册
  components: {
    Svgicon
  }})
export default class SearchChoose extends Vue {
  private icon: string = 'icon';
  // props
  @Prop() public value: unknown;
}
 </script>
