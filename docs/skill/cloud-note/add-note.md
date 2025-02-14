---
id: cloud-note-add-note
slug: /cloud-note-add-note
title: 如何添加笔记
authors: mlishu
---

## 1.创建markdown文件

在需要配置的地方创建markdown文件

固定格式头

```markdown
id: cloud-note-add-note
slug: /cloud-note-add-note
title: 如何添加笔记
authors: mlishu
```

在这里我们主要需要记住ID用于识别

## 2.在sidebars.ts创建链接

找到根目录下的sidebars.ts文件

在本项目中我创建了`skill`和`tools`两个页面，前者用于添加笔记文件，后者则是工具页面中的内容

这里我选择提供一种`skill`方案

```ts
{
      label: '云笔记配置',
      type: 'category',
      link: {
        type: 'doc',
        id: 'skill/cloud-note/cloud-note-guides',
      },
      items: [
        'skill/cloud-note/cloud-note-config',
        'skill/cloud-note/cloud-note-console',
      ],
    },
```

在第一部中的ID需要添加到2中的ID或`item`中，但是必须与ID完全匹配

## #markdown编辑工具

在这里我使用的编辑工具为：**Typora**