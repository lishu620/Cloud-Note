# 解决Windows10账户被禁用的问题

# 问题分析

预装有Windows10家庭版系统的笔记本电脑有时因为一些误操作导致之前创建的本地管理员账户被删除掉，而系统内置的Administrator账户默认又是禁用的状态无法使用，因此会导致开机提示“你的账户已被停用。请向系统管理员咨询”

![image](assets/image-20250817013118-qcrg1il.png)

# 问题复现

由于问题复现无法使用正常的工作中Windows，因此在VMware中创建了一个Windows10Pro来复现Bug

如下图是一个正常运行的Windows

![image](assets/image-20250817012532-6etlt0q.png)

进入计算机管理-本地用户和组-用户

![image](assets/image-20250817012938-j2xpz1t.png)

将test账户禁用，重启就能复现问题

![image](assets/image-20250817013020-ov1c5kx.png)

如下图，成功复现问题

![image](assets/image-20250817013118-qcrg1il.png)

# 问题解决

若是无法进入系统，可以在开机出现微软图标下面有转圈的小点时（如下图），立即关断电源。在此界面断开电源多次即可进入高级启动界面。

![image](assets/image-20250817013330-fiuesc7.png)

只要进入以下界面就算成功

![image](assets/image-20250817013413-2aejeu3.png)

进入该界面之后选择高级选项

![image](assets/image-20250817013516-eni3stt.png)

选择疑难解答-高级选项

![image](assets/image-20250817013539-w1p5sw1.png)​

![image](assets/image-20250817013557-x7rmd02.png)​

之后选择高级选项-启动选项，重启

![image](assets/image-20250817013657-dro8ld0.png)按数字4或F4进入安全模式

![image](assets/image-20250817013722-y10i30p.png)

‍

![image](assets/image-20250817013953-32hevcj.png)

## 安全模式下的Windows10

![image](assets/image-20250817014045-xoti2xp.png)

进入计算机管理界面（Win+X或其他方式）

选择本地用户和组-用户中

![image](assets/image-20250817014123-45v50op.png)

找到使用的Windows账户

![image](assets/image-20250817014207-77c7oto.png)

将账户禁用关闭，重启即可使用

![image](assets/image-20250817014248-ux1bkby.png)

在安全模式无法进入Windows的启动菜单，使用Alt+F4重启

![image](assets/image-20250817014341-f4xomwf.png)

已经能够正常使用Windows

![image](assets/image-20250817014435-q3x0pz7.png)

![image](assets/image-20250817014502-ov1l5vh.png)
