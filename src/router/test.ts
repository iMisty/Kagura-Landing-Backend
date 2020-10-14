/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-10-15 02:07:23
 * @LastEditors: Miya
 * @LastEditTime: 2020-10-15 02:08:58
 * @Description: test
 * @FilePath: /Kagura-Landing-Backend/src/router/test.ts
 */
import { SingleText } from '../interface/SingleText';

const router = require('koa-router')();

router.prefix('/test');

router.get('/', async (ctx: SingleText) => {
  return (ctx.body = 'Test');
});

export default router;
