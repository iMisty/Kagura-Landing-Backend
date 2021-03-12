/*
 * @Author: Miya
 * @Version: 1.01
 * @Date: 2020-10-18 16:53:30
 * @LastEditors: Miya
 * @LastEditTime: 2021-03-12 16:36:55
 * @Description: 用户信息接口
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Kagura-Landing-Backend\src\controller\UserController.ts
 */
// import * as md5 from 'md5';
// const jsonwebtoken = require('jsonwebtoken');
// const AdminModel = require('../model/AdminModel');
// const SECRET = 'kagura';
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

  // // 创建管理员
  // public static async addNewAdmin(ctx: {
  //   body: { code: number; msg: string };
  //   request: { body: { username: any; password: string | Buffer | number[] } };
  //   throw: (arg0: number, arg1: { code: number; msg: string }) => any;
  // }) {
  //   const search = await AdminModel.find();
  //   if (search.length >= 1) {
  //     return (ctx.body = {
  //       code: 11599,
  //       msg: 'Max Content',
  //     });
  //   }
  //   const result = new AdminModel({
  //     username: ctx.request.body.username,
  //     password: md5(ctx.request.body.password),
  //   });

  //   try {
  //     await result.save();
  //     return (ctx.body = {
  //       code: 1,
  //       msg: 'successed',
  //     });
  //   } catch (err) {
  //     return ctx.throw(400, {
  //       code: 400,
  //       msg: err,
  //     });
  //   }
  // }

  // // 修改管理员账号密码
  // public static async updateAdmin(ctx: {
  //   request: {
  //     body: {
  //       id: string;
  //       username: string;
  //       password: string | Buffer | number[];
  //     };
  //   };
  //   body: { code: number; msg: string; result: string };
  //   throw: (arg0: number, arg1: { code: number; msg: string }) => any;
  // }) {
  //   const result = await AdminModel.updateOne(
  //     { _id: ctx.request.body.id },
  //     {
  //       $set: {
  //         username: ctx.request.body.username,
  //         password: md5(ctx.request.body.password),
  //       },
  //     }
  //   );

  //   try {
  //     return (ctx.body = {
  //       code: 1,
  //       msg: 'successed',
  //       result,
  //     });
  //   } catch (err) {
  //     return ctx.throw(400, { code: 400, msg: err });
  //   }
  // }

  // // 验证登录
  // public static async validateAdmin(ctx: {
  //   request: {
  //     body: { username: string; password: string | Buffer | number[] };
  //   };
  //   body: { code: number; msg: string; token?: string };
  // }) {
  //   const getAdminData = await AdminModel.find();
  //   // 登录
  //   // 判断用户名密码是否匹配
  //   const checkUser =
  //     ctx.request.body.username === getAdminData[0].username &&
  //     md5(ctx.request.body.password) === getAdminData[0].password;
  //   if (checkUser) {
  //     return (ctx.body = {
  //       code: 1,
  //       msg: '登录成功',
  //       token: jsonwebtoken.sign(
  //         { name: getAdminData.username }, // 加密userToken
  //         SECRET,
  //         { expiresIn: '30d' }
  //       ),
  //     });
  //   } else {
  //     // 登录失败, 用户名密码不正确
  //     return (ctx.body = {
  //       code: 400,
  //       msg: '用户名密码不匹配',
  //     });
  //   }
  // }

  // // 验证token
  // public static async validateToken(ctx: any) {
  //   const token = ctx.headers.authorization.split(' ')[1];
  //   console.log(token);
  //   const validate = jsonwebtoken.verify(
  //     token,
  //     SECRET,
  //     (err: string) => {
  //       // console.log(validate)
  //       if (err) {
  //         return (ctx.body = {
  //           code: 403,
  //           msg: err,
  //         });
  //       }
  //       return (ctx.body = {
  //         code: 200,
  //         msg: 'ok',  
  //       });
  //     }
  //   );
  //   console.log(validate);
  //   return validate;
  // }

  /**
   *
   *
   *          About
   *
   *
   */

  // 新建页面介绍文字
  public static async addNewAboutIntro(ctx: {
    body: { code: number; msg: string };
    request: {
      body: {
        background: string;
        image: string;
        title: string;
        content: string;
        concept: string;
      };
    };
  }) {
    const search = await UserModel.find();
    if (search.length !== 0) {
      return (ctx.body = {
        code: 406,
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
  public static async getAboutIntro(ctx: {
    body: { code: number; msg?: string; result?: string };
  }) {
    const result = await UserModel.find();
    if (result.length === 0) {
      return (ctx.body = {
        code: 599,
        msg: 'no content',
      });
    }
    try {
      return (ctx.body = {
        code: 1,
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
  public static async updateAboutIntro(ctx: {
    body: { code: number; msg: string };
    request: {
      body: {
        id: string;
        background: string;
        image: string;
        title: string;
        content: string;
        concept: string;
      };
    };
  }) {
    const search = await UserModel.find();
    if (search.length === 0) {
      return (ctx.body = {
        code: 599,
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
  public static async addNewTeamContact(ctx: {
    body: { code: number; msg: string };
    request: { body: { icon: string; title: string; content: string } };
  }) {
    const search = await ContentModel.find();
    if (search.length > 5) {
      return (ctx.body = {
        code: 601,
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

  // 查阅所有团队信息
  public static async getTeamContact(ctx: {
    body: { code: number; msg: string | string[] };
  }) {
    const result = await ContentModel.find();
    try {
      if (result.length === 0) {
        return (ctx.body = {
          code: 599,
          msg: 'no content',
        });
      }
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

  // 修改对应团队信息
  public static async updateTeamContact(ctx: {
    request: {
      body: { id: string; icon: string; title: string; content: string };
    };
    body: { code: number; message: string; result?: string };
  }) {
    const result = await ContentModel.updateOne(
      { _id: ctx.request.body.id },
      {
        $set: {
          icon: ctx.request.body.icon,
          title: ctx.request.body.title,
          content: ctx.request.body.content,
        },
      }
    );

    try {
      return (ctx.body = {
        code: 1,
        message: 'successed',
        result,
      });
    } catch (err) {
      return (ctx.body = {
        code: 0,
        message: err,
      });
    }
  }

  // 删除团队信息
  public static async deleteTeamContact(ctx: {
    request: { body: { id: string } };
    body: { code: number; msg: string; result?: string };
  }) {
    const result = await ContentModel.deleteOne({
      _id: ctx.request.body.id,
    });
    try {
      return (ctx.body = {
        code: 1,
        msg: 'successed',
        result,
      });
    } catch (err) {
      return (ctx.body = {
        code: 0,
        msg: err,
      });
    }
  }
}

module.exports = User;
