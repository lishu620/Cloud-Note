---
title: 【Horizon】第1章-环境介绍
slug: horizon-environment
date: 2025-3-21
authors: mlishu
tags: [云计算, Horizon]
keywords: [cloud-computer, Horizon]
---
[Horizon]第1章-环境介绍

<!-- truncate -->

## 提示

不要在域控制器上安装Horizon全部组件

## 拓扑图

![1742722284619](image/11-environment/1742722284619.png)

## 主机、IP、DNS映射表

| 主机名         | 域名            | 外网IP      | 内网IP      |
| -------------- | --------------- | ----------- | ----------- |
| Nadl-VCSA      | vcsa.nadl.local | 10.59.12.50 | 172.16.1.1  |
| Horizon-SQL    |                 |             | 172.16.1.55 |
| Nadl-OMV       |                 | 10.59.12.55 | 172.16.1.58 |
| Nadl-Win10C    |                 | 10.59.12.60 | 172.16.1.60 |
| Nadl-DB-Master |                 |             | 172.16.1.61 |
| Nadl-DB-Slave  |                 |             | 172.16.1.62 |
| Nadl-SO        |                 |             | 172.16.1.63 |
| vdesktop       |                 | 10.59.12.64 | 172.16.1.64 |
| Nadl-AD-Master | adm.nadl.local  | 10.59.12.51 | 172.16.1.66 |
| Nadl-AD-Slave  | ads.nadl.local  | 10.59.12.52 | 172.16.1.67 |

## 搭建流程

1. [搭建DNS/AD服务器](/blog/horizon-addns)
2. [搭建主从SQL服务器](/blog/config-sql)
3. [搭建composer服务器](/blog/horizon-composer)
4. [搭建connection服务器](/blog/horizon-connection)
5. [搭建agent云主机](/blog/horizon-agent)

## 主机配置

Nadl-MWS1：主ADDNS服务器

Nadl-MWS2：从ADDNS服务器、从SQL服务器

Nadl-SQL：主SQL服务器

Nadl-OMV：共享存储

Horizon-SQL：主从SQL服务器集群
