/*
 * @Author: Miya
 * @Date: 2020-10-20 12:10:08
 * @LastEditTime: 2020-10-20 15:17:14
 * @LastEditors: Miya
 * @Description: 页脚模型
 * @FilePath: \Kagura-Landing-Backend\src\interface\Footer.ts
 * @Version:
 */
export interface FooterBody {
  code: number;
  msg: string;
  result?: Array<Object | String>;
  throw?: String;
}

export interface FooterRequest {
  img: string;
  pri: string;
  sec: string;
  copyrightyear: number;
  author: string;
  website: string;
}

export interface FooterContact {
  id: string;
  name: string;
  icon: string;
  link: string;
}
