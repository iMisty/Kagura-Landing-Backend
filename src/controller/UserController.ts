/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-10-18 16:53:30
 * @LastEditors: Miya
 * @LastEditTime: 2020-10-19 00:24:41
 * @Description: 用户信息接口
 * @FilePath: /Kagura-Landing-Backend/src/controller/UserController.ts
 */
const UserModel = require('../model/UserModel');
const ContentModel = require('../model/ContactModel');

class User{
  // 创建管理员
  public static async addNewAdmin(ctx: any){}

  // 修改管理员密码
  public static async updateAdmin(ctx: any){}

  // 验证登录
  public static async validateAdmin(ctx: any){}
}

// About 页面用接口
class about extends User{
  // 页面介绍文字
  public static async setAboutIntro(ctx: any){
    
  }
}