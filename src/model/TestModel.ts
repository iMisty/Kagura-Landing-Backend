/*
 * @Author: Miya
 * @Date: 2020-10-15 10:27:51
 * @LastEditTime: 2020-10-15 18:36:30
 * @LastEditors: Miya
 * @Description: 
 * @FilePath: \Kagura-Landing-Backend\src\model\TestModel.ts
 * @Version: 
 */
import mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestModel = new Schema({
  name: String,
  age: Number
})