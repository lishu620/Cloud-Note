---
title: 【Horizon】第3章-配置Windows AD
slug: config-windows-ad
date: 2025-3-22
authors: mlishu
tags: [云计算, Windows]
keywords: [cloud-computer, Windows]
---
【Horizon】第三章-配置Windows AD

<!-- truncate -->

选择 `Active Directory用户和计算机`

![1742645772078](image/13-config-AD/1742645772078.png)

创建一个组织单元（相当于一个大型目录）

![1742645817935](image/13-config-AD/1742645817935.png)

![1742645849176](image/13-config-AD/1742645849176.png)

这里名称可以任意填写，我这里就写 `Horizon`

这个组织单元用于管理后面我们所有创建的目录

我又在当前目录下创建了三个组织单元，用于我后面的操作

![1742649783119](image/13-config-AD/1742649783119.png)

VM：虚拟机

User：用户

Local：物理机

到这里，第一个主机就配置完毕了，我们来接着配置SQL环境
