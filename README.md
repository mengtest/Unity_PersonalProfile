## Unity3D简历_作品集_2017/2/14更新
`注：以下除部分模型资源，其他均为原创，并非网上现有样例或资源`

####三维水面物理效果的插件
* 通过cpu，二维数组记录点的坐标和物理信息，三维数组记录单位格内mesh信息，FixedUpdate中交替遍历，实现物理效果的模拟。
* 由于没有精力写英文说明文档，故被AssetStore退回:( 现在已将源码开源，并进行相关教程的编写。

![](/Projects/PhysicalWater/Unity_Plugins_PhysicalWater.png)

####基于讯飞SDK和图灵http端api的聊天机器人
* 接入讯飞SDK，返回文字信息经过本地nlp分析，调用图灵接口，返回json再进过本地nlp根据心情和与用户间建立的情感矫正文字，输出显示并播放指定动画。
* 本地nlp没有调用字典进行语义分析，是正则表达式组合，但是应对图灵机器人返回的信息已经可以实现预计需求。
* 另外：针对网上没有的Unity5.x+AndroidStudio写了[Unity5.x+Android Studio 讯飞SDK的接入](http://weibo.com/ttarticle/p/show?id=2309404072290617851542&is_all=1#_0)教程并附上了源码。

![](/Projects/TalkFriends/Unity_TalkFriend01.png) ![](/Projects/TalkFriends/Unity_TalkFriend02.png)

####一些小游戏demo
* 一个较为另类的音乐游戏原型。通过分析音乐频率进行敌人生成。玩家通过建造辅助墙壁抵挡外来敌人，自身的墙壁可抵挡敌人进行加分。玩家在中心球体收到伤害时的反馈是mesh实时计算生成的。

 ![](/Projects/MusicGame/Unity_Demo_MusicGame01.png)
 ![](/Projects/MusicGame/Unity_Demo_Music02.png)
 ![](/Projects/MusicGame/Unity_Demo_MusicGame03.png) 

* 移动端竖版手势操作的游戏，爽快的打击感和策略性为核心。实现了程序原型，目前在进行美术制作。

 ![](/Projects/Hooker/Unity_Hooker01.png) ![](/Projects/Hooker/Unity_Hooker02.png)

* 在GlobalGameJam中休息的5小时写的一个移动端小游戏，玩家需要不断地对麦克风喊叫并通过陀螺仪不断躲避前方的陨石取得更高分数。

 ![](/Projects/GGJSpaceShouter/Unity_GGJ_SpaceShouter01.png) ![](/Projects/GGJSpaceShouter/Unity_GGJ_SpaceShouter02.png)

* 移动端一个比较综合的demo，这也是学习Unity以来制作的第一个demo。
  * 可以交互的地形
  * 基于行为树的敌人AI
  * 不同武器的不同行为方式
  * 简单的背包系统和载具。
  
   ![](/Projects/FirstRpg/Unity_Demo_Rpg01.png) ![](/Projects/FirstRpg/Unity_Demo_Rpg02.png)

* 基于Unet制作的局域网射击游戏demo。[源码](https://github.com/Super0410/Unity_UnetDemo)
  * 载入界面简单的音乐可视化
  * 服务器端的观察者模式（通知角色在本地的换装信息）
  * 剩余的为网上已有的教学，如：判定服务器和客户端间信息的传递和逻辑的判定，这些网上已有现有的教程，就不一一赘述了。
  
   ![](/Projects/Unet/Unity_Demo_Unet.png)
