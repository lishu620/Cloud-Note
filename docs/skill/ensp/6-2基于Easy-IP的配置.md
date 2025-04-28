---
id: 6-1-Configuration-based-on-Easy-IP
slug: Configuration-based-on-Easy-IP
title: 6-2：基于Easy-IP的配置
date: 2025-4-28
authors: m1ishu
tags: [eNSP]
keywords: [eNSP]
---
## 实验拓扑

![1745823043252](image/6-1基于NAT池的配置/1745823043252.png)

## IP规划

|        | AR1         | AR2           | ISP         |
| ------ | ----------- | ------------- | ----------- |
| G0/0/0 | 192.168.1.1 | 192.168.1.254 |             |
| G0/0/1 |             | 10.59.1.1     | 10.59.1.254 |

配置Telnet登录和静态路由见[6-1：基于NAT池的配置](/docs/skill/ensp/Configuration-based-on-NAT-pool)

## Easy-IP配置

```
nat address-group 1 10.59.1.10 10.59.1.20
acl 2000
rule 5 permit source any
int g0/0/1
nat outbound 2000
```

## 配置验证

```
<AR2>dis nat session all 
  NAT Session Table Information:

     Protocol          : TCP(6)
     SrcAddr  Port Vpn : 192.168.1.1     3780                               
     DestAddr Port Vpn : 10.59.1.254     5888                               
     NAT-Info
       New SrcAddr     : 10.59.1.1    
       New SrcPort     : ----
       New DestAddr    : ----
       New DestPort    : ----

  Total : 1
```
