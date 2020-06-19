/*
 * @Author: Miya
 * @Date: 2020-06-19 17:52:08
 * @LastEditTime: 2020-06-19 18:47:50
 * @LastEditors: Please set LastEditors
 * @Description: 对 axios.ts 中获取的数据进行清洗
 * @FilePath: /Single-Search/src/services/dataClean.ts
 * @return: JSON格式数据
 */
import getSearchAPIData from './axios';

// TODO: 使用正则表达式方法
const getBaiduData = async (value: string) => {
  const oldData = await getSearchAPIData(value);
  const newData = oldData.data.toString().replace('window.baidu.sug(', '').replace(/(.*);\)/, '');
  console.log(newData);
  return newData;
};

export default getBaiduData;
