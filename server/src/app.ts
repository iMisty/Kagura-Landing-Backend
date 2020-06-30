/*
 * @Author: Miya
 * @Date: 2020-07-02 17:19:01
 * @LastEditTime: 2020-07-02 17:30:07
 * @LastEditors: Please set LastEditors
 * @Description: APP.ts
 * @FilePath: /Single-Search/server/src/app.ts
 */ 
import * as Koa from 'koa';

const app = new Koa();

app.use(ctx => {
  ctx.body = 'Server Running';
});

module.exports = app;