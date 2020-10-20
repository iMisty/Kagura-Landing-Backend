/*
 * @Author: Miya
 * @Date: 2020-10-20 10:05:08
 * @LastEditTime: 2020-10-20 11:52:46
 * @LastEditors: Miya
 * @Description: 页脚模型
 * @FilePath: \Kagura-Landing-Backend\src\model\FooterModel.ts
 * @Version: 1.0
 */
import * as Mongoose from 'mongoose';

const FooterModel = new Mongoose.Schema({
  logo: {
    img: String,
    content: {
      pri: String,
      sec: String,
    },
  },
  contact: [{
    name: String,
    icon: String,
    href: String,
  }],
  copyright: {
    startYear: Number,
    author: String,
    website: String,
  },
});

module.exports = Mongoose.model('Footer', FooterModel);
