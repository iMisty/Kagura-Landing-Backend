/*
 * @Author: Miya
 * @Date: 2020-07-02 17:19:01
 * @LastEditTime: 2020-07-02 17:20:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Single-Search/server/src/app.ts
 */ 
import * as Koa from 'koa';

const app = new Koa();

app.use(ctx => {
  ctx.body = 'Hello world';
});

module.exports = app;