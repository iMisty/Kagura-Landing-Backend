/*
 * @Author: Miya
 * @Date: 2020-06-18 17:44:54
 * @LastEditTime: 2020-07-09 16:06:13
 * @LastEditors: Miya
 * @Description: 搜索引擎联想数据
 * @FilePath: \Single-Search\src\services\associateSearch.ts
 */

import { getBaiduData } from './dataClean';

/**
 * @description: 返回搜索引擎联想数据
 * @param {String} engines: 选定的搜索引擎
 * @param {String} value: 关键词
 * @return: 接口返回数据(已清洗)
 * @author: Miya
 */

// 查阅：各大浏览器搜索联想API: https://blog.iprub.com/php/50.html

const associateSearch = (engines: string, value: string) => {
  // 获取参数输入
  const engineValue = engines;
  const searchValue = value;
  switch (engineValue) {
    // Google
    case 'google':
      console.log('google');
      const resGoogle = getBaiduData(searchValue);
      console.log(resGoogle);
      // return resGoogle;
      break;
    // Bing
    case 'bing':
      console.log('bing');
      // TODO: 记得修改
      const resBing = getBaiduData(searchValue);
      return resBing;
      break;
    // Baidu
    case 'baidu':
      console.log('baidu');
      const resBaidu = getBaiduData(searchValue);
      return resBaidu;
    // Baidu
    default:
    // const res = getBaiduData(searchValue);
    // return res;
  }
};

export { associateSearch };
