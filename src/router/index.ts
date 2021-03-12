/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-10-15 02:04:46
 * @LastEditors: Miya
 * @LastEditTime: 2021-03-12 16:40:44
 * @Description: router
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Kagura-Landing-Backend\src\router\index.ts
 */
import * as Router from 'koa-router';
import * as CombineRouters from 'koa-combine-routers';

import BlogRouter from './blog';
import WorkRouter from './work';
import UserRouter from './user';
import InfoRouter from './info';
import AdminRouter from './admin';
import { SingleText } from '../interface/SingleText';
const Admin = require('../controller/AdminController');

const router = new Router();

const index = router.get('/', async (ctx: SingleText) => {
  ctx.body = 'Hello TypeScript';
});

const login = router.post('/login', Admin.validateAdmin);
const a = router.post('/registry', Admin.addNewAdmin);

const routers = CombineRouters(
  index,
  a,
  login,
  BlogRouter,
  WorkRouter,
  UserRouter,
  InfoRouter,
  AdminRouter
);

export default routers;
