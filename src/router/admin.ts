/*
 * @Author: Miya
 * @Date: 2021-03-12 16:37:42
 * @LastEditTime: 2021-03-12 16:42:23
 * @LastEditors: Miya
 * @Description: Admin Router
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Kagura-Landing-Backend\src\router\admin.ts
 * @Version: 1.0
 */

const router = require('koa-router')();
const Admin = require('../controller/AdminController');

router.prefix('/admin');

// 验证token
router.post('/status', Admin.validateToken);

// 修改管理员账号密码
router.put('/', Admin.updateAdmin);

export default router;
