/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-10-17 01:54:08
 * @LastEditors: Miya
 * @LastEditTime: 2020-11-20 18:05:23
 * @Description: Blog Controller
 * @FilePath: \Single-Search-APIc:\Users\Platinum Prism\Documents\GitHub\Kagura-Landing-Backend\src\controller\BlogController.ts
 */
const BlogModel = require('../model/BlogModel');
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
      time: new Date().toLocaleString(),
      tag: ctx.request.body.tag,
      title: ctx.request.body.title,
      intro: ctx.request.body.intro,
      content: ctx.request.body.content,
    };

    const model = new BlogModel(param);

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
    const result = await BlogModel.find({ _id: ctx.request.body.id });
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
  public static async getArticle(ctx: {
    query: { limit: string };
    body: { code: number; msg: string };
  }) {
    const limit = Number(ctx.query.limit);
    const result = await BlogModel.find({}).limit(limit).sort({ time: -1 });

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
  public static async updateArticle(ctx: {
    request: {
      body: {
        id: string;
        avatar: string;
        tag: string[];
        title: string;
        intro: string;
        content: string;
      };
    };
    body: { code: number; msg: string[] };
  }) {
    const result = await BlogModel.update(
      { _id: ctx.request.body.id },
      {
        $set: {
          avatar: ctx.request.body.avatar,
          tag: ctx.request.body.tag,
          title: ctx.request.body.title,
          intro: ctx.request.body.intro,
          content: ctx.request.body.content,
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
  public static async deleteArticle(ctx: {
    request: { body: { id: string } };
    body: { code: number; msg: any };
  }) {
    // @ts-ignore
    const result = await BlogModel.deleteOne({ _id: ctx.request.body.id });
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
}

module.exports = Blog;
