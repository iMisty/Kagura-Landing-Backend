/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-10-15 02:04:46
 * @LastEditors: Miya
 * @LastEditTime: 2020-10-18 06:06:05
 * @Description: router
 * @FilePath: /Kagura-Landing-Backend/src/router/index.ts
 */
import * as Router from 'koa-router';
import * as CombineRouters from 'koa-combine-routers';

import TestRouter from './test';
import BlogRouter from './blog';
import WorkRouter from './work';
import { SingleText } from '../interface/SingleText';

const router = new Router();

const index = router.get('/', async (ctx: SingleText) => {
  ctx.body = 'Hello TypeScript';
});

const routers = CombineRouters(index, TestRouter, BlogRouter, WorkRouter);

export default routers;
