/*
 * @Description: 封装 Axios 方法
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-06-18 23:31:58
 * @LastEditors: Miya
 * @LastEditTime: 2020-07-09 16:06:31
 */
import axios from 'axios';
// http://suggestqueries.google.com/complete/search?output=toolbar&hl=zh&q=前端
const GOOGLE_API = '/googleapi/search';
// param: type,q,cb
const BING_API = '/bingapi/qsonhs.aspx';
// param: wd
const BAIDU_API = '/baiduapi/su';

/**
 * @description: Google API 查询
 * @param {String} value: 搜索关键字
 * @return: 未进行数据清洗的返回数据
 * @author: Miya
 */
// const getSearchGoogleAPIData = async (value: string) => {
  // let data: any = {};
  // await axios({
  //   method: 'get',
  //   url: GOOGLE_API,
  //   params: {
  //     output: 'toolbar',
  //     hl: 'zh',
  //     q: value,
  //   },
  // })
  //   .then((res) => {
  //     data = res;
  //     console.log(res);
  //   });
  // return data.data;
// };

/**
 * @description: Bing API 查询
 * @param {String} value: 搜索关键字
 * @return: 未进行数据清洗的返回数据
 * @author: Miya
 */
// const getSearchBingAPIData = async (value: string) => {
//   let data: any = {};
//   await axios({
//     method: 'get',
//     url: BING_API,
//     params: {
//       type: 'cb',
//       q: value,
//       // cb: 'wdnmd',
//     },
//   })
//     .then((res) => {
//       data = res;
//     });
//   return data.data;
// };

/**
 * @description: 百度 API 查询
 * @param {String} value: 搜索关键字
 * @return: 未进行数据清洗的返回数据
 * @author: Miya
 */
const getSearchBaiduAPIData = async (value: string) => {
  let data: any = {};
  await axios({
    method: 'get',
    url: BAIDU_API,
    params: {
      wd: value,
      cb: 'data.wdnmd',
    },
  })
    .then((res) => {
      data = res;
    });
  return data.data;
};

export {
  getSearchBaiduAPIData,
  // getSearchBingAPIData,
  // getSearchGoogleAPIData
};
