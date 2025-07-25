---
id: hcip-datacom-core-technology
slug: hcip-datacom-core-technology
title: HCIP数通核心技术
date: 2025-7-11
authors: m1ishu
tags: [eNSP]
keywords: [eNSP]
---
## 一、网络基础与设备架构

* 描述网络设备的逻辑结构及各个功能模块
* 描述网络设备的转发流程
* 识别IP路由表与FIB表，并能分析其在转发流程中的作用
* 描述并分析路由引入原理及其典型使用场景

  > [学习链接](/docs/skill/HCIP/Network-fundamentals-and-equipment-architecture)
  >

---

## 二、动态路由协议

### OSPF（开放最短路径优先）

* 描述OSPF路由计算的整体流程（SPF算法）
* 阐明DR（指定路由器）和BDR（备份指定路由器）的作用
* 描述OSPF的报文类型及其作用
* 完成OSPF的基本配置
* 区分邻居关系与邻接关系
* 理解并解释LSA（链路状态广告）关键字段的作用与类型
* 描述区域内、区域间以及外部路由的计算原理
* 描述区域间防环机制
* 掌握特殊区域类型（如Stub/NSSA）及其特征
* 掌握OSPF的路由汇总方法及应用优势
* 配置OSPF的报文认证，增强安全性

### IS-IS（中间系统到中间系统）

* 理解IS-IS基本概念及其工作原理
* 描述IS-IS与OSPF的对比差异
* 实现IS-IS的常用配置

### BGP（边界网关协议）

* 描述BGP基本概念、对等体类型及状态机
* 阐明BGP对等体建立过程
* 配置基本的BGP
* 掌握常见路径属性（如AS_PATH、LOCAL_PREF等）
* 理解并应用BGP路由反射器，包括其工作机制和应用场景
* 理解并应用BGP的优选路由规则
* 配置并实施BGP的路由控制
* 掌握MP-BGP（多协议BGP）概念，为VPN/EVPN服务
* 描述EVPN的起源、常见路由类型及典型应用场景

---

## 三、路由策略与控制技术

* 使用ACL/IP-Prefix匹配感兴趣的路由
* 使用Filter-Policy进行路由过滤
* 使用Route-Policy进行路由过滤及属性修改
* 掌握策略路由的分类与使用场景
* 配置并使用MQC（模块化QoS命令行）进行策略路由和报文过滤

---

## 四、二层网络与以太网技术

### STP系列技术

* 理解STP的基本原理及缺陷
* 描述RSTP对STP的改进及工作机制
* 配置RSTP
* 理解MSTP的改进与各种概念（实例、区域等）
* 配置MSTP及掌握其工作过程

### 堆叠与集群

* 描述交换机堆叠与集群基本概念
* 阐述其建立过程及分裂检测机制

---

## 五、组播技术

* 理解组播定义、地址结构与数据转发原理
* 掌握反向路径转发（RPF）机制
* 理解IGMP（1/2/3版本）、Snooping、SSM Mapping、代理的原理及配置
* 理解PIM（DM/SM）工作原理及其配置方法

---

## 六、IPv6及其相关协议

* 描述IPv6发展现状与优势
* 掌握IPv6基本概念、地址格式、报文头结构
* 配置IPv6地址与路由
* 理解ICMPv6功能、报文类型及格式
* 掌握NDP、无状态地址自动配置、DHCPv6等机制
* 实现IPv6地址自动配置

---

## 七、安全与VPN技术

* 理解防火墙的定义、类型、发展与安全策略（安全区域、会话表等）
* 区分防火墙、路由器和交换机的角色
* 配置Stelnet、安全策略、本机防护
* 掌握VPN分类与实现方式
* 理解VRF基本概念及应用，完成VRF配置
* 掌握BFD（快速检测协议）原理与配置，提高链路故障检测能力

---

## 八、高可用与地址管理技术

* 分析单网关引发的问题
* 掌握VRRP（虚拟路由冗余协议）原理、主备切换过程及配置方法
* 掌握DHCP原理、分配规则与DHCP Relay应用场景，完成基本配置

---

## 九、网络管理与WLAN技术

* 阐述网络管理的发展趋势、功能与协议（如SNMP、NetConf等）差异
* 理解不同协议在网络管理中的应用场景
* 掌握大型WLAN的组网架构、关键技术及配置能力

---

## 十、整体数通解决方案

* 描述数通网络在数字世界中的作用
* 理解数通网络解决方案的分类（园区、WLAN、数据中心、广域网络）
* 掌握华为数通整体解决方案架构与实践应用
