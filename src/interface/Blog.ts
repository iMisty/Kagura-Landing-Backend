/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-10-18 04:53:02
 * @LastEditors: Miya
 * @LastEditTime: 2020-10-18 05:13:03
 * @Description: file content
 * @FilePath: /Kagura-Landing-Backend/src/interface/Blog.ts
 */
export interface BlogInterface {
  id: number;
  avatar: object | string;
  tag: String[];
  title: string;
  intro: string;
  content: string;
}
