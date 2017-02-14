## Unity3D简历_作品集
`注：以下除部分模型资源，其他均为原创，并非网上现有样例或资源`

####三维水面物理效果的插件

    通过cpu，二维数组记录点的坐标和物理信息，三维数组记录单位格内mesh信息，FixedUpdate中交替遍历，实现物理效果的模拟。
    （由于没有精力写英文说明文档，故被AssetStore退回:( ）

####基于讯飞SDK和图灵http端api的聊天机器人
  
接入讯飞SDK，返回文字信息经过本地nlp分析，调用图灵接口，返回json再进过本地nlp根据心情和与用户间建立的情感矫正文字，输出显示并播放指定动画。
本地nlp没有调用字典进行语义分析，是正则表达式组合，但是应对图灵机器人返回的信息已经可以实现预计需求。
另外：针对网上没有的Unity5.x+AndroidStudio写了[Unity5.x+Android Studio 讯飞SDK的接入](http://liquiddomain.net/forum.php?mod=viewthread&tid=17&extra=page%3D1)教程并附上了源码。

####一些小游戏demo
A. 在GlobalGameJam中休息的5小时写的一个移动端小游戏，玩家需要不断地喊叫并通过陀螺仪不断躲避前方的陨石取得更高分数。

下载链接：


B. 移动端一个比较综合的demo，这也是学习Unity以来制作的第一个demo。包括：可以交互的地形、基于行为树的敌人AI，主角可以切换武器，不同武器的不同行为方式，简单的背包系统和载具。
   


C. 基于Unet制作的局域网射击游戏demo。
包括：载入界面简单的音乐可视化、服务器端的观察者模式（通知角色在本地的换装信息）。剩余的为网上已有的教学，如：判定服务器和客户端间信息的传递和逻辑的判定，这些网上已有现有的教程，就不一一赘述了。


我还在[学院的论坛](http://liquiddomain.net/)里写过[Unity](http://liquiddomain.net/forum.php?mod=viewthread&tid=18)和[三维建模](http://liquiddomain.net/forum.php?mod=viewthread&tid=17&extra=page%3D1)的帖子，虽然tj了，但是阅读量依然排在前二)
