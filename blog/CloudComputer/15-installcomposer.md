---
title: 【Horizon】第5章-搭建Composer组件
slug: horizon-composer
date: 2025-3-26
authors: mlishu
tags: [云计算, Horizon环境]
keywords: [cloud-computer, Horizon环境]
---
【Horizon】第5章-搭建Composer组件

<!-- truncate -->

composer可以解决SID，机器名字冲突的问题，更重要的是可以节约磁盘空间，发布的所有系统都可以访问一块磁盘

## 配置数据库

登陆到主SQL Server的机器，登陆数据库

![1742956243637](image/15-installcomposer/1742956243637.png)

新建一个数据库

![1742956274406](image/15-installcomposer/1742956274406.png)

数据库名字为：Composer

![1742956341975](image/15-installcomposer/1742956341975.png)

修改日志安装10MiB增长

![1742956382039](image/15-installcomposer/1742956382039.png)

成功建立数据库

![1742956405464](image/15-installcomposer/1742956405464.png)

## 链接数据源

https://learn.microsoft.com/zh-cn/sql/connect/odbc/microsoft-odbc-driver-for-sql-server?view=sql-server-ver15

![1742956922345](image/15-installcomposer/1742956922345.png)

这里选择64位置版本

这里一直下一步

![1742956963137](image/15-installcomposer/1742956963137.png)

直接下一步就行，默认配置

![1742957560073](image/15-installcomposer/1742957560073.png)

回到Composer服务器（MWS2），进入管理工具，配置ODBC数据源

![1742956487542](image/15-installcomposer/1742956487542.png)

选择系统DSN，添加，选择ODBC 

![1742958557436](image/15-installcomposer/1742958557436.png)

配置数据库名和数据库地址

![1742958578836](image/15-installcomposer/1742958578836.png)

配置登录账户为sa

![1742958667384](image/15-installcomposer/1742958667384.png)

先勾选信任服务证书

![1742958632301](image/15-installcomposer/1742958632301.png)

数据库更改为之前建立的数据库

![1742958679998](image/15-installcomposer/1742958679998.png)

把系统语言改为简体中文

![1742958702884](image/15-installcomposer/1742958702884.png)

然后测试数据源

![1742958723303](image/15-installcomposer/1742958723303.png)

测试完成，我们就可以推出了.ODBC配置完成

![1742958738932](image/15-installcomposer/1742958738932.png)

## Composer安装

我们点击Comper安装包

![1742959167232](image/15-installcomposer/1742959167232.png)
