/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-10-17 02:08:59
 * @LastEditors: Miya
 * @LastEditTime: 2020-10-20 17:49:11
 * @Description: Blog Router
 * @FilePath: \Kagura-Landing-Backend\src\router\blog.ts
 */
const router = require('koa-router')();
const Blog = require('../controller/BlogController');

router.prefix('/blog');

// 新建文章
router.post('/', Blog.setNewArticle);

// 更新文章内容
router.put('/', Blog.updateArticle);

// 删除一篇文章
router.delete('/', Blog.deleteArticle);

export default router;
