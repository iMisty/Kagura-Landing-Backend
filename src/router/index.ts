/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-10-15 02:04:46
 * @LastEditors: Miya
 * @LastEditTime: 2020-11-04 11:51:41
 * @Description: router
 * @FilePath: \LandingPagec:\Users\Platinum Prism\Documents\GitHub\Kagura-Landing-Backend\src\router\index.ts
 */
import * as Router from 'koa-router';
import * as CombineRouters from 'koa-combine-routers';

import BlogRouter from './blog';
import WorkRouter from './work';
import UserRouter from './user';
import InfoRouter from './info';
import { SingleText } from '../interface/SingleText';
const User = require('../controller/UserController');

const router = new Router();

const index = router.get('/', async (ctx: SingleText) => {
  ctx.body = 'Hello TypeScript';
});

const login = router.post('/login', User.validateAdmin);
const a = router.post('/registry', User.addNewAdmin);

const routers = CombineRouters(
  index,
  a,
  login,
  BlogRouter,
  WorkRouter,
  UserRouter,
  InfoRouter
);

export default routers;
