## 临时接口文档

### blog 文章篇

| 功能     | 链接           | 请求方法 | 参数         | 返回                  |
| -------- | -------------- | -------- | ------------ | --------------------- |
| 查找文章 | your.site/blog | GET      |              | {code: 1,msg: result} |
| 查找文章 | your.site/blog | GET      | limit:Number | {code: 1,msg: result} |
| 查找文章(根据 id)|your.site/blog/search|GET|id: Number| {code: 1,msg: result} |
| 增加文章 | your.site/blog|POST| id: String ID 号<br>avatar: String 封面图<br>tag: Array 标签<br>title: String 标题<br>intro: String 简介<br>content:String 内容|
|更新文章内容| your.site/blog| PUT| id: String ID 号<br>avatar: String 封面图<br>tag: Array 标签<br>title: String 标题<br>intro: String 简介<br>content:String 内容|
| 删除文章| your.site/blog|DELETE|_id: Number| {code: 1,msg: result} |
