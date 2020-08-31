/*
 * @Author: Miya
 * @Date: 2020-06-06 12:17:38
 * @LastEditTime: 2020-08-31 18:08:35
 * @LastEditors: Please set LastEditors
 * @Description: Vuex 内的 Mutations
 * @FilePath: \Single-Search\src\store\mutations.ts
 */

const mutations = {
  /*
  *  改变 status 中的 is_mask
  *  该变量用于修改是否开启蒙层
  */
  is_mask(state: any, data: boolean) {
    state.status.is_mask = data;
  },
  /*
  *  改变 status 中的 is_setting
  *  该变量用于修改是否开启用户设置边栏
  */
  is_setting(state: any, data: boolean) {
    state.status.is_setting = data;
  },
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
  },
  /*
   *  改变 state 里的 token
   *  该变量用于登录与退出
   */
  SETTOKEN(state: any, token: string) {
    state.token = token;
  }
};

export { mutations };
