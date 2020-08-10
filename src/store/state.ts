/*
 * @Author: Miya
 * @Date: 2020-06-06 12:20:47
 * @LastEditTime: 2020-08-11 01:01:14
 * @LastEditors: Miya
 * @Description: Vuex State部分
 * @FilePath: /Single-Search/src/store/state.ts
 */

const state = {
  // 登录相关
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLC.caAFsUUgzA0bPJtKfkH-4Hk',
  // 用户相关
  user: {
    id: 1,
    status: 'admin',
    name: 'miya',
    sex: 'female',
    avatar: '',
    introduce: 'test text'
  },
  // 控制状态
  status: {
    // 遮罩层
    mask: false,
    isInputing: false,
    background: 'https://i.loli.net/2020/06/13/Tsa8uqY2gbjRndw.jpg',
    styleMode: 'light'
  },
  // 搜索引擎列表
  searchList: [
    {
      icon: 'google',
      text: '谷歌',
      header: 'https://www.google.com/search?q=',
      extra: ''
    },
    {
      icon: 'bing',
      text: '必应',
      header: 'https://cn.bing.com/search?q=',
      extra: ''
    },
    {
      icon: 'baidu',
      text: '百度',
      header: 'https://www.baidu.com/s?wd=',
      extra: ''
    }
    // {icon: 'google',text: 'google', header: 'https://www.google.com/search?q='},
    // {icon: 'google',text: 'google', header: 'https://www.google.com/search?q='},
    // {icon: 'google',text: 'google', header: 'https://www.google.com/search?q='},
  ],
  // 导航栏列表
  link: [
    {
      name: '工具',
      titleIconColor: '#29f',
      icon: 'gongju',
      items: [
        {
          icon: 'youtube',
          link: 'https://www.youtube.com',
          text: 'Youtube'
        },
        {
          icon: 'bilibili',
          link: 'https://www.bilibili.com',
          text: 'Bilibili'
        },
        {
          icon: 'acfun',
          link: 'https://www.acfun.com',
          text: 'ACFun'
        },
        {
          icon: 'youku',
          link: 'https://www.youku.com',
          text: 'Youku'
        }
      ]
    },
    {
      name: '开发',
      icon: 'zhongduan',
      titleIconColor: '#29f',
      items: [
        {
          icon: '',
          link: 'https://www.youtube.com',
          text: 'Youtube'
        },
        {
          icon: '',
          link: 'https://www.bilibili.com',
          text: 'Bilibili'
        },
        {
          icon: '',
          link: 'https://www.acfun.com',
          text: 'ACFun'
        },
        {
          icon: '',
          link: 'https://www.youku.com',
          text: 'Youku'
        }
      ]
    },
    {
      name: '影视动画',
      titleIconColor: '#29f',
      icon: 'fa fa-video-camera',
      items: [
        {
          icon: 'undefined',
          link: 'https://www.youtube.com',
          text: 'Youtube'
        },
        {
          icon: 'undefined',
          link: 'https://www.bilibili.com',
          text: 'Bilibili'
        },
        {
          icon: 'undefined',
          link: 'https://www.acfun.com',
          text: 'ACFun'
        },
        {
          icon: 'undefined',
          link: 'https://www.youku.com',
          text: 'Youku'
        }
      ]
    },
    {
      name: '搜索引擎',
      icon: 'fa fa-search',
      titleIconColor: '#29f',
      items: [
        {
          icon: 'undefined',
          link: 'https://www.youtube.com',
          text: 'Youtube'
        },
        {
          icon: 'undefined',
          link: 'https://www.bilibili.com',
          text: 'Bilibili'
        },
        {
          icon: 'undefined',
          link: 'https://www.acfun.com',
          text: 'ACFun'
        },
        {
          icon: 'undefined',
          link: 'https://www.youku.com',
          text: 'Youku'
        }
      ]
    },
    {
      name: '社交',
      titleIconColor: '#29f',
      icon: 'fa fa-commenting-o',
      items: [
        {
          icon: 'undefined',
          link: 'https://www.youtube.com',
          text: 'Youtube'
        },
        {
          icon: 'undefined',
          link: 'https://www.bilibili.com',
          text: 'Bilibili'
        },
        {
          icon: 'undefined',
          link: 'https://www.acfun.com',
          text: 'ACFun'
        },
        {
          icon: 'undefined',
          link: 'https://www.youku.com',
          text: 'Youku'
        }
      ]
    },
    {
      name: '剁手',
      icon: 'fa fa-shopping-cart',
      titleIconColor: '#29f',
      items: [
        {
          icon: 'undefined',
          link: 'https://www.youtube.com',
          text: 'Youtube'
        },
        {
          icon: 'undefined',
          link: 'https://www.bilibili.com',
          text: 'Bilibili'
        },
        {
          icon: 'undefined',
          link: 'https://www.acfun.com',
          text: 'ACFun'
        },
        {
          icon: 'undefined',
          link: 'https://www.youku.com',
          text: 'Youku'
        }
      ]
    },
    {
      name: '设计视觉',
      titleIconColor: '#29f',
      icon: 'caijian',
      items: [
        {
          icon: 'undefined',
          link: 'https://palettegenerator.colorion.co/',
          text: 'Color Palette Generator'
        },
        {
          icon: 'undefined',
          link: 'https://www.youtube.com',
          text: 'Youtube'
        },
        {
          icon: 'undefined',
          link: 'https://www.bilibili.com',
          text: 'Bilibili'
        },
        {
          icon: 'undefined',
          link: 'https://www.acfun.com',
          text: 'ACFun'
        },
        {
          icon: 'undefined',
          link: 'https://www.youku.com',
          text: 'Youku'
        }
      ]
    },
    {
      name: '邮箱',
      icon: 'xinfeng',
      titleIconColor: '#29f',
      items: [
        {
          icon: 'undefined',
          link: 'https://www.youtube.com',
          text: 'Youtube'
        },
        {
          icon: 'undefined',
          link: 'https://www.bilibili.com',
          text: 'Bilibili'
        },
        {
          icon: 'undefined',
          link: 'https://www.acfun.com',
          text: 'ACFun'
        },
        {
          icon: 'undefined',
          link: 'https://www.youku.com',
          text: 'Youku'
        }
      ]
    }
  ]
};

export { state };
