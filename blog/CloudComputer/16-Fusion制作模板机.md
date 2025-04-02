---
title: 华为 Fusion 模板机配置（Windows）
slug: hw-fusion-windows
date: 2025-4-2
authors: mlishu
tags: [云计算, Fusion]
keywords: [cloud-computer, Fusion]
---
华为 Fusion 模板机配置（Windows）

<!-- truncate -->

> 仅支持Legacy启动方式， **不支持UEFI** 。
> 使用UEFI启动会导致在安装Agent后卡在Windows Logo无法启动，具体不清楚什么原因。

> Windows版本：Windows10 LTSC

## 安装Windows

按照正常流程安装Windows即可，随后禁用新创建的用户，启用Administrator，并使用Administrator登录

### 安装Tools

在 `FusionCompute`中选择安装 `Tools`

![1743580574996](image/16-Fusion制作模板机/1743580574996.png)

在 `Windows`中安装 `Tools`

![1743580598343](image/16-Fusion制作模板机/1743580598343.png)

直接 `Install`就行

![1743580613647](image/16-Fusion制作模板机/1743580613647.png)

安装 `Tools`的过程中会获取网络

![1743580665535](image/16-Fusion制作模板机/1743580665535.png)

安装完成之后选择 `Restart`

### 激活系统

使用 `irm massgrave.dev/get | iex`激活系统

### 启动Administrator用户

安装系统进行到需要设置用户名时，按 `Shift + F10`开启命令行窗口，输入下面命令激活Administrator账户

```
net user Administrator /active:yes
```

![1743581012153](image/16-Fusion制作模板机/1743581012153.png)

## 配置Windows

挂载安装程序 `FusionAccess_WindowsDesktop_Installer_8.0.2.iso`到虚拟机

运行run.bat,初次安装可能会需要先安装一部分运行库。

![1743581370913](image/16-Fusion制作模板机/1743581370913.png)

点击“制作模板”

![1743581431137](image/16-Fusion制作模板机/1743581431137.png)

这里选择FusionSphere

![1743581447890](image/16-Fusion制作模板机/1743581447890.png)

选择链接克隆，复制速度快，占用空间少，缺点是不够安全

![1743581468292](image/16-Fusion制作模板机/1743581468292.png)

勾选“禁用Windows更新”，其余保持默认

![1743581506030](image/16-Fusion制作模板机/1743581506030.png)

我们这里使用LiteAS自带的域控制器，所以跳过域配置

![1743581538554](image/16-Fusion制作模板机/1743581538554.png)

防火墙选择自动即可

![1743581552904](image/16-Fusion制作模板机/1743581552904.png)

确认安装配置信息

![1743581575038](image/16-Fusion制作模板机/1743581575038.png)

等待安装完成，中间会重启1-2次

![1743582063894](image/16-Fusion制作模板机/1743582063894.png)

按确定后自动重启，重启后会自动继续安装。**中间不要卸载安装程序的ISO**

![1743582077359](image/16-Fusion制作模板机/1743582077359.png)

安装完成后安装自定义软件
