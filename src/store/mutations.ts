/*
 * @Author: Miya
 * @Date: 2020-06-06 12:17:38
 * @LastEditTime: 2020-07-20 16:19:26
 * @LastEditors: Miya
 * @Description: Vuex 内的 Mutations
 * @FilePath: \Single-Search\src\store\mutations.ts
 */

const mutations = {
  /*
   *  改变 status 中的 isInputing
   *  该变量用于修改聚焦后是否打开对应的 active CSS class
   */
  IS_INPUTING(state: any, isInputing: boolean) {
    state.status.isInputing = isInputing;
  },
  /*
   *  改变 status 中的 styleMode
   *  该变量用于确认是否启用夜间模式
   */
  STYLEMODE(state: any, style: string) {
    state.status.styleMode = style;
  }
};

export { mutations };
