/*
 * @Author: Miya
 * @Date: 2020-10-16 16:35:46
 * @LastEditTime: 2020-10-16 16:39:35
 * @LastEditors: Miya
 * @Description: 返回数据接口
 * @FilePath: \Kagura-Landing-Backend\src\interface\Response.ts
 * @Version: 1.0
 */
export interface Response{
  code?: number | string;
  msg: string;
}