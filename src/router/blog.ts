/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-10-17 02:08:59
 * @LastEditors: Miya
 * @LastEditTime: 2020-10-18 04:04:02
 * @Description: Blog Router
 * @FilePath: /Kagura-Landing-Backend/src/router/blog.ts
 */
const router = require('koa-router')();
const Blog = require('../controller/BlogController');

router.prefix('/blog');

// 新建文章
router.post('/', Blog.setNewArticle);

// 查找所有文章或指定条数文章
router.get('/', Blog.getArticle);

// 根据 ID 查找文章
router.get('/search', Blog.getArticleByID);

// 更新文章内容
router.put('/', Blog.updateArticle);

// 删除一篇文章
router.get('/', Blog.deleteArticle);

export default router;
