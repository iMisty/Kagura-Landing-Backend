/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-10-18 16:53:30
 * @LastEditors: Miya
 * @LastEditTime: 2020-10-19 18:31:34
 * @Description: 用户信息接口
 * @FilePath: \Kagura-Landing-Backend\src\controller\UserController.ts
 */
import { SUCCESSED_MESSAGE } from '../config/code';
const UserModel = require('../model/UserModel');
const ContentModel = require('../model/ContactModel');

class User {
  /**
   *
   *
   *          Admin
   *
   *
   */

  // 创建管理员
  public static async addNewAdmin(ctx: any) {}

  // 修改管理员密码
  public static async updateAdmin(ctx: any) {}

  // 验证登录
  public static async validateAdmin(ctx: any) {}

  /**
   *
   *
   *          About
   *
   *
   */

  // 新建页面介绍文字
  public static async addNewAboutIntro(ctx: any) {
    const search = await UserModel.find();
    if (search.length !== 0) {
      return (ctx.body = {
        code: 0,
        msg: 'had content',
      });
    }

    const result = new UserModel({
      background: ctx.request.body.background,
      introduct: {
        image: ctx.request.body.image,
        title: ctx.request.body.title,
        content: ctx.request.body.content,
      },
      concept: ctx.request.body.concept,
    });

    try {
      await result.save();
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

  // 获取页面介绍文字
  public static async getAboutIntro(ctx: any) {
    const result = await UserModel.find();
    if (result.length === 0) {
      return (ctx.body = {
        code: 0,
        msg: 'no content',
      });
    }
    try {
      return (ctx.body = {
        SUCCESSED_MESSAGE,
        result,
      });
    } catch (err) {
      return (ctx.body = {
        code: 0,
        msg: err,
      });
    }
  }

  // 修改页面介绍文字
  public static async updateAboutIntro(ctx: any) {
    const search = await UserModel.find();
    if (search.length === 0) {
      return (ctx.body = {
        code: 11599,
        msg: 'no content',
      });
    }

    const result = await UserModel.updateOne(
      { _id: ctx.request.body.id },
      {
        $set: {
          background: ctx.request.body.background,
          introduct: {
            image: ctx.request.body.image,
            title: ctx.request.body.title,
            content: ctx.request.body.content,
          },
          concept: ctx.request.body.concept,
        },
      }
    );

    try {
      return (ctx.body = {
        code: result.nModified,
        msg: result,
      });
    } catch (err) {
      return (ctx.body = {
        code: result.ok,
        msg: err,
      });
    }
  }

  /**
   *
   *
   *          Contact
   *
   *
   */

  // 新建团队信息
  public static async addNewTeamContact(ctx: any) {
    const search = ContentModel.find();
    if (search.length > 5) {
      return (ctx.body = {
        code: 11601,
        msg: 'max length',
      });
    }
    const result = new ContentModel({
      icon: ctx.request.body.icon,
      title: ctx.request.body.title,
      content: ctx.request.body.content,
    });

    try {
      await result.save();
      return (ctx.body = {
        SUCCESSED_MESSAGE,
      });
    } catch (err) {}
  }
}

module.exports = User;
