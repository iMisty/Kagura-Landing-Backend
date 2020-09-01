/*
 * @Author: Miya
 * @Date: 2020-09-01 18:18:12
 * @LastEditTime: 2020-09-01 18:23:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Single-Search\src\utils\submitSearch.ts
 */
const submitSearch = (eng: string, val: string, extra?: string) => {
  // TODO: 增加选项
  eng = 'https://www.baidu.com/s?wd=';
  const value = `${eng}${val}`;
  return value;
};

export { submitSearch };
