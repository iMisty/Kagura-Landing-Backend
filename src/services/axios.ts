/*
 * @Description: 封装 Axios 方法
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-06-18 23:31:58
 * @LastEditors: Miya
 * @LastEditTime: 2020-06-20 01:09:54
 */
import axios from 'axios';

const GOOGLE_API = '/googleapi/search?output=toolbar&hl=zh&q=前端';
const BING_API = '/bingapi/qsonhs.aspx?type=cb&q=前端';
// param: wd
const BAIDU_API = '/baiduapi/su';

/**
 * @description: 试验用,百度 API 查询
 * @param {String} value: 搜索关键字
 * @return: 未进行数据清洗的返回数据
 * @author: Miya
 */
const getSearchAPIData = async (value: string) => {
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

export default getSearchAPIData;
