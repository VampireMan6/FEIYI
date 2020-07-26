# uni-app 笑一波项目模板

1. 这是一个比较完整的项目，实现了登录、注册、评论、图片预览、视频播放、文字图片视频投稿，如果你有计划开发个类似的app，建议下载本项目，然后在此基础修改，相信能为你节省部分时间精力。
2. 本app也适合初学者完整了解如何开发uni-app
3. pages目录下共有7个目录及对应的7个vue文件 center->个人中心，detail->评论页，hot->最热页面，like->我喜欢的，my->我的投稿，new->首页，tougao->投稿页
4. platforms 下分别是5+app和微信小程序下的login.vue
5. common目录下为公共css和js，其中util.js里为连接服务器api的信息，你需要在此修改相关信息为你自己的api
6. 本项目模板支持5+app和微信小程序
7. 如果你使用了本项目模板，希望也能获得后端api代码，去gitee自取[https://gitee.com/jameson512/zzjx.git](https://gitee.com/jameson512/zzjx.git)
8. https://gitee.com/jameson512/xiaoyibo 为最新版，随时更新，欢迎star
9. 如果觉得对你有用，请好评鼓励下，谢谢

## 使用方式

1. 下载后，在hbx里新建一个空白uni-app项目，然后修改本项目根下的manifest.json appid 值为你的项目appid，
2. 打开common/util.js 修改相关api信息
3. 调试修改

----

# 注意事项

## 请务必修改 common/util.js 中的api信息，演示站数据随时可能关闭


> 若发现源码有bug，欢迎评论中指出,或到 
> https://gitee.com/jameson512/xiaoyibo 提issue
> 

## 必须修改mainfest.json 中的appid为你自己的，否则你将无法在 Dcloud 云端控制台看到自己的app，且会出现dcloud广告
