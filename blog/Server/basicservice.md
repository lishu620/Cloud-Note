---
title: 搭建服务器基础服务
slug: basicservice
date: 2025-2-22
authors: mlishu
tags: [服务器, 1Panel]
keywords: [服务器, 1Panel]
---
使用Ubuntu搭建基础服务

<!-- truncate -->

## 1.安装系统

这里我选择安装 `Ubuntu22.04Server`版本，不需要GUI界面

## 2.安装1Panel

这里是[1Panel主页](https://1panel.cn/)

在用户页面输入

```bash
curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && sudo bash quick_start.sh
```

这里我选择的是Ubuntu的安装，如果希望使用Debian等其他系统在主页复制安装代码

## 3.安装服务

### 1)安装MySQL和Redis

这两个都可以通过1Panel的应用商店直接安装，注意勾选【外部访问】

### 2）安装JumpServer跳板机

JumpServer用于便捷访问内网，直接应用商店下载

这里也需要勾选【外部访问】
