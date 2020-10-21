/*
 * @Author: Miya
 * @Date: 2020-10-19 16:37:43
 * @LastEditTime: 2020-10-21 15:51:21
 * @LastEditors: Miya
 * @Description: 用户信息接口
 * @FilePath: \Kagura-Landing-Backend\src\router\user.ts
 * @Version: 1.0
 */
const router = require('koa-router')();
const User = require('../controller/UserController');
const Footer = require('../controller/FooterController');

router.prefix('/user');

// 修改管理员账号密码
router.put('/', User.updateAdmin);

// 新建关于页介绍
router.post('/about', User.addNewAboutIntro);

// 修改关于页介绍
router.put('/about', User.updateAboutIntro);

// 新建团队信息
router.post('/team', User.addNewTeamContact);

// 修改团队信息
router.put('/team', User.updateTeamContact);

// 删除团队信息
router.delete('/team', User.deleteTeamContact);

// 新建页脚信息
router.post('/footer', Footer.addNewFooterContent);

// 新建页脚联系信息
router.post('/footer/contact', Footer.addNewFooterContact);

// 修改页脚信息
router.put('/footer/contact', Footer.updateFooterContact);

// 删除页脚信息
router.delete('/footer/contact', Footer.deleteFooterContact);

export default router;
