/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-10-20 23:41:52
 * @LastEditors: Miya
 * @LastEditTime: 2020-10-20 23:46:58
 * @Description: 用户登录信息
 * @FilePath: /Kagura-Landing-Backend/src/model/AdminModel.ts
 */
import * as Mongoose from 'mongoose';

const AdminModel = new Mongoose.Schema({
  username: String,
  password: String,
});

module.exports = Mongoose.model('Admin', AdminModel);
