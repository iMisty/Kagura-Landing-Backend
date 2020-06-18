/*
 * @Description: 封装 Axios 方法
 * @Version: 1.0
 * @Autor: Miya
 * @Date: 2020-06-18 23:31:58
 * @LastEditors: Miya
 * @LastEditTime: 2020-06-19 01:20:29
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
const getSearchAPIData = (value: string) => {
  return axios({
    method: 'get',
    url: BAIDU_API,
    params: {
      wd: value,
    },
  })
    .then((res) => {
      console.log(res);
    });
};

export default getSearchAPIData;
