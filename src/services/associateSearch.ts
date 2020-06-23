/*
 * @Author: Miya
 * @Date: 2020-06-18 17:44:54
 * @LastEditTime: 2020-06-23 15:19:16
 * @LastEditors: Please set LastEditors
 * @Description: 搜索引擎联想数据
 * @FilePath: /Single-Search/src/services/associateSearch.ts
 */

import { getBaiduData } from './dataClean';

/**
 * @description: 返回搜索引擎联想数据
 * @param {String} engines: 选定的搜索引擎 value: 关键词
 * @return: 接口返回数据（需清洗）
 * @author: Miya
 */

// 查阅：各大浏览器搜索联想API: https://blog.iprub.com/php/50.html

const associateSearch = (engines: string, value: string) => {
  // 获取参数输入
  const engineValue = engines;
  const searchValue = value;

  // FIXME: 判断搜索引擎
  // TODO: 封装一个axios方法用于跨域输入并获取返回数据
  switch (engineValue) {
    // Google
    case 'google':
    // const a = ajax();
    // return a;
    // Bing
    case 'bing':
    // const res = getBingData(searchValue);
    // return res;
    // Baidu
    case 'baidu':
      const res = getBaiduData(searchValue);
      return res;
    // Baidu
    default:
      // const res = getBaiduData(searchValue);
      // return res;
  }
};

export { associateSearch };
