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

输入密钥

```
J4V48-P8MM4-9N3J9-HD97X-DYMRM
```

![1742828818851](image/14-installDB/1742828818851.png)

接受许可条款

![1742660252807](image/14-installDB/1742660252807.png)

这里不勾选检查更新

![1742660295645](image/14-installDB/1742660295645.png)

这里安装规则全部都要通过

这里只选择 `数据库引擎服务`，安装位置就默认就行

![1742828897755](image/14-installDB/1742828897755.png)

实例配置，默认就行了

![1742828968781](image/14-installDB/1742828968781.png)

然后服务启动类型，都改为自动启动

![1742828989552](image/14-installDB/1742828989552.png)

数据库引擎配置，使用“混合模式”设置登陆密码，“添加当前用户”然后下一步

![1742829046135](image/14-installDB/1742829046135.png)

这里直接安装就行了，可以用来检查配置情况

![1742829074708](image/14-installDB/1742829074708.png)

配置完成，关闭即可

![1742829404644](image/14-installDB/1742829404644.png)

安装管理软件SSMS

![1742829525808](image/14-installDB/1742829525808.png)

直接点击安装即可

![1742829546972](image/14-installDB/1742829546972.png)

安装完成，自动重新启动

![1742829721536](image/14-installDB/1742829721536.png)

## 链接数据库

运行 `SQL Server Management Studio`

![1742829957768](image/14-installDB/1742829957768.png)

服务器名称：`localhost`

身份验证:`SQL Server 身份验证`

登录名：`sa`

密码：`[安装时填写的sa的密码]`

这里加密要选择可选，不然无法连接

点击导航栏的 `查询`功能

![1742830244170](image/14-installDB/1742830244170.png)

### 查看服务器名称

登录后进行查询：`select @@SERVERNAME;`其实服务器名称就是计算机名，建议本地使用此服务器名称连接

![1742830610751](image/14-installDB/1742830610751.png)

## 远程连接

在windows开始菜单中找到 `SQL Server 配置管理器`

将 `SQL Server 网络配置`–`MSSQLSERVER 的协议`中的 `TCP/IP`设置为启用

![1742830919470](image/14-installDB/1742830919470.png)

在 `服务`-`SQL Server Browser`设置为自动启动

![1742831020666](image/14-installDB/1742831020666.png)

在Nadl-MWS1上安装 `DataGrip`

选择添加SQL Server

![1742832198355](image/14-installDB/1742832198355.png)

配置样例

主机：`172.16.1.60`

身份验证：`用户与密码`

用户：`sa`

密码：数据库配置的密码

![1742912024228](image/14-installDB/1742912024228.png)

### 查询测试

![1742912099340](image/14-installDB/1742912099340.png)

## 配置SQL Server集群

首先，我们需要两台配置好的SQL服务器，这里是 `MW SQL Server`和 `MW Server 22 - 2`这里的 `MW Server 22 - 2`是备份数据库服务器，仅安装 `SQL Server`，不需要SMSS管理软件

### 创建共享数据库故障转移库文件

在AD域服务上创建一个共享文件夹，要求两个SQL服务器都可以访问

当群集服务出现故障，能够读取这里面的信息

![1742912545205](image/14-installDB/1742912545205.png)

启动文件夹共享状态

![1742912580874](image/14-installDB/1742912580874.png)

添加共享用户 `Everyone`，同时设置 `权限级别`为 `读取/写入`

![1742912624317](image/14-installDB/1742912624317.png)

![1742912691160](image/14-installDB/1742912691160.png)

此时这里就有文件共享信息

![1742912708079](image/14-installDB/1742912708079.png)

然后在功能中安装一个 `故障转移群集`，两个服务器中都需要安装

![1742912853965](image/14-installDB/1742912853965.png)

### 将故障群集转换指向该文件夹

打开 `故障转换群集管理器`

![1742918130291](image/14-installDB/1742918130291.png)

点击 `创建群集`

![1742918159975](image/14-installDB/1742918159975.png)

选中主从SQL服务器

![1742918275752](image/14-installDB/1742918275752.png)

然后一直下一步，这里选择 `仅运行选中的测试`

![1742918330848](image/14-installDB/1742918330848.png)

仅勾选 `存储`和 `网络`，接着下一步

![1742918363224](image/14-installDB/1742918363224.png)

最后确认一遍配置

![1742918382041](image/14-installDB/1742918382041.png)

这样就是完成了测试

![1742918457896](image/14-installDB/1742918457896.png)

勾选群集的名称，设置一个群集地址和名称

注意集群名称和地址不能和局域网中的设备一致

![1742918655384](image/14-installDB/1742918655384.png)

这里记得要取消勾选，然后就开始创建故障转移群集

![1742918698178](image/14-installDB/1742918698178.png)

### 配置仲裁存储

选择 `SQL集群`-`更多操作`-`配置群集仲裁设置`

![1742918763036](image/14-installDB/1742918763036.png)

这里记得选择 `选择仲裁见证`

![1742918788393](image/14-installDB/1742918788393.png)

勾选 `配置文件共享见证`

![1742918811948](image/14-installDB/1742918811948.png)

填写对应文件的路径，我这里是主AD域的文件共享地址，然后一直下一步

![1742918880619](image/14-installDB/1742918880619.png)

最后一次确认配置

![1742918897255](image/14-installDB/1742918897255.png)

配置完以后查看节点是否正常

![1742918928921](image/14-installDB/1742918928921.png)

### 分配大权限用户

选择 `SQL Server 服务`,打开alwayon功能（两台机器都要配置）

![1742919019944](image/14-installDB/1742919019944.png)

启动 `Always On 可用性组`

![1742919041750](image/14-installDB/1742919041750.png)

在主AD域上创建一个用户

![1742919226132](image/14-installDB/1742919226132.png)

新建用户 `dbadmin`

![1742919293279](image/14-installDB/1742919293279.png)

创建密码且永不过期

![1742919327962](image/14-installDB/1742919327962.png)

在 `Always On`中分配用户

![1742919394189](image/14-installDB/1742919394189.png)
