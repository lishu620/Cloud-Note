---
title: 【Horizon】第5章-安装Connection服务器
slug: horizon-connection
date: 2025-3-26
authors: mlishu
tags: [云计算, Horizon环境]
keywords: [cloud-computer, Horizon环境]
---
【Horizon】第5章-安装Connection服务器

<!-- truncate -->

配置主从控制器

## 安装软件

### 配置主服务器

这里我们要先更换为主AD域用户安装

![1743055217079](image/16-installconnection/1743055217079.png)

直接安装connection软件

![1743055025089](image/16-installconnection/1743055025089.png)

选择接受条款

![1743055047716](image/16-installconnection/1743055047716.png)

位置可以不做更改

![1743055063173](image/16-installconnection/1743055063173.png)

选择标准[服务器](https://so.csdn.net/so/search?q=%E6%9C%8D%E5%8A%A1%E5%99%A8&spm=1001.2101.3001.7020)，IPV4。后期做HA高可用可以安装从服务器

![1743055280500](image/16-installconnection/1743055280500.png)

输入用于恢复的密码和提示

![1743055310353](image/16-installconnection/1743055310353.png)

自动配置防火墙

![1743055323068](image/16-installconnection/1743055323068.png)

默认使用授权用户，这就是为什么要修改登录账户

![1743055351223](image/16-installconnection/1743055351223.png)

不需要加入计划，一直下一步

![1743055378783](image/16-installconnection/1743055378783.png)

选择常规，开始安装

![1743055400612](image/16-installconnection/1743055400612.png)

不用显示文档，安装完成

![1743058874181](image/16-installconnection/1743058874181.png)

安装完以后桌面会有一个connection的图标，点击进去就行了

![1743060683646](image/16-installconnection/1743060683646.png)

输入用户名和密码进行登录

![1743060705402](image/16-installconnection/1743060705402.png)

编辑许可证

![1743060831863](image/16-installconnection/1743060831863.png)

许可完成，就可以开始配置了

![1743061019649](image/16-installconnection/1743061019649.png)

### 配置从服务器

## 添加服务器

在左侧设置中找打服务器，然后再vcenter **server**添加

![1743061726829](image/16-installconnection/1743061726829.png)

输入VCSA信息

![1743061767954](image/16-installconnection/1743061767954.png)

会出现检测到证书无效，点击查看证书

![1743062419912](image/16-installconnection/1743062419912.png)

![1743062440258](image/16-installconnection/1743062440258.png)

默认主机缓存大小，可以根据实际情况填写，这个是回收磁盘空间时的缓存

![1743063540178](image/16-installconnection/1743063540178.png)

提交，完成

![1743063556236](image/16-installconnection/1743063556236.png)

再设置中可以看到我们配置成功的消息，到这connection配置完成

![1743063591502](image/16-installconnection/1743063591502.png)
