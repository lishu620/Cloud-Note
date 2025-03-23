---
title: 【Horizon】第4章-搭建SQL
slug: config-sql
date: 2025-3-23
authors: mlishu
tags: [云计算, Windows, sql]
keywords: [cloud-computer, Windows, sql]
---
【Horizon】第4章-搭建SQL

<!-- truncate -->

配置一个专用SQL数据库服务器 `MW SQL Server`

## 加入AD域管理

在 `MW SQL Server`上配置Nadl主AD的DNS

![1742722955119](image/14-installDB/1742722955119.png)

检测 `MW SQL Server`能不能访问域名 `nadl.local`

![1742722984959](image/14-installDB/1742722984959.png)

这里可以访问，继续下一步

计算机名/域更改

![1742723054394](image/14-installDB/1742723054394.png)

填写AD主域的账号和密码

![1742723089244](image/14-installDB/1742723089244.png)

在Nadl-MWS1上验证是否加入域

![1742723372573](image/14-installDB/1742723372573.png)

## 安装SQL

进入SQL Server安装页面

![1742660186727](image/14-installDB/1742660186727.png)

接受许可条款

![1742660252807](image/14-installDB/1742660252807.png)

这里不勾选检查更新

![1742660295645](image/14-installDB/1742660295645.png)

这里安装规则全部都要通过

![1742728536041](image/14-installDB/1742728536041.png)、

功能选择中开启 `数据库引擎服务`

![1742728619989](image/14-installDB/1742728619989.png)
