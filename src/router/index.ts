/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-10-15 02:04:46
 * @LastEditors: Miya
 * @LastEditTime: 2020-10-17 02:27:12
 * @Description: router
 * @FilePath: /Kagura-Landing-Backend/src/router/index.ts
 */
import * as Router from 'koa-router';
import * as CombineRouters from 'koa-combine-routers';

import TestRouter from './test';
import BlogRouter from './blog';
import { SingleText } from '../interface/SingleText';

const router = new Router();

const index = router.get('/', async (ctx: SingleText) => {
  ctx.body = 'Hello TypeScript';
});

const routers = CombineRouters(index, TestRouter, BlogRouter);

export default routers;
