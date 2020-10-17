/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-10-17 01:54:08
 * @LastEditors: Miya
 * @LastEditTime: 2020-10-18 04:55:42
 * @Description: Blog Controller
 * @FilePath: /Kagura-Landing-Backend/src/controller/BlogController.ts
 */
const blogdata = require('../model/BlogModel');
import { BlogInterface } from '../interface/Blog';
class Blog {
  // 增加一篇文章
  public static async setNewArticle(ctx: {
    request: {
      body: BlogInterface;
    };
    body: { code: number; msg: any };
  }) {
    const param = {
      id: ctx.request.body.id,
      avatar: ctx.request.body.avatar,
      time: new Date().getTime(),
      tag: ctx.request.body.tag,
      title: ctx.request.body.title,
      intro: ctx.request.body.intro,
      text: ctx.request.body.text,
    };

    const model = new blogdata(param);

    try {
      await model.save();
      return (ctx.body = {
        code: 1,
        msg: 'successed',
      });
    } catch (err) {
      return (ctx.body = {
        code: 0,
        msg: err,
      });
    }
  }
  // 查找指定 ID 文章
  public static async getArticleByID(ctx: {
    request: { body: { id: number } };
    body: { code: number; msg: object };
  }) {
    const result = await blogdata.find({ id: ctx.request.body.id });
    try {
      return (ctx.body = {
        code: 1,
        msg: result,
      });
    } catch (err) {
      return (ctx.body = {
        code: 0,
        msg: err,
      });
    }
  }

  // 查找全部或指定条数文章
  public static async getArticle(ctx: any) {
    const limit = Number(ctx.request.body.limit);
    const result = await blogdata.find({}).limit(limit).sort({ time: -1 });

    try {
      return (ctx.body = {
        code: 1,
        msg: result,
      });
    } catch (err) {
      return (ctx.body = {
        code: 0,
        msg: err,
      });
    }
  }

  // 修改文章内容
  public static async updateArticle(ctx: any) {
    const result = await blogdata.update(
      { id: ctx.request.body.id },
      {
        $set: {
          avatar: ctx.request.body.avatar,
          tag: ctx.request.body.tag,
          title: ctx.request.body.title,
          intro: ctx.request.body.intro,
          text: ctx.request.body.text,
        },
      }
    );

    try {
      return (ctx.body = {
        code: 1,
        msg: result,
      });
    } catch (err) {
      return (ctx.body = {
        code: 0,
        msg: err,
      });
    }
  }

  // 删除一篇文章
  public static async deleteArticle(ctx: any) {
    // @ts-ignore
    const result = await blogdata.findOne({ _id: ctx.request.body.id });
    return (ctx.body = {
      result,
    });
  }
}

module.exports = Blog;
