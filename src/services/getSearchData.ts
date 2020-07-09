/*
 * @Author: Miya
 * @Date: 2020-07-09 18:34:43
 * @LastEditors: Miya
 * @LastEditTime: 2020-07-09 18:58:15
 * @Description: 获取清洗后的搜索引擎联想关键词
 * @FilePath: \Single-Search\src\services\getSearchData.ts
 */
import axios from 'axios';

// 搜索引擎用URL
// http://suggestqueries.google.com/complete/search?output=toolbar&hl=zh&q=前端
const GOOGLE_API = '/googleapi/search';
// param: type,q,cb
const BING_API = '/bingapi/qsonhs.aspx';
// param: wd
const BAIDU_API = '/baiduapi/su';

/**
 * @description: 根据传入的搜索引擎返回对应的联想数据
 * @param {string} engine: 搜素引擎
 * @return: 联想数据
 */
const getSearchExtraData = async (engine: string, value: string) => {
};

export default getSearchExtraData;
