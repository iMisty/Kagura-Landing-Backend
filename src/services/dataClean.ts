/*
 * @Author: Miya
 * @Date: 2020-06-19 17:52:08
 * @LastEditTime: 2020-07-09 16:06:51
 * @LastEditors: Miya
 * @Description: 对 axios.ts 中获取的数据进行清洗
 * @FilePath: \Single-Search\src\services\dataClean.ts
 * @return: 数组格式
 */
import {
  getSearchBaiduAPIData,
  // getSearchBingAPIData,
  // getSearchGoogleAPIData
} from './axios';

// 清洗必应数据
// const getBingData = async (value: string) => {
//   const oldData = await getSearchBingAPIData(value);
//   const start = oldData.indexOf('s:[') + 3;
//   const end = oldData.lastIndexOf(']});');
//   const newData = oldData.slice(start, end).replace(/"/g, '').split(',');
//   console.log(newData);
//   return newData;
// };

// 清洗百度数据
const getBaiduData = async (value: string) => {
  // TODO: 这写法真恶心,得找个时间搞个优雅点的方案
  const oldData = await getSearchBaiduAPIData(value);
  const start = oldData.indexOf('s:[') + 3;
  const end = oldData.lastIndexOf(']});');
  const newData = oldData.slice(start, end).replace(/"/g, '').split(',');
  console.log(newData);
  return newData;
};

// const getGoogleData = async (value: string) => {
//   const oldData = await getSearchGoogleAPIData(value);
//   console.log(oldData);
// }
export {
  getBaiduData,
  // getBingData,
  // getGoogleData
};
