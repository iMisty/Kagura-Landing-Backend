/*
 * @Author: Miya
 * @Date: 2020-10-19 18:18:53
 * @LastEditTime: 2020-10-19 18:38:36
 * @LastEditors: Miya
 * @Description: 返回提示列表
 * @FilePath: \Kagura-Landing-Backend\src\config\code.ts
 * @Version: 1.0
 */
function requestmsg(msg: string, code: number) {
  return {
    code,
    msg,
  };
}

export const FAIL_MESSAGE = requestmsg('操作失败', 11000);
export const SUCCESSED_MESSAGE = requestmsg('操作成功', 11001);
