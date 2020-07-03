"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: Miya
 * @Date: 2020-07-02 17:19:01
 * @LastEditTime: 2020-07-03 17:48:10
 * @LastEditors: Please set LastEditors
 * @Description: APP.ts
 * @FilePath: /Single-Search/server/src/app.ts
 */
const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
const router = new Router();
// app.use(ctx => {
//   ctx.body = 'Server Running';
// });
router.get('/', async (ctx) => {
    ctx.body = 'hello world';
});
module.exports = app;
//# sourceMappingURL=app.js.map