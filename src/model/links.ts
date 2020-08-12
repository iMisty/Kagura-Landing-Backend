/*
 * @Author: Miya
 * @Date: 2020-08-13 00:02:09
 * @LastEditors: Miya
 * @LastEditTime: 2020-08-13 00:25:07
 * @Description: 导航栏链接模型
 * @FilePath: /Single-Search/src/model/links.ts
 */
export default interface Link {
  name: string;
  color: string;
  icon: string;
  items: [
    {
      icon: string;
      link: string;
      text: string;
    }
  ];
}
