/*
 * @Author: Miya
 * @Date: 2020-10-19 16:37:43
 * @LastEditTime: 2020-10-20 00:33:43
 * @LastEditors: Miya
 * @Description: 用户信息接口
 * @FilePath: /Kagura-Landing-Backend/src/router/user.ts
 * @Version: 1.0
 */
const router = require('koa-router')();
const User = require('../controller/UserController');

router.prefix('/user');

// 新建关于页介绍
router.post('/about', User.addNewAboutIntro);

// 获取关于页介绍
router.get('/about', User.getAboutIntro);

// 修改关于页介绍
router.put('/about', User.updateAboutIntro);

// 新建团队信息
router.post('/team', User.addNewTeamContact);

// 查阅所有团队信息
router.get('/team', User.getTeamContact);

// 修改团队信息
router.put('/team',User.updateTeamContact);

// 删除团队信息
router.delete('/team',User.deleteTeamContact)

export default router;
