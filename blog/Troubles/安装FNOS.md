---
title: 安装FN-NAS-OS
slug: Install-FNNASOS
date: 2025-3-13
authors: mlishu
tags: [璃殊折腾记, FnOS]
keywords: [Troubles, FnOS]
---
<!-- truncate -->

点击跳转[官方文档](https://help.fnnas.com/articles/fnosV1/start/install-os.md)

## 1. 下载安装镜像

前往 [飞牛私有云官网](https://www.fnnas.com/download?key=fnos) 下载最新的系统安装 iso 镜像。

## 2. 制作引导盘

此步骤需要在电脑上使用写盘工具将镜像文件烧录到 U盘中。U 盘在完成安装后就可推出。写盘工具可选择 Rufus （[Rufus4.5 下载 ](https://download.liveupdate.fnnas.com/x86_64/packages/rufus-4.5.exe)、[Rufus 4.0 下载](https://download.liveupdate.fnnas.com/x86_64/packages/rufus-4.0.exe)、[Rufus 官网](https://rufus.ie/)）、[Balenaetcher](https://etcher.balena.io/) 等。下文以 Rufus 为例：

### 1. 选择要写入的 U 盘

![image-20240826144208995](https://help-static.fnnas.com/image-20240826144208995.png)

### 2. 选择下载好的镜像

![image-20240826144532610](https://help-static.fnnas.com/image-20240826144532610.png)

### 3. 点击开始

进度条显示 “准备就绪” 即为完成，可拔出 U 盘。

![image-20240826144432487](https://help-static.fnnas.com/image-20240826144432487.png)

## 3. 将系统安装到设备上

### 1. 设备准备

* 将主机接入至少一块硬盘用于做系统盘。系统盘推荐选择 SSD 固态硬盘以获得更快的系统运行速度。
* 将主机接好网线。暂时不支持只有无线网卡的情况下安装。
* 接好电源、显示器、键盘、鼠标，鼠标非必需。

### 2. 选择引导盘

将制作好的引导盘插入到主机的接口。按主机电源开机，开机同时快速按键盘热键进入boot 设备选择界面。不同设备主板进入boot 页面的热键不同，F2、F7、F8、F10、F11、F12、esc 、Delete 键都有可能。

选择引导盘，按回车，进入安装页面。

![Upan](https://lh6.googleusercontent.com/proxy/ejIv4bp8XNNxbBqjWJy6ojZ4T8i3CZB3f3QTNox8keDgVjawuAw0_oiyeVGQzpla-wVKz9Hk1NiYyJEAF2-5m0I0fl_Nqg50AoKxEvppACjTBBdpc4OctBhv-HPLrpeFbA)

### 3. 选择安装方式

推荐选择 Graphical Install（图形化安装流程），回车进入下一步。

![img_v3_02eb_e43e6332-03f4-46ba-bbb7-873970e5e62g](https://help-static.fnnas.com/img_v3_02eb_e43e6332-03f4-46ba-bbb7-873970e5e62g.jpg)

### 4. 选择系统盘

方向键切换选择要用于系统安装的硬盘，回车或 Alt+N 进入下一步。

![img_v3_02e4_c9914569-6898-4134-bfa8-21094f7ca10g](https://help-static.fnnas.com/img_v3_02e4_c9914569-6898-4134-bfa8-21094f7ca10g.jpg)

### 5. 设置系统分区和 Swap 大小

在系统盘容量充足的情况下，建议系统分区设置为 64 GB。如安装在虚拟机下，可按情况适当减小。Swap 分区大小已按物理内存大小计算推荐值，可按硬件情况自行调整。

> 注意：在 fnOS 上，系统将只安装在一块硬盘中。系统盘除系统分区以外的空间，可用于创建存储空间安装应用和存储文件。建议根据需要选择合适容量的 SSD 作为系统盘。

确认后，回车或 Alt+N 进入下一步。

![img_v3_02e4_b31a6cf9-cf9e-49b6-a167-f35e4c0e032g](https://help-static.fnnas.com/img_v3_02e4_b31a6cf9-cf9e-49b6-a167-f35e4c0e032g.jpg)

### 6. 确认格式化

所选择的系统盘将被格式化，所有内容将被删除，回车或 Alt+O 确认后开始安装。

![image-20240826151739443](https://help-static.fnnas.com/image-20240826151739443.png)

![img_v3_02e1_aebaa472-25bb-432a-8b2c-63c8e20e819g](https://help-static.fnnas.com/img_v3_02e1_aebaa472-25bb-432a-8b2c-63c8e20e819g.jpg)

### 7. 设置网络

安装完成后将自动进入网络设置，系统将自动检测已连接的网卡并获取动态 IP。如网卡未开启 DHCP，你需要手动设置 IP。确认后，回车或 Alt+S 保存设置。

![img_v3_02e1_8f1fe992-40c3-40c4-817f-6e3ad9d3e04g](https://help-static.fnnas.com/img_v3_02e1_8f1fe992-40c3-40c4-817f-6e3ad9d3e04g.jpg)

### 8. 重启设备

网络设置保存成功后，你可以将引导盘从主机上拔出。回车或 Alt+O 重启系统。

![img_v3_02e1_151c7c83-8d97-4818-9e10-ced5c61176eg](https://help-static.fnnas.com/img_v3_02e1_151c7c83-8d97-4818-9e10-ced5c61176eg.jpg)

### 9. 重启成功进入终端

设备重启成功后将自动进入终端登录页，这意味着系统已成功安装并启动！请记住所设置的 IP 地址，接下来你将通过浏览器访问此地址来设置和使用 fnOS。现在你可以将显示器、键盘、鼠标从主机上拔除了。

![image-20240823180036795](https://help-static.fnnas.com/image-20240823180036795.png)

## 4. 浏览器访问 fnOS

在电脑浏览器上访问上一步所设置的 IP 地址。首次进入 fnOS，你需要完成 2 项简单的系统初始化设置。点击 **开始 NAS 之旅** 进入初始化。

![img_v3_02e1_bfbf7b0c-7610-49da-85bb-2e96aec09eag](https://help-static.fnnas.com/img_v3_02e1_bfbf7b0c-7610-49da-85bb-2e96aec09eag.jpg)

### 1. 设置设备名称

设备名称支持数字、英文及短横线（-），不能以短横线开头或结尾。

### 2. 设置管理员账号

fnOS 用户分为管理员用户和普通用户，且支持创建多个管理员。首位管理员为超级管理员，相较于其他管理员的特殊性在于：创建后不能删除、只能停用，且默认开启 SSH 权限。请设置高强度的密码以提高账号安全性。

确认后，点击 **进入fnOS** 完成设置。

![img_v3_02e1_832c209b-160d-4179-8ea8-ff3d032aa92g](https://help-static.fnnas.com/img_v3_02e1_832c209b-160d-4179-8ea8-ff3d032aa92g.jpg)

### 3. 进入桌面

建议尽快创建存储空间以便上传文件和安装应用。如果硬盘还没有准备好，也可以点击 **稍后** 跳过，后续可从 **设置** > **存储空间管理** 中创建。请参考 [如何创建存储空间](https://help.fnnas.com/articles/fnosV1/volume/create-volume.md) 以了解更多信息。

![img_v3_02e1_135625eb-c2ae-4de2-8d51-2483703d470g](https://help-static.fnnas.com/img_v3_02e1_135625eb-c2ae-4de2-8d51-2483703d470g.jpg)
