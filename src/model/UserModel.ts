/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-10-18 16:56:12
 * @LastEditors: Miya
 * @LastEditTime: 2020-10-18 18:45:47
 * @Description: 关于我们介绍页接口
 * @FilePath: /Kagura-Landing-Backend/src/model/UserModel.ts
 */
import * as Mongoose from 'mongoose';

const UserModel = new Mongoose.Schema({
  background: String,
  introduct: {
    image: String,
    title: String,
    content: String,
  },
  concept: String,
});

module.exports = Mongoose.model('User', UserModel);
