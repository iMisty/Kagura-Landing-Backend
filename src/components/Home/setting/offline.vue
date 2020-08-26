<!--
 * @Author: Miya
 * @Date: 2020-08-23 21:38:13
 * @LastEditors: Miya
 * @LastEditTime: 2020-08-26 23:55:09
 * @Description: 首页右侧边栏用于显示用户离线时
 * @FilePath: /Single-Search/src/components/Home/setting/offline.vue
-->
<template>
  <div class="setting__wrap setting__logoff">
    <article class="setting__logoff--avatar">
      <section class="setting--avatar setting--avatar--female">
        <img src="@/assets/female.svg"/>
      </section>
    </article>
    <article class="setting__logoff--setting">
      <button class="setting__logoff--setting--button" @click="handleLogin">
        Login
      </button>
      <button class="setting__logoff--setting--button" @click="handleNoEvent">
        Registry
      </button>
    </article>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class extends Vue {
  // 控制点击后进入登录页面
  private handleLogin(): void {
    this.$router.push({ path: 'login' });
  }
  // 点击弹一个敬请期待
  private handleNoEvent(): void {
    console.log('No');
  }
}
</script>
<style lang="less" scoped>
@import '@/style/global/var.less';

.setting__logoff {
  .layout-flex(flex, row, space-between, center, wrap);

  // Normal Avatar
  &--avatar {
    flex: 1;
  }

  // Button list
  &--setting {
    .layout-flex(flex, column, center, flex-end);
    flex: 1;

    // button
    &--button {
      margin: 0.5rem;
      width: 5rem;
      height: 2rem;
      color: @pri-text-dark;
      border: 1px solid #888;
      cursor: pointer;
      border-radius: @border-radius;
    }
  }
}
</style>
