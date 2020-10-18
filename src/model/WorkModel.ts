/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-10-18 04:51:47
 * @LastEditors: Miya
 * @LastEditTime: 2020-10-18 05:18:35
 * @Description: file content
 * @FilePath: /Kagura-Landing-Backend/src/model/WorkModel.ts
 */
import * as Mongoose from 'mongoose';

const WorkModel = new Mongoose.Schema({
  id: Number,
  avatar: String,
  title: String,
  tag: Array,
  intro: String,
  content: String,
  preview: String,
  source: String,
  lastupdate: Number,
  version: String,
  status: Number,
});

module.exports = Mongoose.model('WorkModel', WorkModel);
