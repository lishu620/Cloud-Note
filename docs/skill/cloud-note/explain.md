---
id: cloud-note-explain
slug: /cloud-note-explain
title: 源码解释
authors: mlishu
---

## 根目录

## blog目录

## data目录

### social.ts

这个文件是**首页-第一屏**的社交账号

即GitHub等

这里我提供一个添加网易云音乐的方法

```ts
export type Social = {
  github?: string
  cloudmusic?: string
}
```

在`export type Social`条目添加`cloudmusic?: string`作为添加索引

```ts
const social: Social = {
  github: 'https://github.com/mlishu',
  cloudmusic: 'https://music.163.com/#/user/home?id=2074448328',
}
```

在`const social: Social`中添加链接（外链），例如：`cloudmusic: 'https://music.163.com/#/user/home?id=2074448328'`

```ts
const socialSet: Record<keyof Social | 'rss', SocialValue> = {
  github: {
    href: social.github,
    title: 'GitHub',
    icon: 'ri:github-line',
    color: '#010409',
  },
  cloudmusic: {
    href: social.cloudmusic,
    title: '网易云',
    icon: 'ri:netease-cloud-music-line',
    color: '#C20C0C',
  },
}
```

这里用于配置图标等项目

### features.tsx

这个文件配置的是**首页-个人特点**的内容

### projects.tsx

这个文件配置的是**首页-项目展示**的内容

## docs目录

## src目录