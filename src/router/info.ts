/*
 * @Author: Miya
 * @Date: 2020-10-20 16:53:12
 * @LastEditTime: 2020-11-13 15:26:18
 * @LastEditors: Miya
 * @Description: 不经过jwt验证部分
 * @FilePath: \Kagura-Landing-Backend\src\router\info.ts
 * @Version: 1.0
 */
const router = require('koa-router')();
const Blog = require('../controller/BlogController');
const Work = require('../controller/WorkController');
const User = require('../controller/UserController');
const Footer = require('../controller/FooterController');

router.prefix('/info');

// 获取文章列表
router.post('/blog', Blog.getArticle);

// 根据ID获取单篇文章
router.post('/blog/id', Blog.getArticleByID);

// 查找项目
router.post('/work', Work.getWork);

// 根据ID查找项目
router.post('/work/id', Work.getWorkByID);

// 获取关于页介绍
router.post('/about', User.getAboutIntro);

// 查阅所有团队信息
router.post('/team', User.getTeamContact);

// 获取页脚信息
router.post('/footer', Footer.getFooterContent);

// 验证token
router.post('/admin', User.validateToken);

export default router;
