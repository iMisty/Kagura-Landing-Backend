/*
 * @Author: Miya
 * @Date: 2020-07-02 17:20:34
 * @LastEditTime: 2020-07-02 17:20:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Single-Search/server/src/server.ts
 */
const app = require('./app');
const server = app.listen(12451, () => {
    console.log('Server is running at http://localhost:12451');
    console.log('Press CTRL-C to stop \n');
});
module.exports = server;
//# sourceMappingURL=server.js.map