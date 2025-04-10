---
title: 华为 FusionAccess 配置部署
slug: hw-fusion-access
date: 2025-3-28
authors: mlishu
tags: [云计算, Fusion]
keywords: [cloud-computer, Fusion]
---
华为 FusionAccess 配置部署

<!-- truncate -->

首先需要部署FusionCompute

## 安装Access

在Fusion Compute中创建一个新的虚拟机，命名为 `FA-01`，配置最低8核16G内存，建议存储不低于60GiB

挂载 `FusionAccess_Manager_Installer_8.0.2-x86_64.iso`，重启虚拟机。

虚拟机重启成功后，请在60秒内选择“Test this media & install EulerOS V2.0SPx”，按Enter。安装是自动进行的，全程不需要干涉

下图是自动安装的过程

![1743567488443](image/15-FusionAccess安装/1743567488443.png)

![1743567508595](image/15-FusionAccess安装/1743567508595.png)

## 配置Access

使用VNC登录 `root`账户，密码：`Cloud12#$`，进入初始化界面

在这里根据规划配置基础架构虚拟机模板IP地址、子网掩码和网关，按 `Enter`

![1743567864183](image/15-FusionAccess安装/1743567864183.png)

配置完成后会进入AccessTool界面，输入1开始安装驱动工具

![1743568333086](image/15-FusionAccess安装/1743568333086.png)

在按照好Tool之后，我们需要修改时间才能安装组件

> **注意** ：此处有个坑，一定会造成安装失败。
> Fusion Access 的内部通信证书安装时是写死的，从2014年7月28日到2024年7月25日，内部组件使用该证书进行通信，过期后自然无法通信。
> 官方通告见[【CLD-P-A-202337】关于FusionAccess产品证书过期影响登录桌面的预警通知](https://support.huawei.com/enterprise/zh/bulletins-product/ENEWS2000020185)。
> 那么怎么处理呢？在[手动更新组件间通讯证书](https://support.huawei.com/hedex/hdx.do?docid=EDOC1100184801&id=ZH-CN_TOPIC_0320043134)中详细的记载了如何手动更新证书。
> 听着就麻烦，所以我决定先修改 `FA-01`虚拟机内的日期为 `2024-07-01`，此时安装组件，即可安装成功。
> 调日期的时候记得不要调的太往前，默认的试用License只有一年，当然你手里有License当我没说。
> 安装成功后，参考[一键更新组件间通讯证书](https://support.huawei.com/hedex/hdx.do?docid=EDOC1100184801&id=ZH-CN_TOPIC_0320043133)进行证书更新，随后将日期修改回正确日期即可。

```
timedatectl set-time '2024-7-15 12:00:00'
```

![1743569182554](image/15-FusionAccess安装/1743569182554.png)

输入 `startTools`，按回车确认。

弹出“FusionAccess”界面。（如果root帐号是前两次登录虚拟机，系统会直接进入“FusionAccess”界面。）
输入“3”选择“Software”，按“Enter”。
![](https://bucket.international.wpc.arlxn.top/d8af2334f8b6a45fb844db8a48a0d643.png)

输入“1”选择“All In One”，按“Enter”。
![](https://bucket.international.wpc.arlxn.top/35296d677bce1dd52aeb44328fa3cbe3.png)

输入“1”选择“Create a new node”，按“Enter”。
![](https://bucket.international.wpc.arlxn.top/005396e3b58e13d74a452f5e83671385.png)

输入“1”选择“Common mode”，按“Enter”。
![](https://bucket.international.wpc.arlxn.top/281ced3fc1555ac4e3416c48aed66707.png)

输入“Local Service IP”，为本服务器的业务平面IP地址，按“Enter”。
系统开始安装并配置组件。
当显示 `Install all components successfully.`时，表示安装成功。
![1743569465440](image/15-FusionAccess安装/1743569465440.png)

输入“e”，并按“Enter”退出。
完成主节点虚拟机组件的安装与配置。

## 网页配置

输入 `https://主ITA业务平面IP地址:8448`进入网页管理界面

首次登录需要设置网页密码

![1743569644681](image/15-FusionAccess安装/1743569644681.png)

之后便会进入登陆界面

![1743569682087](image/15-FusionAccess安装/1743569682087.png)

输入用户admin，密码刚刚配置的之后进入配置界面

配置对接FusionCompute

![1743569776210](image/15-FusionAccess安装/1743569776210.png)

配置登录访问

![1743569817272](image/15-FusionAccess安装/1743569817272.png)

![1743569828463](image/15-FusionAccess安装/1743569828463.png)

默认策略保持默认，下一步之后确认配置，没有问题直接下一步进行部署配置

最后确认配置![1743569860400](image/15-FusionAccess安装/1743569860400.png)

配置完成后进入dashboard，等待中间的服务状态都变成绿色图标，预计需要20分钟左右。此时可以先去准备模板机

### 证书更新

登录ITA，导航到系统-操作变更-证书管理

![1743573156327](image/15-FusionAccess安装/1743573156327.png)

点击更新证书，随后输入证书密码，该密码仅用于保护内部通信证书

![1743573216291](image/15-FusionAccess安装/1743573216291.png)

任务下发后导航到系统-任务与日志-任务跟踪查看证书更新进度。预计需要20分钟左右，证书更新完成后会强制退出登录

更新成功后可见日期已更新

![1743573558731](image/15-FusionAccess安装/1743573558731.png)
