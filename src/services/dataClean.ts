/*
 * @Author: Miya
 * @Date: 2020-06-19 17:52:08
 * @LastEditTime: 2020-06-20 23:30:04
 * @LastEditors: Miya
 * @Description: 对 axios.ts 中获取的数据进行清洗
 * @FilePath: /Single-Search/src/services/dataClean.ts
 * @return: 数组格式
 */
import getSearchAPIData from './axios';
// 清洗百度数据
const getBaiduData = async (value: string) => {
  // TODO: 这写法真恶心,得找个时间搞个优雅点的方案
  const oldData = await getSearchAPIData(value);
  const start = oldData.indexOf('s:[') + 3;
  const end = oldData.lastIndexOf(']});');
  const newData = oldData.slice(start, end).replace(/"/g, '').split(',');
  console.log(newData);
  return newData;
};
export default getBaiduData;
