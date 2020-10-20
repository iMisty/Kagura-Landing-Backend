/*
 * @Author: Miya
 * @Date: 2020-10-20 16:53:12
 * @LastEditTime: 2020-10-20 17:56:14
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
router.get('/blog', Blog.getArticle);

// 根据ID获取单篇文章
router.get('/blog/id', Blog.getArticleByID);

// 查找项目
router.get('/work', Work.getWork);

// 根据ID查找项目
router.get('/work/id', Work.getWorkByID);

// 获取关于页介绍
router.get('/about', User.getAboutIntro);

// 查阅所有团队信息
router.get('/team', User.getTeamContact);

// 获取页脚信息
router.get('/footer', Footer.getFooterContent);

export default router;
