---
title: 华为 Fusion 安装CNA底层
slug: hw-fusion-computecna
date: 2025-3-28
authors: mlishu
tags: [云计算, Fusion]
keywords: [cloud-computer, Fusion]
---
华为 Fusion 安装CNA底层

<!-- truncate -->

## 系统要求

CPU：16X

DIMM：32GiB

Disk：400GiB

系统镜像：

## 系统安装

挂载镜像后开机进入开始界面，选择 `Install`

![1743130993484](image/14-Fusion安装CNA底层/1743130993484.png)

进入配置界面

![1743091110743](image/11-Fusion安装Compute底层/1743091110743.png)

### 配置网络

选择 `Network`-`IPv4`

![1743091127951](image/11-Fusion安装Compute底层/1743091127951.png)

选择 `Manual address configuration`，也就是静态IP地址

这里改成 `172.16.2.2`

![1743091308837](image/11-Fusion安装Compute底层/1743091308837.png)

### 配置主机名

主机名修改成 `Nadl-CNA_1`

![1743091350660](image/11-Fusion安装Compute底层/1743091350660.png)

### 配置密码

![1743091377612](image/11-Fusion安装Compute底层/1743091377612.png)

### 安装系统

![1743091646868](image/11-Fusion安装Compute底层/1743091646868.png)

后面全部OK就行了
