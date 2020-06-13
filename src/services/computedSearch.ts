/*
 * @Description: 根据选定的搜索引擎判定返回的文字数据
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-06-14 01:29:14
 * @LastEditors: Miya
 * @LastEditTime: 2020-06-14 01:37:45
 */
const computedSearch = (search: string) => {
  if (search === 'baidu') {
    return `https://www.baidu.com/s?wd=`;
  } else if (search === 'bing') {
    return `https://cn.bing.com/search?q=`;
  } else {
    return `https://${search}.com/search?q=`;
  }
};

export { computedSearch };
