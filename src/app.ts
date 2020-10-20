/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-10-15 01:43:35
 * @LastEditors: Miya
 * @LastEditTime: 2020-10-21 01:17:11
 * @Description: main
 * @FilePath: /Kagura-Landing-Backend/src/app.ts
 */
const Koa = require('koa');

// require
const BodyParser = require('koa-bodyparser');
const Mongoose = require('mongoose');
const dbConfig = require('./config/db');
const jwt = require('koa-jwt');
const jsonwebtoken = require('jsonwebtoken');

import router from './router/index';

// interface
import { Log } from './interface/Log';

// constructor
const app = new Koa();
const SECRET = 'kagura';

// use
app.use(BodyParser());

// 验证
app.use(
  jwt({ secret: SECRET }).unless({
    path: ['/login', '/registry', /^\/info/],
  })
);

// 路由
app.use(router());
app.listen(24540);

// 打印日志
app.use(async (ctx: Log, next: () => any) => {
  const start: any = new Date();
  await next();
  const fin: any = new Date();
  const ms: number = fin - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(
  async (
    ctx: { status: number; body: { code: number; msg: any } },
    next: () => Promise<any>
  ) => {
    return next().catch((err: { status: number; message: any }) => {
      if (err.status === 401) {
        // 自定义返回结果
        ctx.status = 401;
        ctx.body = {
          code: 401,
          msg: err.message,
        };
      } else {
        throw err;
      }
    });
  }
);

Mongoose.connect(dbConfig.blog, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

console.log('server running on port 24540');
