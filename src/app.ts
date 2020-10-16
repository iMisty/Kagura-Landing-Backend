/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-10-15 01:43:35
 * @LastEditors: Miya
 * @LastEditTime: 2020-10-17 03:37:06
 * @Description: main
 * @FilePath: /Kagura-Landing-Backend/src/app.ts
 */
const Koa = require('koa');

// require
const BodyParser = require('koa-bodyparser');
const Mongoose = require('mongoose');
const dbConfig = require('./config/db');

import router from './router/index';

// interface
import { Log } from './interface/Log';

// constructor
const app = new Koa();

// use
app.use(BodyParser());
app.use(router());

app.listen(24540);

app.use(async (ctx: Log, next: () => any) => {
  const start: any = new Date();
  await next();
  const fin: any = new Date();
  const ms: number = fin - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

Mongoose.connect(dbConfig.blog, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

console.log('server running on port 24540');
