---
title: 搭建OMV存储
slug: config-omv
date: 2025-3-23
authors: mlishu
tags: [云计算, 存储]
keywords: [cloud-computer, storage]
---
搭建OMV存储

<!-- truncate -->

## 系统安装

直接 `Install`下一步即可

![1742716047447](image/09-storage-omv/1742716047447.png)

选择 `Chinese (Simplified) - 中文(简体)` 语言

![1742716071721](image/09-storage-omv/1742716071721.png)

地区选择为 `中国`

![1742716102025](image/09-storage-omv/1742716102025.png)

后面的键盘模式默认就行了

配置主机名，这里自行配置

![1742716158520](image/09-storage-omv/1742716158520.png)

如果是自己使用的话，可以不需要配置域名，使用 `local`或者 `localhost`

![1742716207724](image/09-storage-omv/1742716207724.png)

配置 `root`用户密码

![1742716241355](image/09-storage-omv/1742716241355.png)

确认密码

![1742716259375](image/09-storage-omv/1742716259375.png)

后面要配置Debian仓库的地址，我这里选择中国-中科大镜像

![1742716617214](image/09-storage-omv/1742716617214.png)

![1742716635180](image/09-storage-omv/1742716635180.png)

引导安装在 `/dev/sda`

![1742716709689](image/09-storage-omv/1742716709689.png)

配置完成之后继续下一步配置

![1742716738775](image/09-storage-omv/1742716738775.png)

## 系统配置

使用Bash进入OMV，查询OMV的IP地址

在网页中输入查询到的IP地址

![1742716899258](image/09-storage-omv/1742716899258.png)

默认账号：`admin`

默认密码：`openmediavault`

就可以进入首页

![1742717040480](image/09-storage-omv/1742717040480.png)

进入后提示 `仪表盘未配置。如要个性化，请前往 设置页。`，根据实际情况选择自己想要显示的内容。

下图是建议配置

![1742717238637](image/09-storage-omv/1742717238637.png)
