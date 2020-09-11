<!--
 * @Author: Miya
 * @Date: 2020-09-11 15:42:18
 * @LastEditTime: 2020-09-11 18:26:23
 * @LastEditors: Miya
 * @Description: Mermaid UI 临时文档
 * @FilePath: \Single-Search\src\Mermaid.md
 * @Version: 0.1
-->

## button

|    参数    |         说明         | 是否必须 | 数据类型 |                                数据可选                                 | 默认值  |
| :--------: | :------------------: | :------: | :------: | :---------------------------------------------------------------------: | :-----: |
|    slot    | 在插槽中插入任意内容 |          |   any    |                                                                         |
| className  |       额外类名       |          |  string  |                                                                         |   ''    |
|   color    |       按钮颜色       |          |  string  | primary<br>info<br>success<br>danger<br>warning<br>default<br>secondary | primary |
|    ---     |         ---          |   ---    |   ---    |                                   ---                                   |   ---   |
| clickevent |     触发点击事件     |          | function |

## switch

|    参数    |       说明       | 是否必须 | 数据类型 |   数据可选    | 默认值 |
| :--------: | :--------------: | :------: | :------: | :-----------: | :----: |
|   status   |   定义选项状态   | required | boolean  | true<br>false | false  |
|    text    | 定义选项右侧文字 |          |  string  |               |
|  disabled  |   是否禁止修改   |          | boolean  |     false     |
|    ---     |       ---        |   ---    |   ---    |      ---      |  ---   |
| clickevent |   触发点击事件   |          | function |               |

## inputs

|    参数     |        说明        | 是否必须 | 数据类型 |                 数据可选                  |  默认值  |
| :---------: | :----------------: | :------: | :------: | :---------------------------------------: | :------: |
|  disabled   |    是否禁止修改    |          | boolean  |                                           |  false   |
|    color    | 定义聚焦时边框颜色 |          |  string  | default<br>blue<br>green<br>orange<br>red | default  |
|   needtip   |  是否需要指引内容  |          |  string  |                                           |  false   |
|    title    |      定义标题      | require  |  string  |                                           | 测试标题 |
|    name     |    定义元素名称    |          |  string  |                                           | setting  |
|    type     |    定义元素类型    |          |  string  |  text<br>email<br>url<br>tel<br>password  |   text   |
|    style    |   定义输入框类型   |          |  string  |             line <br> normal              |   line   |
|   tiptext   |      指引文字      |          |  string  |                                           |
|    value    |     输入框文字     |          |  string  |                                           |
|     ---     |        ---         |   ---    |   ---    |                    ---                    |   ---    |
| clickevent  |    触发点击事件    |          | function |                                           |
| changeevent |    触发修改事件    |          | function |                                           |
| focusevent  |    触发聚焦事件    |          | function |                                           |
|  blurevent  |    触发失焦事件    |          | function |                                           |
