/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-10-15 02:07:23
 * @LastEditors: Miya
 * @LastEditTime: 2020-10-16 18:12:27
 * @Description: test
 * @FilePath: \Kagura-Landing-Backend\src\router\test.ts
 */
const router = require('koa-router')();
const Test = require('../controller/TestController');

router.prefix('/test');

router.get('/', Test.findUser);

router.post('/', Test.addNewUser);

router.delete('/', Test.removeUser);

router.put('/', Test.changeUser);


export default router;
