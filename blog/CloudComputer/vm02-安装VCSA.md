---
title: 【VMware】安装VCSA管理系统
slug: Install-VCSA-management-system
date: 2025-3-19
authors: mlishu
tags: [云计算, VMware]
keywords: [cloud-computer, VMware]
---
<!-- truncate -->

准备操作

由于 `VCSA控制器`必须安装在EXSI主机上，因此必须[安装EXSI底层系统](/blog/Install-EXSI8-underlying-system)

安装版本：`VMware-VCSA-all-8.0.0-20519528.iso`

底层服务器：`VMware EXSI8`

## 安装系统

在Windows中打开ISO文件，找到 `E:\vcsa-ui-installer\win32`中的 `installer`并运行

![1742396563810](image/05-installVCSA/1742396563810.png)

> 在右上角可以修改语言

选择 `安装`，进入安装程序

![1742396589119](image/05-installVCSA/1742396589119.png)

输入第三步和第四步的设置

这里我选择 `微型安装`+`精简磁盘服务`

后续需要配置 `vCenter Server`的网络

![1742396675401](image/05-installVCSA/1742396675401.png)

可以不配置FQDN，但是DNS服务器一定要可用，不然会报错 `无法运行vdcpromo`

等待安装即可

![1742396726066](image/05-installVCSA/1742396726066.png)

## 配置系统

在安装完成系统后，可以在VCSA中安装或者在 `https://[IP]:5480`安装

这里选择使用网页安装

![1742398837653](image/05-installVCSA/1742398837653.png)

选择安装程序

![1742398888240](image/05-installVCSA/1742398888240.png)

这里最后确认一次配置，之后配置SSO域名即可

## 链接到EXSI主机

登陆VCSA主机

## 故障解决

### 无法运行vdcpromo

删除VCSA虚拟机，重新安装，配置正确的DNS
