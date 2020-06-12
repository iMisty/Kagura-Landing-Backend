/*
 * @Author: Miya
 * @Date: 2020-06-12 18:02:06
 * @LastEditTime: 2020-06-12 18:13:20
 * @LastEditors: Please set LastEditors
 * @Description: 根据获取的length值取得所选的搜索引擎
 * @FilePath: /Single-Search/src/services/getEngineValue.ts
 */ 
const getEngineValue = (data: number) => {
  switch(data){
    case 0:
      return 'google';
    case 1: 
      return 'bing';
    case 2: 
      return 'baidu';
  }
}

export { getEngineValue }