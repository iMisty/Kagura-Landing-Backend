import { SingleText } from '../interface/SingleText';
import { TestReq } from '../interface/TestRequest';
import { Response } from '../interface/Response';

/*
 * @Author: Miya
 * @Date: 2020-10-16 15:34:00
 * @LastEditTime: 2020-10-17 01:42:28
 * @LastEditors: Miya
 * @Description: Model
 * @FilePath: /Kagura-Landing-Backend/src/controller/TestController.ts
 * @Version: 1.0
 */
const TestModel = require('../model/TestModel');

class Test {
  public static async default(ctx: SingleText) {
    return (ctx.body = 'Test Page');
  }

  // 新建一个用户
  public static async addNewUser(ctx: {
    request: { body: TestReq };
    body: Response;
  }) {
    const params = {
      name: ctx.request.body.name,
      age: ctx.request.body.age,
    };

    // 参数不全
    if (!params.name || !params.age) {
      return (ctx.body = {
        code: 0,
        msg: 'missing parameters',
      });
    }

    // 参数齐全
    const model = new TestModel(params);

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

  // 删除用户
  public static async removeUser(ctx: {
    request: { body: TestReq };
    body: Response;
  }) {
    const params = {
      name: ctx.request.body.name,
      age: ctx.request.body.age,
    };

    if (!params.name || !params.age) {
      return (ctx.body = {
        code: 0,
        msg: 'missing parameters',
      });
    }

    const result = await TestModel.deleteOne(params);

    if (result.ok === 0 || result.deletedCount === 0) {
      return (ctx.body = {
        code: 0,
        msg: 'no user',
      });
    }
    return (ctx.body = {
      code: 1,
      msg: 'successed',
    });
  }

  // 修改用户数据
  public static async changeUser(ctx: {
    request: { body: TestReq };
    body: Response;
  }) {
    const params = {
      name: ctx.request.body.name,
      age: ctx.request.body.age,
    };
    const result = await TestModel.where(params.name).updateOne({
      age: ctx.request.body.age,
    });
    return (ctx.body = {
      code: 1,
      msg: result,
    });
  }

  // 查阅数据
  public static async findUser(ctx: {
    request: { body: TestReq };
    body: Response;
  }) {
    const params = {
      name: ctx.request.body.name,
    };
    const result = await TestModel.findOne();

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

module.exports = Test;
