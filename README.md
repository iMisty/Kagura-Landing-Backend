## 项目说明

本项目为[Kagura-Landing](https://github.com/iMisty/Kagura-LandingPage)配套后端系统，基于 Koa2

### 配置环境

- NodeJS: 需要在服务器中安装 NodeJS 环境并配置 TypeScript 项目部署确认.若服务器为虚拟主机或无法配置 TypeScript 可使用以下方法

```
1. Git clone 后采用 yarn 或 npm i 安装依赖
2. 使用 yarn build 或 npm run build 打包文件
3. 将打包完毕的 js 文件连同 package.json 文件一同上传至服务器
4. 使用 pm2 等进程守护部署,入口文件为 app.js
```

- 数据库配置: MongoDB,采用默认配置: 默认为本机,端口为 27017

### 功能详情

- [x] Authorization: v1.0

- [x] Home config: v1.0

- [x] Work config: v1.0

- [x] Blog config: v1.0

### 项目目录说明

采用 MVC 的方式进行部署 ~~哪有V~~

- config: 配置 mongodb

TODO: 监听 mongodb 状态

- controller: 控制器

  - Blog: 文章页

  - Footer: 页脚模块

  - User: 用户管理

  - Work: 项目作品

- interface: TypeScript用接口 // TODO

- model: 用于 MongoDB 数据库配置字段用模型

  - Admin: 关于登录及验证

  - Blog: 文章

  - Contact: 联系方式

  - Footer: 页脚

  - User: 用户个性化定制

  - Work: 项目作品

- router: 接口列表

  - blog: 文章接口(POST PUT DELETE,下略)

  - index: 接口聚合

  - info: 信息展示(POST,除该文件外其余接口均需Bearar Token)

  - user: 用户信息

  - work: 项目作品



- app.ts: 入口文件

  - koa-cors: 跨域相关

  - koa-bodyparser: 接收用户输入

  - jwt: 权限验证

  - mongoose: 数据库相关

- test.http: 接口测试

需要配合 VSCode 中 REST Client 插件使用,可本地或远程发送接口请求