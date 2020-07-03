/*
 * @Author: Miya
 * @Date: 2020-07-02 17:19:01
 * @LastEditTime: 2020-07-03 18:26:52
 * @LastEditors: Please set LastEditors
 * @Description: APP.ts
 * @FilePath: /Single-Search/server/src/app.ts
 */
import * as Koa from 'koa';
import * as Router from 'koa-router';


const app = new Koa();
const router = new Router();

app.use(router.routes());

app.use(ctx => {
  ctx.body = 'Server Running';
});

router.get('/aa', async (ctx) => {
  ctx.body = 'hello world';
});


module.exports = app;