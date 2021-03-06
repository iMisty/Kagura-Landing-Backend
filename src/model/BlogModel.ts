/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-10-17 01:49:58
 * @LastEditors: Miya
 * @LastEditTime: 2020-10-18 18:45:57
 * @Description: 博客文章模型
 * @FilePath: /Kagura-Landing-Backend/src/model/BlogModel.ts
 */
import * as Mongoose from 'mongoose';

const BlogModel = new Mongoose.Schema({
  id: Number,
  avatar: String,
  time: String,
  tag: Array,
  title: String,
  intro: String,
  content: String,
});

module.exports = Mongoose.model('Blog', BlogModel);
