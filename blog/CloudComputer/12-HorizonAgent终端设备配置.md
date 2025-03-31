---
title: 【Horizon】第6章-安装Agent服务器
slug: horizon-agent
date: 2025-3-27
authors: mlishu
tags: [云计算, Horizon环境]
keywords: [cloud-computer, Horizon环境]
---
【Horizon】第6章-安装Agent服务器

<!-- truncate -->

## VDI终端主机配置

Horizon-Agent需要在终端VDI中安装

VDI中需要安装 `VMware Tools`和 `VMware Horizon Agent`

`VMware Tools`的安装由 `EXSI主机`或 `VCSA管理安装`

### VMware Horizon Agent安装

软件版本：

使用管理员身份安装 `Horizon Agent`

![1743064010106](image/17-installagent/1743064010106.png)

选择 `桌面模式`配置

![1743064040875](image/17-installagent/1743064040875.png)

选择 `IPV4`

![1743064056589](image/17-installagent/1743064056589.png)

根据需要的安装组件

这里需要单独添加 `USB重定向`

![1743064108689](image/17-installagent/1743064108689.png)

启动远程桌面

![1743064127906](image/17-installagent/1743064127906.png)

开始安装

![1743064137782](image/17-installagent/1743064137782.png)

## 配置桌面

准备创建桌面池

在左侧清单，找到桌面，添加桌面池

![1743064387670](image/17-installagent/1743064387670.png)

选择手动桌面池。

手动桌面池：相当于独立的电脑，每次的对虚拟机的修改都生效。

已经装完一台虚拟机，并装了agent组件。这个agent组件自动会注册到connection当中来。虚拟机到connection中后，我们可以直接把本体交付到手动桌面池中。

就和直接给用户配了一台电脑一样

自动桌面：相当于共享电脑，大家使用同一个虚拟机，对虚拟机的修改都放在用户的配置文件中。

比如有个虚拟机，打了一个快照。那么如果需要10个虚拟机，那么就会给予这个快照来生产10个虚拟机，10个桌面用户做的修改会单独存放在一个配置文件中，虚拟机本体不做任何改动。

虚拟机快照+用户配置文件=当前用户运行状态

RDS桌面池：相当于共享的服务器，可以多人同时连接服务器上。

![1743064417989](image/17-installagent/1743064417989.png)

选择计算机源。在其他平台上托管的虚拟机选择其他源

![1743064469926](image/17-installagent/1743064469926.png)

默认即可

![1743064488414](image/17-installagent/1743064488414.png)

选择默认专用。专用是用户每次登陆是同一桌面，浮动不是同一桌面

![1743064507999](image/17-installagent/1743064507999.png)

添加一些访问显示信息

![1743064546914](image/17-installagent/1743064546914.png)

根据实际情况选择，显示计算机名称要勾选

![1743064583912](image/17-installagent/1743064583912.png)

根据实际情况选择

![1743064617647](image/17-installagent/1743064617647.png)

选择Windows虚拟机

![1743064641332](image/17-installagent/1743064641332.png)

高级存储默认即可

![1743064684847](image/17-installagent/1743064684847.png)

检查配置

![1743064702838](image/17-installagent/1743064702838.png)

创建完就可以看见桌面池

![1743064727323](image/17-installagent/1743064727323.png)

点击池的ID，有个授权的警告，点击授权

![1743064744555](image/17-installagent/1743064744555.png)

点击添加

![1743064762258](image/17-installagent/1743064762258.png)

域选择我们之前建立的域，用户输入管理员

![1743064811439](image/17-installagent/1743064811439.png)

勾选用户，点击确定，会提示授权成功

![1743064831622](image/17-installagent/1743064831622.png)

找到计算机，如果状态为可用就成功了

![1743065180869](image/17-installagent/1743065180869.png)
