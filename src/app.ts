/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-10-15 01:43:35
 * @LastEditors: Miya
 * @LastEditTime: 2020-10-15 01:46:21
 * @Description: main
 * @FilePath: /Kagura-Landing-Backend/src/app.ts
 */
const Koa = require('koa');
const Router = require('koa-router');
const BodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

app.use(router.routes());

router.get('/', async (ctx: any) => {
  return (ctx.body = 'Hello TypeScript');
});

app.listen(24540);

app.use(async (ctx: { method: any; url: any }, next: () => any) => {
  const start: any = new Date();
  await next();
  const fin: any = new Date();
  const ms: number = fin - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

console.log('server running on port 24540');
