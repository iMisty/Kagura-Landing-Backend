/*
 * @Author: Miya
 * @Date: 2020-10-15 10:27:51
 * @LastEditTime: 2020-10-16 16:08:24
 * @LastEditors: Miya
 * @Description:
 * @FilePath: \Kagura-Landing-Backend\src\model\TestModel.ts
 * @Version:
 */
import * as Mongoose from 'mongoose';

const TestSchema = new Mongoose.Schema({
  name: String,
  age: Number,
});

module.exports = Mongoose.model('Test', TestSchema);
