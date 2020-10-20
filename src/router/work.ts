/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-10-18 06:02:35
 * @LastEditors: Miya
 * @LastEditTime: 2020-10-20 17:49:03
 * @Description: file content
 * @FilePath: \Kagura-Landing-Backend\src\router\work.ts
 */
const router = require('koa-router')();
const Work = require('../controller/WorkController');

router.prefix('/work');

// 新建一个项目作品
router.post('/', Work.addNewWork);

// 修改项目作品
router.put('/', Work.updateWork);

// 删除项目作品
router.delete('/', Work.deleteWork);

export default router;
