/*
 * @Author: Miya
 * @Date: 2020-10-20 16:53:12
 * @LastEditTime: 2021-03-12 16:44:38
 * @LastEditors: Miya
 * @Description: 不经过jwt验证部分
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Kagura-Landing-Backend\src\router\info.ts
 * @Version: 1.0
 */
const router = require('koa-router')();
const Blog = require('../controller/BlogController');
const Work = require('../controller/WorkController');
const User = require('../controller/UserController');
const Admin = require('../controller/AdminController');
const Footer = require('../controller/FooterController');

router.prefix('/info');

// 获取文章列表
// @param
router.get('/blog', Blog.getArticle);

// 查找项目
router.get('/work', Work.getWork);

// 获取关于页介绍
router.get('/about', User.getAboutIntro);

// 查阅所有团队信息
router.get('/team', User.getTeamContact);

// 获取页脚信息
router.get('/footer', Footer.getFooterContent);

// 验证token
router.get('/admin', Admin.validateToken);

export default router;
