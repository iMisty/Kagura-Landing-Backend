/*
 * @Author: Miya
 * @Date: 2020-08-07 18:46:48
 * @LastEditors: Miya
 * @LastEditTime: 2020-08-07 18:47:17
 * @Description: 用户模型
 * @FilePath: \Single-Search\src\model\user.ts
 */
export default interface User {
  // 昵称
  name: string;
  // 头像
  avatar: string;
  // 性别 => 之后删除
  sex: string;
  // 骚话
  introduce: string;
}
