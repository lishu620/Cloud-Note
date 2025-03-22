---
title: 【Horizon】第1章-环境介绍
slug: horizon-environment
date: 2025-3-21
authors: mlishu
tags: [云计算, Horizon环境]
keywords: [cloud-computer, Horizon环境]
---
[Horizon]第1章-环境介绍

<!-- truncate -->

https://blog.csdn.net/little_startoo/article/details/133888900?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522d6253fa40332e30965c39084fea64209%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&request_id=d6253fa40332e30965c39084fea64209&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_ecpm_v1~rank_v31_ecpm-14-133888900-null-null.nonecase&utm_term=Horizon&spm=1018.2226.3001.4450

## DNS映射

| 主机名       | 域名               | 外网IP      | 内网IP      |
| ------------ | ------------------ | ----------- | ----------- |
| Nadl-MWS1    | mws1.nadl.local    | 10.59.12.51 | 172.16.1.66 |
| Nadl-MWS2    | mws2.nadl.local    | 10.59.12.52 | 172.16.1.67 |
| Nadl-Storage | storage.nadl.local | 10.59.12.8  | 172.16.66.5 |

## 搭建流程

1. [搭建DNS/AD服务器](/blog/horizon-addns)
2. [搭建主从SQL服务器](https://blog.csdn.net/little_startoo/article/details/133889261?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522d6253fa40332e30965c39084fea64209%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&request_id=d6253fa40332e30965c39084fea64209&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_ecpm_v1~rank_v31_ecpm-18-133889261-null-null.nonecase&utm_term=Horizon&spm=1018.2226.3001.4450)
3. [搭建composer服务器](https://blog.csdn.net/little_startoo/article/details/133889564?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522d6253fa40332e30965c39084fea64209%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&request_id=d6253fa40332e30965c39084fea64209&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_ecpm_v1~rank_v31_ecpm-5-133889564-null-null.nonecase&utm_term=Horizon&spm=1018.2226.3001.4450)
4. [搭建connection服务器](https://blog.csdn.net/little_startoo/article/details/133889653?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522d6253fa40332e30965c39084fea64209%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&request_id=d6253fa40332e30965c39084fea64209&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_ecpm_v1~rank_v31_ecpm-19-133889653-null-null.nonecase&utm_term=Horizon&spm=1018.2226.3001.4450)
5. [搭建agent服务器](https://blog.csdn.net/little_startoo/article/details/133889713?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522d6253fa40332e30965c39084fea64209%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&request_id=d6253fa40332e30965c39084fea64209&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_ecpm_v1~rank_v31_ecpm-6-133889713-null-null.nonecase&utm_term=Horizon&spm=1018.2226.3001.4450)

## 主机配置

这里我们需要两台Windows Server服务器

一台作为主服务器，一台作为从服务器
