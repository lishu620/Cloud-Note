---
title: 华为 FusionCompute 底层安装
slug: hw-fusion-compute
date: 2025-3-27
authors: mlishu
tags: [云计算, Fusion]
keywords: [cloud-computer, Fusion]
---
华为 FusionCompute 底层安装

<!-- truncate -->

## 配置要求

CPU：16X

DIMM：16GiB

Disk：120GiB

系统镜像版本：FusionCompute VRM 8.0.0

## 系统安装

挂载镜像后开机进入开始界面，选择 `Install`

![1743091208200](image/11-Fusion安装Compute底层/1743091208200.png)

进入配置界面

![1743091110743](image/11-Fusion安装Compute底层/1743091110743.png)

### 配置网络

选择 `Network`-`IPv4`

![1743091127951](image/11-Fusion安装Compute底层/1743091127951.png)

选择 `Manual address configuration`，也就是静态IP地址

![1743091308837](image/11-Fusion安装Compute底层/1743091308837.png)

### 配置主机名

![1743091350660](image/11-Fusion安装Compute底层/1743091350660.png)

### 配置密码

![1743091377612](image/11-Fusion安装Compute底层/1743091377612.png)

### 安装系统

![1743091646868](image/11-Fusion安装Compute底层/1743091646868.png)

后面全部OK就行了

## 系统配置

在网页输入 `https://172.16.2.1:8443`进入网页管理

![1743128793395](image/11-Fusion安装Compute底层/1743128793395.png)

同意协议继续

默认账号：admin

默认密码：IaaS@PORTAL-CLOUD8!

修改密码

![1743129377439](image/11-Fusion安装Compute底层/1743129377439.png)

之后就直接进入主页

![1743129495847](image/11-Fusion安装Compute底层/1743129495847.png)

### 添加集群

![1743133293394](image/11-Fusion安装Compute底层/1743133293394.png)

![1743133309490](image/11-Fusion安装Compute底层/1743133309490.png)

![1743133325132](image/11-Fusion安装Compute底层/1743133325132.png)

![1743133332163](image/11-Fusion安装Compute底层/1743133332163.png)

### 添加节点

这里需要先[安装节点主机](/blog/hw-fusion-computecna)

点击资源池

![1743131340250](image/11-Fusion安装Compute底层/1743131340250.png)

选择添加主机，同时配置IP地址信息

![1743131400632](image/11-Fusion安装Compute底层/1743131400632.png)

确认配置

![1743131412675](image/11-Fusion安装Compute底层/1743131412675.png)
