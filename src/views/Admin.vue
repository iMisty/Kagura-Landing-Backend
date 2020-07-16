<!--
 * @Description: 后台管理
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-06-02 00:04:25
 * @LastEditors: Miya
 * @LastEditTime: 2020-07-16 19:27:16
-->
<template>
  <div class="admin">
    <section class="admin-top">
      <div class="admin-top-logo">
        <span>Logo</span>
      </div>
      <div class="admin-top-title">
        DashBoard
      </div>
    </section>
    <section class="admin-left">
      <div
        class="icon"
        style="width: 1rem;height: 1rem;background-color
      aliceblue;border-radius
      64%;overflow:hidden"
      >
        Icon
      </div>
      <div
        class="icon"
        style="width: 1rem;height: 1rem;background-color
      aliceblue;border-radius
      64%;overflow:hidden"
      >
        Icon
      </div>
      <div
        class="icon"
        style="width: 1rem;height: 1rem;background-color
      aliceblue;border-radius
      64%;overflow:hidden"
      >
        Icon
      </div>
      <div
        class="icon"
        style="width: 1rem;height: 1rem;background-color
      aliceblue;border-radius
      64%;overflow:hidden"
      >
        Icon
      </div>
      <div
        class="icon"
        style="width: 1rem;height: 1rem;background-color
      aliceblue;border-radius
      64%;overflow:hidden"
      >
        Icon
      </div>
      <div
        class="icon"
        style="width: 1rem;height: 1rem;background-color
      aliceblue;border-radius
      64%;overflow:hidden"
      >
        Icon
      </div>
      <div
        class="icon"
        style="width: 1rem;height: 1rem;background-color
      aliceblue;border-radius
      64%;overflow:hidden"
      >
        Icon
      </div>
      <div
        class="icon"
        style="width: 1rem;height: 1rem;background-color
      aliceblue;border-radius
      64%;overflow:hidden"
      >
        Icon
      </div>
    </section>
    <section class="admin-wrap">
      <section class="admin-wrap-puzzle">
        <section class="puzzle-wrap" style="width: 8rem;height: 8rem;">
          <div class="puzzle-title">Test Puzzle</div>
          <div class="puzzle-text">
            This is a test text.This is a test text.This is a test text.This is
            a test Text
          </div>
        </section>
        <section class="puzzle-wrap" style="width: 8rem;height: 8rem;">
          <div class="puzzle-title">Test Puzzle</div>
          <div class="puzzle-text">
            This is a test text.This is a test text.This is a test text.This is
            a test Text
          </div>
        </section>
        <section class="puzzle-wrap" style="width: 8rem;height: 8rem;">
          <div class="puzzle-title">Test Puzzle</div>
          <div class="puzzle-text">
            This is a test text.This is a test text.This is a test text.This is
            a test Text
          </div>
        </section>
        <section class="puzzle-wrap" style="width: 8rem;height: 8rem;">
          <div class="puzzle-title">Test Puzzle</div>
          <div class="puzzle-text">
            This is a test text.This is a test text.This is a test text.This is
            a test Text
          </div>
        </section>
        <section class="puzzle-wrap" style="width: 8rem;height: 8rem;">
          <div class="puzzle-title">Test Puzzle</div>
          <div class="puzzle-text">
            This is a test text.This is a test text.This is a test text.This is
            a test Text
          </div>
        </section>
        <section class="puzzle-wrap" style="width: 8rem;height: 8rem;">
          <div class="puzzle-title">Test Puzzle</div>
          <div class="puzzle-text">
            This is a test text.This is a test text.This is a test text.This is
            a test Text
          </div>
        </section>
        <section class="puzzle-wrap" style="width: 8rem;height: 8rem;">
          <div class="puzzle-title">Test Puzzle</div>
          <div class="puzzle-text">
            This is a test text.This is a test text.This is a test text.This is
            a test Text
          </div>
        </section>
        <section class="puzzle-wrap" style="width: 8rem;height: 8rem;">
          <div class="puzzle-title">Test Puzzle</div>
          <div class="puzzle-text">
            This is a test text.This is a test text.This is a test text.This is
            a test Text
          </div>
        </section>
        <section class="puzzle-wrap" style="width: 8rem;height: 8rem;">
          <div class="puzzle-title">Test Puzzle</div>
          <div class="puzzle-text">
            This is a test text.This is a test text.This is a test text.This is
            a test Text
          </div>
        </section>
      </section>
      <section class="admin-wrap-right">
        <div class="admin-wrap-info">
          <article class="admin-wrap-info-name">
            <span>Hello,</span>
            <span>Miya</span>
          </article>
          <article class="admin-wrap-info-avatar">
            <div
              style="width: 4rem;height: 4rem;background-color: aliceblue;border-radius: 50%;"
            ></div>
          </article>
        </div>
        <div class="admin-wrap-results">
          <article class="admin-wrap-result">
            <div class="result-title">Total Links:</div>
            <div class="result-sum">190</div>
          </article>
          <article class="admin-wrap-result">
            <div class="result-title">Total Links:</div>
            <div class="result-sum">190</div>
          </article>
          <article class="admin-wrap-result">
            <div class="result-title">Total Links:</div>
            <div class="result-sum">190</div>
          </article>
          <article class="admin-wrap-result">
            <div class="result-title">Total Links:</div>
            <div class="result-sum">190</div>
          </article>
        </div>
      </section>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import setting from '@/components/Home/setting.vue';
@Component({
  // 组件注册
  components: {
    setting
  }
})
export default class Admin extends Vue {}
</script>

<style lang="less">
.admin {
  background-color: aquamarine;
}
</style>
