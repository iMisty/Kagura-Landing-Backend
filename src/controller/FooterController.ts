/*
 * @Author: Miya
 * @Date: 2020-10-20 10:12:19
 * @LastEditTime: 2021-01-14 10:09:53
 * @LastEditors: Miya
 * @Description: 页脚控制
 * @FilePath: \Single-Search-APIc:\Users\Platinum Prism\Documents\GitHub\Kagura-Landing-Backend\src\controller\FooterController.ts
 * @Version: 1.0
 */
import { FooterBody, FooterContact, FooterRequest } from '../interface/Footer';
const FooterModel = require('../model/FooterModel');

class Footer {
  // 新建信息
  public static async addNewFooterContent(ctx: {
    body: FooterBody;
    request: { body: FooterRequest };
  }) {
    const search = await FooterModel.find();
    if (search.length >= 1) {
      return (ctx.body = {
        code: 16001,
        msg: 'max content',
      });
    }

    const result = new FooterModel({
      logo: {
        img: ctx.request.body.img,
        content: {
          pri: ctx.request.body.pri,
          sec: ctx.request.body.sec,
        },
      },
      copyright: {
        startYear: ctx.request.body.copyrightyear,
        author: ctx.request.body.author,
        website: ctx.request.body.website,
      },
    });

    try {
      await result.save();
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

  // 获取所有信息
  public static async getFooterContent(ctx: { body: FooterBody }) {
    const result = await FooterModel.find();
    if (result.length === 0) {
      return (ctx.body = {
        code: 11599,
        msg: 'no content',
      });
    }
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

  // 修改信息
  public static async updateFooterContent(ctx: {
    request: { body: { id: string; img: string; pri: string; sec: string } };
    body: FooterBody;
  }) {
    const result = await FooterModel.updateOne(
      { _id: ctx.request.body.id },
      {
        $set: {
          logo: {
            img: ctx.request.body.img,
            content: {
              pri: ctx.request.body.pri,
              sec: ctx.request.body.sec,
            },
          },
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
      return (ctx.body = {
        code: 0,
        msg: err,
      });
    }
  }

  // 新建联系方式
  public static async addNewFooterContact(ctx: {
    request: { body: FooterContact };
    body: FooterBody;
    throw: (arg0: number, arg1: { code: number; msg: FooterBody }) => Object;
  }) {
    const result = await FooterModel.updateOne(
      { _id: ctx.request.body.id },
      {
        $push: {
          contact: [
            {
              name: ctx.request.body.name,
              icon: ctx.request.body.icon,
              href: ctx.request.body.link,
            },
          ],
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
      return ctx.throw(400, {
        code: 11400,
        msg: err,
      });
    }
  }

  // 修改联系方式
  public static async updateFooterContact(ctx: {
    request: { body: FooterContact };
    body: FooterBody;
    throw: (arg0: number, arg1: { code: number; msg: FooterBody }) => Object;
  }) {
    const oldList = await FooterModel.find();
    const array = oldList[0].contact;
    const newList = (array[ctx.request.body.len] = {
      _id: ctx.request.body.id,
      name: ctx.request.body.name,
      icon: ctx.request.body.icon,
      href: ctx.request.body.link,
    });

    const result = await FooterModel.updateOne(
      { _id: ctx.request.body.id },
      {
        $set: {
          contact: newList,
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
      return ctx.throw(400, {
        code: 400,
        msg: err,
      });
    }
  }

  // 删除联系方式
  public static async deleteFooterContact(ctx: {
    request: { body: FooterContact };
    body: FooterBody;
    throw: (arg0: number, arg1: { code: number; msg: FooterBody }) => Object;
  }) {
    const oldList = await FooterModel.find();
    let temp = oldList[0].contact.splice(ctx.request.body.len, 1);
    if (temp.length === 1) {
      temp = [];
    }
    const result = await FooterModel.updateOne(
      { _id: ctx.request.body.id },
      {
        $set: {
          contact: temp,
        },
      }
    );

    try {
      return (ctx.body = {
        code: 1,
        msg: 'successed',
        // @ts-ignore
        temp,
        result,
      });
    } catch (err) {
      return ctx.throw(400, { code: 400, msg: err });
    }
  }
}

module.exports = Footer;
