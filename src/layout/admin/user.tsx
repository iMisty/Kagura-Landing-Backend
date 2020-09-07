/*
 * @Author: Miya
 * @Date: 2020-07-23 15:38:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-07 17:57:14
 * @Description: file content
 * @FilePath: /Single-Search/src/components/Admin/user.tsx
 */
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class UserAdmin extends Vue {
  protected render() {
    return (
      <div class="admin__user">
        <div class="admin__user--avatar">
          <div class="admin__user--avatar--image">
            <img src="" />
          </div>
          <input type="text" name="avatar" />
        </div>
        <div class="admin__user--setting">
          <section class="admin__user--setting--title">
            <h4>昵称</h4>
            <section class="admin__user--setting--tips">
              <div style="width: 12px;height: 12px;background-color: #222;"></div>
              <div>Test Text</div>
            </section>
          </section>
          <input type="text" name="setting" />
        </div>
        <div class="admin__user--setting">
          <section class="admin__user--setting--title">
            <h4>性别</h4>
            <section class="admin__user--setting--tips">
              <div style="width: 12px;height: 12px;background-color: #222;"></div>
              <div>Test Text</div>
            </section>
          </section>
          <input type="text" name="setting" />
        </div>
        <div class="admin__user--setting">
          <section class="admin__user--setting--title">
            <h4>骚话</h4>
            <section class="admin__user--setting--tips">
              <div style="width: 12px;height: 12px;background-color: #222;"></div>
              <div>Test Text</div>
            </section>
          </section>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div class="admin__user--setting">
          <section class="admin__user--setting--title">
            <h4>默认搜索引擎</h4>
            <section class="admin__user--setting--tips">
              <div style="width: 12px;height: 12px;background-color: #222;"></div>
              <div>Test Text</div>
            </section>
          </section>
          <input type="text" name="setting" />
        </div>
        <div class="admin__user--setting">
          <section class="admin__user--setting--title">
            <h4>适配颜色模式</h4>
            <section class="admin__user--setting--tips">
              <div style="width: 12px;height: 12px;background-color: #222;"></div>
              <div>Test Text</div>
            </section>
          </section>
          <section class="admin__user--setting--checkpoint">
            <section class="admin__user--setting--checkpoint--item">
              <input type="checkbox" name="light" id="" />
              <p>亮色模式</p>
            </section>
            <section class="admin__user--setting--checkpoint--item">
              <input type="checkbox" name="dark" id="" />
              <p>暗色模式</p>
            </section>
          </section>
        </div>
      </div>
    );
  }
}
