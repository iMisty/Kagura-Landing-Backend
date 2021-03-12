/*
 * @Author: Miya
 * @Date: 2021-03-12 15:52:57
 * @LastEditTime: 2021-03-12 16:36:44
 * @LastEditors: Miya
 * @Description: Admin Controller
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Kagura-Landing-Backend\src\controller\AdminController.ts
 * @Version: 1.0
 */

import * as md5 from 'md5';
const jsonwebtoken = require('jsonwebtoken');
const AdminModel = require('../model/AdminModel');
const SECRET = 'kagura';

class Admin {
  // 创建管理员
  public static async addNewAdmin(ctx: {
    body: { code: number; msg: string };
    request: { body: { username: any; password: string | Buffer | number[] } };
    throw: (arg0: number, arg1: { code: number; msg: string }) => any;
  }) {
    const search = await AdminModel.find();
    if (search.length >= 1) {
      return (ctx.body = {
        code: 11599,
        msg: 'Max Content',
      });
    }
    const result = new AdminModel({
      username: ctx.request.body.username,
      password: md5(ctx.request.body.password),
    });

    try {
      await result.save();
      return (ctx.body = {
        code: 1,
        msg: 'successed',
      });
    } catch (err) {
      return ctx.throw(400, {
        code: 400,
        msg: err,
      });
    }
  }

  // 修改管理员账号密码
  public static async updateAdmin(ctx: {
    request: {
      body: {
        id: string;
        username: string;
        password: string | Buffer | number[];
      };
    };
    body: { code: number; msg: string; result: string };
    throw: (arg0: number, arg1: { code: number; msg: string }) => any;
  }) {
    const result = await AdminModel.updateOne(
      { _id: ctx.request.body.id },
      {
        $set: {
          username: ctx.request.body.username,
          password: md5(ctx.request.body.password),
        },
      }
    );

    try {
      return (ctx.body = {
        code: 1,
        msg: 'successed',
        result,
      });
    } catch (err) {
      return ctx.throw(400, { code: 400, msg: err });
    }
  }

  // 验证登录
  public static async validateAdmin(ctx: {
    request: {
      body: { username: string; password: string | Buffer | number[] };
    };
    body: { code: number; msg: string; token?: string };
  }) {
    const getAdminData = await AdminModel.find();
    // 登录
    // 判断用户名密码是否匹配
    const checkUser =
      ctx.request.body.username === getAdminData[0].username &&
      md5(ctx.request.body.password) === getAdminData[0].password;
    if (checkUser) {
      return (ctx.body = {
        code: 1,
        msg: '登录成功',
        token: jsonwebtoken.sign(
          { name: getAdminData.username }, // 加密userToken
          SECRET,
          { expiresIn: '30d' }
        ),
      });
    } else {
      // 登录失败, 用户名密码不正确
      return (ctx.body = {
        code: 400,
        msg: '用户名密码不匹配',
      });
    }
  }

  // 验证token
  public static async validateToken(ctx: any) {
    const token = ctx.headers.authorization.split(' ')[1];
    console.log(token);
    const validate = jsonwebtoken.verify(token, SECRET, (err: string) => {
      // console.log(validate)
      if (err) {
        return (ctx.body = {
          code: 403,
          msg: err,
        });
      }
      return (ctx.body = {
        code: 200,
        msg: 'ok',
      });
    });
    console.log(validate);
    return validate;
  }
}

module.exports = Admin;