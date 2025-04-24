---
title: 配置Windows Server 2022
slug: config-windows-server
date: 2025-3-19
authors: mlishu
tags: [Windows]
keywords: [Windows]
---
> 系统版本：`Windows Server 2022`

### 1.配置管理员密码

使用ISO镜像安装完成后，第一次打开电脑便会进入这个界面

按照 `Microsoft`密码要求，密码要求为：`大写字母`+`小写字母`+`数字`+`字符`

下图是 `Windows Server 2022`密码配置界面

![1742362052755](image/02-configAD/1742362052755.png)

### 2.安装Vmware Tool

由于这台 `Windows Serve`r由 `VMware EXSI`管理，因此需要安装 `VmwareTools`

按照 `Vmware Workstation Pro`安装流程即可

### 3.配置网络和激活

网络配置完成后，打开 `powershell`输入后会自动进入 `MAS3.0`界面

```powershell
irm massgrave.dev/get | iex
```

![1742362691708](image/02-configAD/1742362691708.png)

使用 `数字3`激活

### 4.修改计算机名

在 `运行`对话框中，输入 `sysdm.cpl`

单击 `更改`，在 `计算机名`中填入规划的计算机名，单击 `确定`

根据界面提示完成配置，重新启动计算机后使用 `Administrator`帐号登录。

到这里位置，`Windows Server`配置就算完成了
